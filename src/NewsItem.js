import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } = this.props;
    return (
      <div>
        <div className="card" style={{ margin: "8px 0" }}>
          <div style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0"
          }}>
            <span className=" badge rounded-pill bg-danger" >
              {source}
            </span>
          </div>
          <div style={{ height: "300px" }}>
            <img src={imageUrl} className="card-img-top" alt="..." style={{ height: "300px" }} />
          </div>
          <div className="card-body">

            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(publishedAt).toUTCString()}</small></p>
            <a href={newsUrl} target="noreferrer" className="btn btn-dark btn-sm">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
