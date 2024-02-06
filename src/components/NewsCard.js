import React from "react";

function NewsCard(props) {
  let { url, title, description, urlToImage } = props;
  console.log(props);
  return (
    <div>
      <div className="card">
        <div className="container" key={url}>
          <h2>{title}</h2>
          <p>{description}</p>
          <div>
            <img className="img" src={urlToImage} alt="" />
          </div>
          <a href={url}>Read more</a>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
