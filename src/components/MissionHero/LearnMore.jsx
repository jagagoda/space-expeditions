import React from 'react'

const LearnMore = (props) => {
  const { item } = props;
  const { links } = item;

  return (
    <div style={{minWidth: "620px", minHeight: "400px",zIndex: "10" ,borderRadius: "20px", padding: "25px 35px", background: "#FFFFFF", position: "absolute", top: "150px", left: "30%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <h1>{item.mission_name}</h1>
      {links.article_link && <h2>Read the article</h2>}
      <p>{links.article_link}</p>
      <h2>Watch the video</h2>
      <p><a href={links.video_link} className='btn btn-link' target="_blank" rel='noreferrer'>{links.video_link}</a></p>
    </div>
  )
}

export default LearnMore
