export const isHandlerEnabled = (config = {}) => {
  return Object.prototype.hasOwnProperty.call(config, "handlerEnabled") && !config.handlerEnabled ? false : true;
};

export const requestHandler = request => {
  if (isHandlerEnabled(request)) {
    // DO SOMETHING
  }
  return request;
};

export const successHandler = response => {
  if (isHandlerEnabled(response)) {
    // DO SOMETHING
  }
  return response;
};

export const errorHandler = error => {
  if (isHandlerEnabled(error.config)) {
    // DO SOMETHING
  }
  return Promise.reject({ ...error });
};