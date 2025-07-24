export const handler = async (event) => {
    // simple echo
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({"message": "salam, bhaifut kene cholor... - lambda-tun koirji!"})
  };
  return response;
};
