import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000; 

export const MONGODB_URL = process.env.MONGODB_URL;

export const BUCKET_NAME = process.env.BUCKET_NAME;

export const CLOUD_NAME = process.env.CLOUD_NAME;

export const CLOUDINARY_SECRET_ACCESS_KEY = process.env.CLOUDINARY_SECRET_ACCESS_KEY;

export const CLOUDINARY_ACCESS_KEY_ID = process.env.CLOUDINARY_ACCESS_KEY_ID;