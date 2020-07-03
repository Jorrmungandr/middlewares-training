module.exports =  (req, res) => {
  const {
    message,
    data,
    status,
  } = res.locals;

  if (!message && !data) {
    res.json({
      isError: true,
      message: 'Route not found',
    });

    return;
  }

  res.status(status || 200).json(res.locals);
};
