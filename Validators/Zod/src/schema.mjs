import { z } from 'zod';

const UserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
});

User.parse({ username: "Ludwig" });

type User = z.infer<typeof User>;
console.log(User);