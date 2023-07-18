import React from "react";
import Score from "./Score";

function Student({ students }) {
  return (
    <div>
      {students.map((student) => (
        <div>
          <p> {student.name}</p>
          <p> {student.bio}</p>
          <Score student={student} />
        </div>
      ))}
    </div>
  );
}

export default Student;
