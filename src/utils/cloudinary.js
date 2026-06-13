import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

// console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
// console.log("API Key:", process.env.CLOUDINARY_API_KEY);
// console.log("API Secret:", process.env.CLOUDINARY_API_SECRET ? "Present" : "Missing");

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        console.log("Uploading:", localFilePath);
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } 
    catch (error) {
    console.log("Cloudinary Error:", error);

    if (localFilePath && fs.existsSync(localFilePath)) {
        fs.unlinkSync(localFilePath);
    }

    return null;
}
    // catch (error) {
    //     fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
    //     return null;
    // }
}



export {uploadOnCloudinary}

// import { v2 as cloudinary } from 'cloudinary';
// import fs from "fs";


// cloudinary.config({ 
//         cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//         api_key: process.env.CLOUDINARY_API_KEY, 
//         api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
// });

// const uploadOnCloudinary = async (localFilePath) => {
//     try {
//         if(!localFilePath)  return null;
//         //upload the file on cloudinary
//         const response = await cloudinary.uploader.upload(localFilePath,{
//             resource_type: "auto"
//         })
//         //file has been uploaded successfully
//         //console.log("File is Uploaded on cloudinary", response.url);
//         fs.unlinkSync(localFilePath)
//         return response;
//     } catch (error){
//         fs.unlinkSync(localFilePath)    //remove the locally saved temporary file as the upload opn got failed
//         return null;
//     }
// }
// export { uploadOnCloudinary}