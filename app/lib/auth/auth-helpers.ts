export const validateName = (name: string) => {
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(name);
};

export const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePassword = (password: string) => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/;
  return regex.test(password);
};

export const passwordsMatch = (password: string, confirmPassword: string) => {
  return password === confirmPassword;
};
