// declare used  to inform TypeScript about the existence of the Stripe object, which is provided globally by the Stripe CDN
declare let Stripe: (apiKey: string) => any;
const stripe = Stripe(process.env.STRIPE_Publishable_KEY!);

let cart: Array<{ id: string; name: string; price: number; quantity: number }> = [];

function addToCart(id: string, name: string, price: number): void {
  const existingItem = cart.find((item) => item.id === id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }
  updateCartDisplay();
}

// updateCartDisplay function is used to update the cart display and calculate the total price of the cart
function updateCartDisplay(): void {
  const cartItems = document.getElementById("cart-items")!;
  // Calculate total price of cart
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  // Update cart display using innerHTML
  // join method is used to convert an array of strings into a single string
  cartItems.innerHTML = cart
    .map(
      (item) =>
        `<div>${item.name} x ${item.quantity} ---> $${item.price * item.quantity}</div>`
    )
    .join("");

  document.getElementById("cart-total")!.textContent = total.toString();
}

// checkout function is used to handle the checkout process
async function checkout(): Promise<void> {
  try {
    const response = await fetch("/create-checkout-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart }),
    });

    // extracting the clientSecret from the response and using it to create the payment element
    const { clientSecret } = await response.json();
    const elements = stripe.elements({ clientSecret });
    const paymentElement = elements.create("payment");
    // mounting the payment element to the DOM with an id of payment-element so that it can be rendered
    paymentElement.mount("#payment-element");

    // showing the payment form and hiding the checkout button so that the user cannot checkout more than once
    document.getElementById("payment-form")!.style.display = "block";
    document.getElementById("checkout-button")!.style.display = "none";

    // adding an event listener to the payment form so that it can be submitted
    const form = document.getElementById("payment-form")!;
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // confirming the payment with the stripe API and confirmParams is used to specify the return url, if the payment is successful then the user will be redirected to the success.html page otherwise the user will get an error
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/success.html`,
        },
      });

      if (error) {
        const messageDiv = document.getElementById("payment-message")!;
        messageDiv.textContent = error.message;
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

// Attach functions globally so that they can be accessed from the browser console and used in the checkout process
(window as any).addToCart = addToCart;
(window as any).checkout = checkout;
