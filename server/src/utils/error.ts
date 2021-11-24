export class CustomError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

const errorHandler = (error) => {
  const { status, message } = error;
  return { status: status || 500, message };
};

export const errorWrapper = (fn) => {
  return (req, res, next) => {
    try {
      fn(req, res, next);
    } catch (error) {
      next(errorHandler(error));
    }
  };
};
