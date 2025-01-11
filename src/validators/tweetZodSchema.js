import {z} from 'zod';

export const tweetZodSchema = z.object(
    {
        body: z.string().min(1).max(250)
    }
);

//req.body ---> { body: "Hello World" }