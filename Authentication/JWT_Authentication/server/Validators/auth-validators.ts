import { z } from 'zod';

const RegisterSchema = z.object({
    name: z.string({
        required_error: 'Name is required'
    }).trim().min(3, 'Name must be at least 3 characters'),
    email: z.string({
        required_error: 'Email is required'
    }).trim().email({
        message: 'Invalid email'
    }),
    username: z.string({
        required_error: 'Username is required'
    }).trim().min(3, 'Username must be at least 3 characters'),
    password: z.string({
        required_error: 'Password is required'
    }).trim().min(6, 'Password must be at least 6 characters'),
    phone: z.string({
        required_error: 'Phone is required'
    }).trim().min(10, 'Phone must be at least 10 characters')
});

const LoginSchema = z.object({
    email: z.string({
        required_error: 'Email is required'
    }).trim().email({
        message: 'Invalid email'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).trim().min(6, 'Password must be at least 6 characters')
});

export { RegisterSchema, LoginSchema };