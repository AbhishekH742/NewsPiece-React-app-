import React from 'react'

const Newsitem = (props) => {
  let { tittle, description, imgUrl, newsUrl, author, date, source } = props;

  return (

    <div className='container my-3' >
      <div className="card" >

        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
          <span className="badge rounded-pill bg-danger">{source ? source : "Deccan Heralad"}  </span>
        </div>

        <img src={!imgUrl ? "https://media.assettype.com/freepressjournal/2023-12/60643c6d-1959-4431-9955-5cf03ad25ca6/Untitled_design___2023_12_22T161456_318.jpg" : imgUrl} className="card-img-top" alt="img" style={{ height: "25vh" }} />
        <div className="card-body">
          <h5 className="card-title" style={{ fontSize: "1rem" }}>{tittle}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()} ago</small></p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read more</a>
        </div>
      </div>
    </div>
  )

}

export default Newsitem;
