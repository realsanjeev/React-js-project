import React from "react";

export default function MainComponent(props) {
  return (
    <>
      {console.log(props.item.location)}

      <div className="news-card">
        <img
          src={props.item.coverImage}
          alt={props.item.location}
          className="news-card__image"
        />
        <div className="news-card__text-wrapper">
          <h2 className="news-card__title">
            <a href={props.item.googleMap} alt="google map link">
              {props.item.location}
            </a>
          </h2>
          <div className="news-card__post-date">
            <small>
              {props.item.startDate} to {props.item.endDate}
            </small>
          </div>
          <div className="news-card__details-wrapper">
            <p className="news-card__excerpt">{props.item.desc}&hellip;</p>
          </div>
        </div>
      </div>
    </>
  );
}
