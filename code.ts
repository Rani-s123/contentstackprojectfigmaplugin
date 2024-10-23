/// <reference types="@figma/plugin-typings" />

// Custom base64 decoder function
function customAtob(input: string): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  let str = '';
  let buffer = 0;
  let bits = 0;

  for (let i = 0; i < input.length; i++) {
      const char = input.charAt(i);
      const charCode = chars.indexOf(char);

      if (charCode === -1) {
          continue; // Ignore invalid characters
      }

      buffer = (buffer << 6) | charCode;
      bits += 6;

      if (bits >= 8) {
          bits -= 8;
          str += String.fromCharCode((buffer >> bits) & 0xFF);
      }
  }

  return str;
}

// Custom base64 encoder function
function customBtoa(input: string): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  let str = '';
  let buffer = 0;
  let bits = 0;

  for (let i = 0; i < input.length; i++) {
      const charCode = input.charCodeAt(i);
      buffer = (buffer << 8) | charCode;
      bits += 8;

      while (bits >= 6) {
          bits -= 6;
          str += chars[(buffer >> bits) & 0x3F];
      }
  }

  if (bits > 0) {
      str += chars[(buffer << (6 - bits)) & 0x3F];
  }

  while (str.length % 4) {
      str += '='; // Add padding
  }

  return str;
}

// This function converts base64 to a Uint8Array
function base64ToUint8Array(base64: string): Uint8Array {
  const binaryString = customAtob(base64); // Use custom base64 decoding
  const len = binaryString.length;
  const uint8Array = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
      uint8Array[i] = binaryString.charCodeAt(i);
  }

  return uint8Array;
}

// This function encodes a Uint8Array to a base64 string
function uint8ArrayToBase64(uint8Array: Uint8Array): string {
  let binaryString = '';
  for (let i = 0; i < uint8Array.length; i++) {
      binaryString += String.fromCharCode(uint8Array[i]);
  }
  return customBtoa(binaryString); // Use custom base64 encoding
}

// Function to create an image fill from base64 data
async function createImageFillFromBase64(base64Data: string) {
  // Remove the data URL prefix if present
  const base64Prefix = "data:image/png;base64,";
  const base64WithoutPrefix = base64Data.startsWith(base64Prefix)
      ? base64Data.replace(base64Prefix, "")
      : base64Data;

  // Convert base64 string to Uint8Array
  const uint8Array = base64ToUint8Array(base64WithoutPrefix);

  // Convert Uint8Array back to base64 string for createImageAsync
  const base64String = uint8ArrayToBase64(uint8Array); // Convert back to base64 string

  // Create a new image on the Figma platform using the base64 string
  const img = await figma.createImageAsync(base64String); // Pass the base64 string

  // Create a rectangle and apply the image fill
  const imagePaint: ImagePaint = {
      type: "IMAGE",
      imageHash: img.hash,
      scaleMode: "FILL",  // Setting the required 'scaleMode' for ImagePaint
  };

  const rect = figma.createRectangle();
  rect.resize(200, 200); // Set the size of the rectangle
  rect.fills = [imagePaint];  // Apply the image fill to the rectangle
  figma.currentPage.appendChild(rect);  // Add the rectangle to the current page
}

// Example usage: Replace this with your actual base64 data
const base64Image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA" +
  "AAAAFCAYAAACNbyblAAAAHElEQVR42mP8z8AIAwA1ZzEzAOQZID4AAAAABJRU5ErkJggg=="; // Add a valid base64 image string

createImageFillFromBase64(base64Image)
  .then(() => {
      figma.closePlugin("Image fill applied successfully!");
  })
  .catch((error) => {
      figma.closePlugin(`Error: ${error.message}`);
  });
