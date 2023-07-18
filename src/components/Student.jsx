import React, { useState } from "react";
import Score from "./Score";
import './Student.css'
import StudentInfo from "./StudentInfo";

function Student({ students }) {
  const [showScores, setShowScores] = useState('none')

  const handleShowScores = () => {
   showScores==='none'?setShowScores(""):setShowScores("none")
  }

  return (
    <div className="Students" >
      {students.map((student) => (
       <StudentInfo student={student} />
      ))}
    </div>
  );
}

export default Student;
