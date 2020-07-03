module.exports = async (req, res, next) => {
  const {
    message,
    data,
    status,
  } = res.locals;

  if (!message && !data) {
    res.status(404).json({
      isError: true,
      message: 'Route not Found',
    });
    return;
  }

  const response = {
    message,
    data,
  };

  res.status(status || 200).json(response);
};