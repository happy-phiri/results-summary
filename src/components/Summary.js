import React from "react";

const Summary = (props) => {
  return (
    <div className="summary-wrapper">
      <h1 className="title">Summary</h1>

      <ul className="categories">
        {props.data.map((category) => {
          return (
            <li
              key={props.data.indexOf(category)}
              className={`${category.category.toLowerCase()} category`}
            >
              <div>
                <img src={category.icon} alt="" />
                <p className="name">{category.category}</p>
              </div>
              <p className="total-points">
                <span className="points">{category.score}</span> / 100
              </p>
            </li>
          );
        })}
      </ul>

      <button className="btn">Continue</button>
    </div>
  );
};

export default Summary;
