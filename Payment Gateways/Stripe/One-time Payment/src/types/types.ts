export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export interface PaymentResponse {
    clientSecret: string;
    error?: string;
}