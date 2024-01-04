import React, { Component } from 'react'
import defImg from './newsImg.jpeg'

export class NewsItem extends Component {
  
  render() {
    let {title, desc, src, url, author, date} = this.props;
    return (
      <div>
        <div className="card">
          <img src={src?src:defImg} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <p className="card-footer">
              <small className="text-muted">Last updated on {date} by {author?author:'Unknown'}</small>
            </p>
            <a href={url} target = '_block' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
