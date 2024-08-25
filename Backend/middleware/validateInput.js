module.exports = (req, res, next) => {
  const { data } = req.body;

  if (!Array.isArray(data)) {
    return res
      .status(400)
      .json({ error: "Invalid input: data must be an array" });
  }

  if (data.some((item) => typeof item !== "string")) {
    return res
      .status(400)
      .json({ error: "Invalid input: all items must be strings" });
  }

  next();
};
