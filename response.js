// response.js
module.exports = function response(statusCode, data, message, res) {
    res.status(statusCode).json({
      status: statusCode,
      message,
      data,
    });
  };
  