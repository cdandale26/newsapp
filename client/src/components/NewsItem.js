import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <div className="container my-3">
        <div className="card ">
          <img
            className="card-img-top "
            src={
              imageUrl
                ? imageUrl
                : "https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2022-05/explorer_image.jpg?itok=9YlZ_lwB"
            }
            alt="Card-cap"
          />
          <div className="card-body">
            <h5 className="card-title ">{title ? title : ""}</h5>
            <p className="card-text ">{description ? description : ""}</p>
            <p className="card-text">
              <small className="text-muted">
                By :{author ? author : "Anonymous"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              Read more...
            </a>
          </div>
        </div>
      </div>
    );
  }
}
