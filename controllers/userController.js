const pool = require("../config/database");

exports.getUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT id, name, username FROM users");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, username } = req.body;
  try {
    const result = await pool.query(
      "UPDATE users SET name = $1, username = $2 WHERE id = $3 RETURNING *",
      [name, username, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
    res.json({ message: "User berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
