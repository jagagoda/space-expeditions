import React from 'react'

const LearnMore = (props) => {
  const { item } = props;
  const { links } = item;

  return (

    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{item.mission_name}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {links.article_link &&
              <h2>Read the article</h2>}
            <a href={links.article_link} className='btn btn-link' target="_blank" rel='noreferrer'>{links.article_link}</a>
            {links.video_link &&
              <h2>Watch the video</h2>}
            <a href={links.video_link} className='btn btn-link' target="_blank" rel='noreferrer'>{links.video_link}</a>
          </div>
        </div>
      </div>
    </div>
    // <div style={{minWidth: "620px", minHeight: "400px",zIndex: "10" ,borderRadius: "20px", padding: "25px 35px", background: "#FFFFFF", position: "absolute", top: "150px", left: "30%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
    //   <h1>{item.mission_name}</h1>
    //   {links.article_link && <h2>Read the article</h2>}
    //   <p>{links.article_link}</p>
    //   <h2>Watch the video</h2>
    //   <p><a href={links.video_link} className='btn btn-link' target="_blank" rel='noreferrer'>{links.video_link}</a></p>
    // </div>
  )
}

export default LearnMore
