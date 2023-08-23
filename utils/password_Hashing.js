import bcrypt from "bcrypt";

export const password_hashing = async (password) => {
  try {
    const hash_password = await bcrypt.hash(password, 10);
    return hash_password;
  } catch (error) {
    console.log(`Error is ${error}`.bgMagenta.white);
  }
};

export const compare_password = async (password, hash_password) => {
  return bcrypt.compare(password, hash_password);
};
