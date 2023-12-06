import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function VideoCard() {
    return (
        <>
            <Card style={{ width: '18rem' }} className='mt-5 mb-5'>
                <Card.Img height="300px" variant="top" src="https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/shah-rukh-khan--jawan--srk-films-295651-3x4.jpg?VersionId=RGX_q3pk2AWWdkkOYhypoZSFxDHwV.vF" />
                <Card.Body>
                    <div className='d-flex align-items-center justify-content-evenly'>  <h6>Video caption</h6>
                    <Button variant="danger" className='ms-5' >
                    <i class="fa-solid fa-trash"></i>
                    </Button>
                    </div>
                   
                </Card.Body>
            </Card>
        </>
    )
}

export default VideoCard