import { z } from 'zod';

const UserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
});

export default UserSchema;