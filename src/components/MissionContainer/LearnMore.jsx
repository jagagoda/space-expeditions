import React from 'react'
import { Modal } from 'react-bootstrap';

const LearnMore = (props) => {
  const { item, isOpen, isClosed } = props;
  const { links } = item;

  return (
    <Modal show={isOpen} onHide={isClosed} centered>
      <Modal.Header closeButton>
        <h5>{item.mission_name}</h5>
      </Modal.Header>
      <Modal.Body className="mt-3 text-center">
        {links.article_link &&
          <>
            <p className="text-uppercase">Read the article:</p>
            <a
              href={links.article_link}
              className='btn btn-link'
              target="_blank"
              rel='noreferrer'>{links.article_link}</a>
          </>
        }
        {links.video_link &&
          <>
            <p className="mt-3 text-uppercase">Watch the video:</p>
            <a
              href={links.video_link}
              className='btn btn-link'
              target="_blank"
              rel='noreferrer'>{links.video_link}</a>
          </>
        }
      </Modal.Body>
    </Modal>
  )
}

export default LearnMore
