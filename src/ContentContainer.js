import React, { useEffect, useState } from 'react';

export default function ContentContainer(props) {
  return (
    <div className="content-container">
      <div
        style={{ backgroundImage: `url(${props.image})` }}
        className="cover-photo"
      ></div>
      <h1 className="header-container">{props.header}</h1>
      <div className="top-track-list">
        <div className="time-range-selector">
          <button
            className="time-option"
            id="long_term"
            onClick={() => props.fetchRequest('long_term')}
          >
            All Time
          </button>
          <button
            className="time-option"
            id="medium_term"
            onClick={() => props.fetchRequest('medium_term')}
          >
            Past 6 Months
          </button>
          <button
            className="time-option"
            id="short_term"
            onClick={() => props.fetchRequest('short_term')}
          >
            Last Month
          </button>
        </div>
        {props.data.map((track, index) => {
          return (
            <a
              target="_blank"
              href={track.link}
              key={index}
              className="track-container"
              rel="noreferrer"
            >
              <div className="track-index-container">
                <span>{index + 1}</span>
              </div>
              <img
                className="image-container"
                src={track.images.smallImg.url}
                alt="track icon"
              />
              <div className="name-container">
                <span className="songName">{track.songName}</span>
                <span className="artistName">{track.artistName}</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
