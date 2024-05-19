const router = require("express").Router();

router.get("/test", async (req, res) => {
  try {
    res.json({ message: "Success!" });
  } catch (error) {
    console.error(error);
    res.status(500).json("Server error");
  }
});

module.exports = router;
