const throwError = (message, code) => {
  const error = new Error(message);
  error.code = code;

  throw error;
};

export default throwError;
