import { getLetterGrade } from "./utils";

const gradeScale = [
  {
    level: "Level 5",
    min_mark: 90,
    max_mark: 100,
    grade: "A+",
  },
  {
    level: "Level 5",
    min_mark: 85,
    max_mark: 89,
    grade: "A",
  },
  {
    level: "Level 5",
    min_mark: 80,
    max_mark: 84,
    grade: "A-",
  },
  {
    level: "Level 5",
    min_mark: 75,
    max_mark: 79,
    grade: "B+",
  },
  {
    level: "Level 5",
    min_mark: 70,
    max_mark: 74,
    grade: "B",
  },
  {
    level: "Level 5",
    min_mark: 65,
    max_mark: 69,
    grade: "B-",
  },
  {
    level: "Level 5",
    min_mark: 60,
    max_mark: 64,
    grade: "C+",
  },
  {
    level: "Level 5",
    min_mark: 55,
    max_mark: 59,
    grade: "C",
  },
  {
    level: "Level 5",
    min_mark: 50,
    max_mark: 54,
    grade: "C-",
  },
  {
    level: "Level 5",
    min_mark: 40,
    max_mark: 49,
    grade: "D",
  },
  {
    level: "Level 5",
    min_mark: 0,
    max_mark: 39,
    grade: "E",
  },
  {
    level: "Level 6",
    min_mark: 92,
    max_mark: 100,
    grade: "A+",
  },
  {
    level: "Level 6",
    min_mark: 85,
    max_mark: 91,
    grade: "A",
  },
  {
    level: "Level 6",
    min_mark: 80,
    max_mark: 84,
    grade: "A-",
  },
  {
    level: "Level 6",
    min_mark: 75,
    max_mark: 79,
    grade: "B+",
  },
  {
    level: "Level 6",
    min_mark: 70,
    max_mark: 74,
    grade: "B",
  },
  {
    level: "Level 6",
    min_mark: 65,
    max_mark: 69,
    grade: "B-",
  },
  {
    level: "Level 6",
    min_mark: 60,
    max_mark: 64,
    grade: "C+",
  },
  {
    level: "Level 6",
    min_mark: 55,
    max_mark: 59,
    grade: "C",
  },
  {
    level: "Level 6",
    min_mark: 50,
    max_mark: 54,
    grade: "C-",
  },
  {
    level: "Level 6",
    min_mark: 40,
    max_mark: 49,
    grade: "D",
  },
  {
    level: "Level 6",
    min_mark: 0,
    max_mark: 39,
    grade: "E",
  },
];

describe("getLetterGrade", () => {
  describe("Test happy path scenarios", () => {
    test.each([
      [100, "Level 5", "A+"],
      [72, "Level 5", "B"],
      [34, "Level 5", "E"],
      [54, "Level 6", "C-"],
      [95, "Level 6", "A+"],
      [40, "Level 6", "D"],
      [62, "Level 5", "C+"],
      [40, "Level 5", "D"],
      [54, "Level 5", "C-"],
      [79, "Level 6", "B+"],
      [55, "Level 5", "C"],
    ])(
      "Returns correct grade for valid mark %p at %p",
      (mark, level, expectedGrade) => {
        const result = getLetterGrade(gradeScale, mark, level);
        expect(result).toEqual(expectedGrade);
      }
    );
  });
  describe("Test negative scenarios", () => {
    test.each([
      [
        gradeScale,
        "invalid",
        "Level 5",
        "Invalid mark. Mark must be a number.",
      ],
      [
        gradeScale,
        110,
        "Level 5",
        "Invalid mark. Mark must be within the range of 0 to 100.",
      ],
      [gradeScale, 95, "", "Invalid mark. Level must be a non-empty string."],
      [gradeScale, 95, 1, "Invalid mark. Level must be a non-empty string."],
      [
        gradeScale,
        70,
        "Level 7",
        "No matching grade found for the provided mark and level",
      ],
    ])(
      "Throws an error for input (%p, %p, %p)",
      (gradeScale, mark, level, errorMessage) => {
        expect(() => getLetterGrade(gradeScale, mark, level)).toThrow(
          errorMessage
        );
      }
    );
  });

  test("Throws an error for invalid gradeScale", () => {
    const corruptGradeScale = {};
    const mark = 70;
    const level = "Level 5";
    expect(() => getLetterGrade(corruptGradeScale, mark, level)).toThrow(
      "Grade scale not provided."
    );
  });
});
