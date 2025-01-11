import cloudinary from 'cloudinary';
import { CLOUD_NAME, CLOUDINARY_ACCESS_KEY_ID, CLOUDINARY_SECRET_ACCESS_KEY } from './serverConfig.js';



export const Cloud = cloudinary.v2.config({
    cloudName: CLOUD_NAME,
    accessKeyId: CLOUDINARY_ACCESS_KEY_ID,
    secretAccessKey: CLOUDINARY_SECRET_ACCESS_KEY
});



