import React from "react";

const Card = ({ background, icon, name, quizzes, users }) => {
  if (background == null) {
    background =
      "https://storage.googleapis.com/bucket-larnu/media/business/123/images/1JFXCO18.png";
  }

  return (
    <div className="card">
      <div className="card__image">
        <img className="card__image__background" src={background} alt="" />
        <img className="card__image__icon" src={icon} alt="" />
      </div>
      <div className="card__text">
        <h2>{name}</h2>
        <h4>
          <span>Quizzes: </span>
          {quizzes}
        </h4>
        <h4>
          <span>Users: </span>
          {users}
        </h4>
      </div>
    </div>
  );
};

export default Card;
