export default function httpError(statusCode, message) {
  return {
    statusCode,
    body: message
  };
}

