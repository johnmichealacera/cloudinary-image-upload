# Cloudinary Image Upload Utility

A simple utility package to upload images to Cloudinary using Node.js.

## Installation

To install the package, use npm or yarn:

```bash
npx jsr add @jmacera/cloudinary-image-upload
```


## Usage

Import the handleFileChange function from the package and use it to upload an image to Cloudinary.

### Example
```
import { handleFileChange } from 'your-package-name';

async function uploadImage(file: File) {
  const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/your-cloud-name/image/upload';
  const uploadPreset = 'your-upload-preset';
  const apiKey = 'your-api-key';

  try {
    const secureUrl = await handleFileChange(cloudinaryUrl, uploadPreset, apiKey, file);
    console.log('Uploaded Image URL:', secureUrl);
  } catch (error) {
    console.error('Error uploading image:', error);
  }
}

uploadImage();
```
### Parameters
- cloudinaryUrl: string - The Cloudinary API URL for uploading images.
- uploadPreset: string - The upload preset configured in your Cloudinary account.
- apiKey: string - Your Cloudinary API key.
- file: File - The file you want to upload.

### Return Value
The function returns a 
- ```Promise<string | undefined>:string```: The secure URL of the uploaded image if successful.
- undefined: If an error occurs during the upload.

## Requirements
Node.js v16.0.0 or later.
A Cloudinary account with an API key and an upload preset.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Contributing
If you want to contribute to this package, feel free to submit issues or pull requests on the GitHub repository.

## Author
John Micheal Acera - https://github.com/johnmichealacera