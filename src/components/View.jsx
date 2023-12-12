import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoCard from './VideoCard';
import { getAllVideos } from '../services/allAPI';

function View() {
  const [allVideo, setAllVideo] = useState([])

  const getAllVideoFromDB = async () => {
    const response = await getAllVideos();
    const { data } = response;
    console.log(response);
    setAllVideo(data);
  }
  useEffect(() => {
    getAllVideoFromDB();
  }, [])
  return (
    <>
      <Row>{
        allVideo.length > 0 ?
          allVideo.map((video) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <VideoCard displayVideo = {video}/>
            </Col>
          ))
          :
          <p>Nothing to Display</p>
      }

      </Row>
    </>
  )
}

export default View