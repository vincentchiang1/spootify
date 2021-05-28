import React from 'react';
import FadeIn from 'react-fade-in';

export default function ContentContainer(props) {
  return (
    <div className="content-container">
      <div
        style={{ backgroundImage: `url(${props.image})` }}
        className="cover-photo"
      ></div>
      <h1 className="header-container">{props.header}</h1>
      <div className="list-container">
        {props.type === 'recent' ? null : 
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
        </div>}
        <FadeIn>
          {props.data.map((item, index) => {
            return (
              <a
                target="_blank"
                href={item.link}
                key={index}
                className="item-container"
                rel="noreferrer"
              >
                <div className="info-container">
                  <div className="item-index-container">
                    <span>{index + 1}</span>
                  </div>
                  <img
                    className="image-container"
                    src={item.images.smallImg.url}
                    alt="track icon"
                  />
                  <div className="name-container">
                    <span className="songName">{item.songName}</span>
                    <span style={ props.type === 'artists' ? { fontWeight: 500} : {fontWeight: 'normal'}} className="artistName">{item.artistName}</span>
                    {props.type === 'artists' ? <span className="genres">{item.genres}</span> : null}
                  </div>
                </div>
                
                <div className="time-stamp-container">
                  {props.type === 'recent' ? <span className="timeStamp">{item.timeStamp}</span> : null}
                </div>
              </a>
            );
          })}
        </FadeIn>        
      </div>
    </div>
  );
}
