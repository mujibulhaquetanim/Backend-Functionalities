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
    userName: z.string({
        required_error: 'Username is required'
    }).trim().min(3, 'Username must be at least 3 characters'),
    password: z.string({
        required_error: 'Password is required'
    }).trim().min(6, 'Password must be at least 6 characters'),
    phone: z.string({
        required_error: 'Phone is required'
    }).trim().min(11, 'Phone must be at least 11 characters')
});

const LoginSchema = z.object({
    email: z.string().email({
        message: 'Invalid email format'
    }).trim(),
    password: z.string().trim().min(6, 'Invalid password')
});

export { RegisterSchema, LoginSchema };