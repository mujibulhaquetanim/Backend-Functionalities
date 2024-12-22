import { Router, Request, Response } from 'express';

// Payment Strategy Interface
interface PaymentStrategy {
    processPayment(amount: number): Promise<string>;
}

// Concrete Payment Strategies
class PaypalStrategy implements PaymentStrategy {
    async processPayment(amount: number): Promise<string> {
        // Implement actual Paypal integration here
        return `Payment of $${amount} processed via PayPal`;
    }
}

class StripeStrategy implements PaymentStrategy {
    async processPayment(amount: number): Promise<string> {
        // Implement actual Stripe integration here
        return `Payment of $${amount} processed via Stripe`;
    }
}

class RazorpayStrategy implements PaymentStrategy {
    async processPayment(amount: number): Promise<string> {
        // Implement actual Razorpay integration here
        return `Payment of $${amount} processed via Razorpay`;
    }
}

// Payment Processor Class
class PaymentProcessor {
    private strategies: Map<string, PaymentStrategy>;

    constructor() {
        this.strategies = new Map();
    }
    
    // Register a new payment strategy with the processor instance
    registerStrategy(provider: string, strategy: PaymentStrategy) {
        this.strategies.set(provider.toLowerCase(), strategy);
    }

    async processPayment(provider: string, amount: number): Promise<string> {
        const strategy = this.strategies.get(provider.toLowerCase());
        if (!strategy) {
            throw new Error(`Payment provider ${provider} not supported`);
        }
        return strategy.processPayment(amount);
    }
}

// Create Express Router
const router = Router();
const paymentProcessor = new PaymentProcessor();

// Register payment strategies with the processor instance
paymentProcessor.registerStrategy('paypal', new PaypalStrategy());
paymentProcessor.registerStrategy('stripe', new StripeStrategy());
paymentProcessor.registerStrategy('razorpay', new RazorpayStrategy());

// Payment endpoint
router.post('/process-payment', async (req: Request, res: Response) => {
    try {
        const { amount, provider } = req.body;

        if (!amount || !provider) {
            return res.status(400).json({ error: 'Amount and provider are required' });
        }

        const result = await paymentProcessor.processPayment(provider, amount);
        return res.json({ success: true, message: result });

    } catch (error) {
        return res.status(400).json({ 
            success: false, 
            message: error instanceof Error ? error.message : 'Payment processing failed' 
        });
    }
});

// Export router
export default router;