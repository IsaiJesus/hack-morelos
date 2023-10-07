import React from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ButtonToChat() {
  const percentage = 10;
  const styles = buildStyles({
    pathColor: '#55a6a3',
    textColor: "#55a6a3"
  })

  return (
    <Link className="chat-button" to="/chatbot">
      Ahorro
      <div style={{ width: 60, height: 60 }}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={styles}
        />
      </div>
    </Link>
  );
}
