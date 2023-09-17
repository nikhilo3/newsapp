import React from 'react'

const Newsitem = (props)=> {
  

    let {title,description,imageUrl,newsUrl,date,source} = props;
    const cardStyle = {
      width: '320px', // Specify the desired width
      height: '450px', // Specify the desired height
      overflow:'hidden'
    };
    const titleStyle = {
      height: '50px', // Specify the desired height for the title
      overflow: 'hidden',
    };
    const descriptionStyle = {
      height: '90px', // Specify the desired height for the description
      overflow: 'hidden',
    };
    return (
      <>
        <div className="card mx-4 my-3" style={cardStyle}>
          <span className='position-absolute top-0 traslate-middle badge rounded-pill bg-info' style={{color:'black'}}>{source}</span>
          <img src={imageUrl} className="card-img-top" alt="..." style={{height: '175px'}}/>
          <div className="card-body">
            <h5 className="card-title" style={titleStyle}>{title}</h5>
            <p className="card-text" style={descriptionStyle}>{description}</p>
            <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read More</a>
            <div className="card-footer my-1" style={{height: '50px'}}>
            <small className="text-muted" >publishedAt : {new Date(date).toGMTString()}</small>
          </div>
          </div>
        </div>
        
      </>
    )
}

export default Newsitem