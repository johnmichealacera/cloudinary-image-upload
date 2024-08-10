/**
+  * This module contains the function to upload file to the cloudinary api.
+  * @module
+  */
export async function handleFileChange(
  cloudinaryUrl: string,
  uploadPreset: string,
  apiKey: string,
  file: File
): Promise<string | undefined> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset);
  formData.append('api_key', apiKey);

  try {
    const response = await fetch(cloudinaryUrl, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (data?.secure_url) {
      return data.secure_url;
    } else {
      console.error('Error uploading file:', data);
      return undefined;
    }
  } catch (err) {
    console.error('Error:', err);
    return undefined;
  }
}
