import React from "react";

const Result = () => {
  return (
    <div className="result-wrapper">
      <p className="title">Your Result</p>

      <div className="score">
        <h1>76</h1>
        <p>of 100</p>
      </div>

      <div className="score-comment">
        <h2>Great</h2>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default Result;
