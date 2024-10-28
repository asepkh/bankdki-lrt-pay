import CryptoJS from "crypto-js";

export const encryptData = (data) => {
  const key = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;
  if (!key) {
    console.error("Encryption key not found");
    return data;
  }

  try {
    return CryptoJS.AES.encrypt(data, key).toString();
  } catch (error) {
    console.error("Encryption failed:", error);
    return data;
  }
};

export const decryptData = (encryptedData) => {
  const key = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;
  if (!key) {
    console.error("Encryption key not found");
    return encryptedData;
  }

  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error("Decryption failed:", error);
    return encryptedData;
  }
};
