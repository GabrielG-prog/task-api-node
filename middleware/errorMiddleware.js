module.exports = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    message: "Une erreur interne est survenue",
    error: err.message,
  });
};
