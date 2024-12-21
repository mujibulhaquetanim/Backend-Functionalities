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

