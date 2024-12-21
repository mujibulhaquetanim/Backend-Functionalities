import express from 'express';
import { Request, Response } from 'express';

// Payment Strategy Interface
interface PaymentStrategy {
    processPayment(amount: number): Promise<string>;
}

// Concrete Payment Strategies
class PayPalStrategy implements PaymentStrategy {
    async processPayment(amount: number): Promise<string> {
        // PayPal payment logic here
        return `Payment of $${amount} processed via PayPal`;
    }
}

class StripeStrategy implements PaymentStrategy {
    async processPayment(amount: number): Promise<string> {
        // Stripe payment logic here
        return `Payment of $${amount} processed via Stripe`;
    }
}

class RazorPayStrategy implements PaymentStrategy {
    async processPayment(amount: number): Promise<string> {
        // RazorPay payment logic here
        return `Payment of $${amount} processed via RazorPay`;
    }
}

// Payment Context
class PaymentProcessor {
    private strategy: PaymentStrategy;

    setStrategy(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    async processPayment(amount: number): Promise<string> {
        if (!this.strategy) {
            throw new Error('Payment strategy not set');
        }
        return await this.strategy.processPayment(amount);
    }
}

// Express API Setup
const app = express();
app.use(express.json());

// Payment endpoint
app.post('/api/payment', async (req: Request, res: Response) => {
    try {
        const { amount, provider } = req.body;

        if (!amount || !provider) {
            return res.status(400).json({ error: 'Amount and provider are required' });
        }

        const paymentProcessor = new PaymentProcessor();

        // Select strategy based on provider
        switch (provider.toLowerCase()) {
            case 'paypal':
                paymentProcessor.setStrategy(new PayPalStrategy());
                break;
            case 'stripe':
                paymentProcessor.setStrategy(new StripeStrategy());
                break;
            case 'razorpay':
                paymentProcessor.setStrategy(new RazorPayStrategy());
                break;
            default:
                return res.status(400).json({ error: 'Invalid payment provider' });
        }

        const result = await paymentProcessor.processPayment(amount);
        res.json({ success: true, message: result });

    } catch (error) {
        res.status(500).json({ error: 'Payment processing failed', message: error.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});