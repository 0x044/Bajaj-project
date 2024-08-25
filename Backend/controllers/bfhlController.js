exports.processBfhlPost = (req, res) => {
  const { data } = req.body;

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => isNaN(item));
  const highestLowercaseAlphabet =
    alphabets
      .filter((char) => char.toLowerCase() === char)
      .sort((a, b) => b.localeCompare(a))[0] || [];

  const response = {
    is_success: true,
    user_id: "john_doe_17091999", // Replace with actual user ID logic
    email: "john@xyz.com", // Replace with actual email
    roll_number: "ABCD123", // Replace with actual roll number
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet
      ? [highestLowercaseAlphabet]
      : [],
  };

  res.json(response);
};

exports.getBfhlOperationCode = (req, res) => {
  res.json({ operation_code: 1 });
};
