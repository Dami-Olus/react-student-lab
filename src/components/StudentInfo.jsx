import { useState } from "react";
import Score from "./Score";
import "./StudentInfo.css";

function StudentInfo({ student }) {
  const [showScores, setShowScores] = useState("none");

  const handleShowScores = () => {
    showScores === "none" ? setShowScores("") : setShowScores("none");
  };

  return (
    <div className="student-info" onClick={handleShowScores}>
      <h3> {student.name}</h3>
      <p> {student.bio}</p>
      <div style={{ display: showScores }}>
      <h3>Scores</h3>
        <Score scores={student.scores} />
      </div>
    </div>
  );
}

export default StudentInfo;
