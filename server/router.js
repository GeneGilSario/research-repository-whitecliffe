const express = require("express");
const router = express.Router();
const repository = require("./repository");

router.get("/", async (req, res, next) => {
  try {
    const gradeScale = await repository.getGradeScale();

    return res.json(gradeScale);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
