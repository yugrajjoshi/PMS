import React from "react";

function GoalProgress({ progress, status }) {
  let color = "";
  let text = "";

  if (status === "ahead") {
    color = "#16e34a";
    text = `You're ahead of pace and should reach your goal 10% ahead of schedule.`;
  }

  if (status === "on") {
    color = "#f4a259";
    text = `You're at pace and should reach your goal on schedule.`;
  }

  if (status === "behind") {
    color = "#ff4d4d";
    text = `You're behind pace and should reach your goal 30% behind schedule.`;
  }

  return (
    <div className="goal-card">
      <h2>Goal Progress</h2>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%`, background: color }}
        >
          <div className="progress-stripes"></div>
          <div
            className="progress-thumb"
            style={{ borderColor: color }}
          ></div>
        </div>
      </div>

      <p className="progress-text" style={{ color }}>
        {text}
      </p>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>DASHBOARD</h1>

      <div className="progress-status">
        <GoalProgress progress={30} status="ahead" />
        <GoalProgress progress={50} status="on" />
        <GoalProgress progress={30} status="behind" />
      </div>
    </div>
  );
}

export default Dashboard;
