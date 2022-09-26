import bcrypt from "bcryptjs";

export const encryptPassword = async (password) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(password, salt);
    return hash;
  } catch (error) {
    return errror;
  }
};

export const comparePassword = async (password, confirmPassword) => {
  try {
    return await bcrypt.compareSync(password, confirmPassword);
  } catch (error) {
    return error
  }
};