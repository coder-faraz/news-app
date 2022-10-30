import React, { Component } from 'react';


export default class NewsItem extends Component {

  render() {
      let {title, description, imgUrl, newsUrl, date, mode, newsSource} = this.props;    //props cannot be changed, they are Read-Only

      return (
        <div className="card my-3" style={{ width: "18rem", height: "85vh", }}>
          <div className='d-flex position-absolute' style={{ right: '1px', }}>
            <span className="badge rounded-pill text-bg-danger">{ newsSource }</span>
          </div>
          <img src={ imgUrl } style={ {height: "30vh",} } className="card-img-top" alt="News Related Picture" />
          <div className={`card-body text-${ mode==='light'? 'dark':'light' } bg-${ mode }`}>
            <h5 className="card-title">{ title }</h5>
            <p className="card-text">{ description }...</p>
            <p>Last Updated on { new Date(date).toGMTString() }</p>
            <a href={ newsUrl } target="_blank" rel='noreferrer' className={`btn btn-${ mode==='light'?'primary':'secondary'}` }>Read More</a>
          </div>
        </div>
    );
  }
}


