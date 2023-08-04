import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { getLetterGrade } from "../utils";
import "./GradeConverterForm.css";

const GradeConverterForm = ({ gradeScale }) => {
  const [level, setLevel] = useState("Level 5");
  const [mark, setMark] = useState();
  const [grade, setGrade] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const letterGrade = getLetterGrade(gradeScale, mark, level);
      setGrade(letterGrade);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <form className="mainForm" onSubmit={handleSubmit}>
        <div className="gradeSpace">
          <div className="lableSpace">
            <label className="mainLevel" htmlFor="level">
              Level:
            </label>
          </div>
          <select
            className="mainFormSelect"
            id="level"
            value={level}
            onChange={(e) => {
              setGrade("");
              setLevel(e.target.value);
            }}
          >
            <option value="Level 5" className="Level-5">
              Level 5
            </option>
            <option value="Level 6">Level 6</option>
          </select>
        </div>
        <div className="gradeSpace">
          <div className="lableSpace">
            <label className="mainMark" htmlFor="mark">
              Mark:
            </label>
          </div>
          <input
            className="mainFormNumber"
            id="mark"
            type="number"
            value={mark}
            placeholder="Please enter the mark"
            onChange={(e) => {
              setGrade("");
              setMark(Number(e.target.value));
            }}
          />
        </div>
        <button className="mainFormButton">Get Grade</button>
      </form>
      <div className="errorMessage">
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </div>
      {grade && (
        <div>
          <p className="paraGrade">
            The grade for mark {mark} at {level} is
          </p>
          <h1 className="grade">{grade}</h1>
        </div>
      )}
    </>
  );
};

export default GradeConverterForm;
