// routes.js
const test = (req, res) => {
  return res.json("success");
};

const test2 = (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);
  } catch (error) {
    console.log(error);
  }
};
// Default export
module.exports = { test, test2 };
