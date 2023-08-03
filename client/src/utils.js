const getLetterGrade = (gradeScale, mark, level) => {
  if (!Array.isArray(gradeScale) || !gradeScale.length) {
    throw new Error("Grade scale not provided.");
  }

  if (typeof mark !== "number" || isNaN(mark)) {
    throw new Error("Invalid mark. Mark must be a number.");
  }

  if (typeof level !== "string" || level.trim() === "") {
    throw new Error("Invalid mark. Level must be a non-empty string.");
  }

  if (mark < 0 || mark > 100) {
    throw new Error("Invalid mark. Mark must be within the range of 0 to 100.");
  }

  // if the conditions in the arrow function evaluate to `true` for any `entry`, the `find()` method will return that matching `entry`
  // which will be stored in the `gradeEntry` variable
  const gradeEntry = gradeScale.find((entry) => {
    return (
      // this line checks the conditions to determine whether ther current `entry` mathces the provided  `level`
      // this is possible with the help of the specified `min_mark` and `max_mark` range
      entry.level === level && mark >= entry.min_mark && mark <= entry.max_mark
    );
  });

  // this checks if a matching `gradeEntry` was found
  if (gradeEntry) {
    // if found, this line returns the `grade` property of that entry
    return gradeEntry.grade;
  } else {
    // if not found, this line throws an error with a message indicating that no matching grade was found for the provided `mark` and `level`
    throw new Error("No matching grade found for the provided mark and level");
  }
};

module.exports = { getLetterGrade };
