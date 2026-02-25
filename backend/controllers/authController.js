const pool = require("../db");
const bcrypt = require("bcrypt");

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE TRIM(LOWER(email)) = LOWER($1)",
      [email.trim()]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = result.rows[0];

    // const match = await bcrypt.compare(password, user.password);
    // if (!match) {
    //   return res.status(400).json({ message: "Incorrect password" });
    // }

    //test hardcode
    if (password !== user.password) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    return res.json({
      message: "Login successful",
      role: user.role, 
    });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};