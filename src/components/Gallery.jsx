import React from 'react';
import gImg from '../Images/g5.jpg'
import "./All.css";
import { Container, Row , Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {Header,Footer} from '../components/Header_Footer';

function Gallery()
{

    const styles = {
        backgroundImage: `url(${gImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '250px'
      }

    return(

        <>

            <Header/>
        
            <div style={styles}>

                <br /><br /><br /><br /><br /><br /><br />
                <h1 className='cHeading'><b>Gallery</b></h1>

            </div>
            <div style={{backgroundColor:'rgb(241, 236, 232)'}}><br /><br /><br />
                <Container>
                    <Row>
                    <Col className='col-lg-3'>
                        <Card className='gCard' style={{border:'none',backgroundColor:'rgb(241, 236, 232)'}}>
                        <Card.Img variant="top" src={gImg} style={{height:'300px', width: '100%'}} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-lg-3'>
                        <Card className='gCard' style={{border:'none',backgroundColor:'rgb(241, 236, 232)'}}>
                        <Card.Img variant="top" src={gImg} style={{height:'300px', width: '100%'}} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-lg-3'>
                        <Card className='gCard' style={{border:'none',backgroundColor:'rgb(241, 236, 232)'}}>
                        <Card.Img variant="top" src={gImg} style={{height:'300px', width: '100%'}} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-lg-3'>
                        <Card className='gCard' style={{border:'none',backgroundColor:'rgb(241, 236, 232)'}}>
                        <Card.Img variant="top" src={gImg} style={{height:'300px', width: '100%'}} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>

                    </Row>
                    <Row>
                    <Col className='col-lg-3'>
                        <Card className='gCard' style={{border:'none',backgroundColor:'rgb(241, 236, 232)'}}>
                        <Card.Img variant="top" src={gImg} style={{height:'300px', width: '100%'}} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-lg-3'>
                        <Card className='gCard' style={{border:'none',backgroundColor:'rgb(241, 236, 232)'}}>
                        <Card.Img variant="top" src={gImg} style={{height:'300px', width: '100%'}} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-lg-3'>
                        <Card className='gCard' style={{border:'none'}}>
                        <Card.Img variant="top" src={gImg} style={{height:'300px', width: '100%'}} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-lg-3'>
                        <Card className='gCard' style={{border:'none',backgroundColor:'rgb(241, 236, 232)'}}>
                        <Card.Img variant="top" src={gImg} style={{height:'300px', width: '100%'}} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>

                    </Row>
                    <Row>
                    <Col className='col-lg-3'>
                        <Card className='gCard' style={{border:'none',backgroundColor:'rgb(241, 236, 232)'}}>
                        <Card.Img variant="top" src={gImg} style={{height:'300px', width: '100%'}} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-lg-3'>
                        <Card className='gCard' style={{border:'none',backgroundColor:'rgb(241, 236, 232)'}}>
                        <Card.Img variant="top" src={gImg} style={{height:'300px', width: '100%'}} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-lg-3'>
                        <Card className='gCard' style={{border:'none',backgroundColor:'rgb(241, 236, 232)'}}>
                        <Card.Img variant="top" src={gImg} style={{height:'300px', width: '100%'}} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-lg-3'>
                        <Card className='gCard' style={{border:'none',backgroundColor:'rgb(241, 236, 232)'}}>
                        <Card.Img variant="top" src={gImg} style={{height:'300px', width: '100%'}} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>

                    </Row>
                    <Row>
                    <Col className='col-lg-3'>
                        <Card className='gCard' style={{border:'none',backgroundColor:'rgb(241, 236, 232)'}}>
                        <Card.Img variant="top" src={gImg} style={{height:'300px', width: '100%'}} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-lg-3'>
                        <Card className='gCard' style={{border:'none',backgroundColor:'rgb(241, 236, 232)'}}>
                        <Card.Img variant="top" src={gImg} style={{height:'300px', width: '100%'}} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-lg-3'>
                        <Card className='gCard' style={{border:'none',backgroundColor:'rgb(241, 236, 232)'}}>
                        <Card.Img variant="top" src={gImg} style={{height:'300px', width: '100%'}} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-lg-3'>
                        <Card className='gCard' style={{border:'none',backgroundColor:'rgb(241, 236, 232)'}}>
                        <Card.Img variant="top" src={gImg} style={{height:'300px', width: '100%'}} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>

                    </Row>
                    <Row>
                    <Col className='col-lg-3'>
                        <Card className='gCard' style={{border:'none',backgroundColor:'rgb(241, 236, 232)'}}>
                        <Card.Img variant="top" src={gImg} style={{height:'300px', width: '100%'}} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-lg-3'>
                        <Card className='gCard' style={{border:'none',backgroundColor:'rgb(241, 236, 232)'}}>
                        <Card.Img variant="top" src={gImg} style={{height:'300px', width: '100%'}} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>

                    </Row><br /><br /><br />

                </Container>
            </div>

            <Footer/>
        
        </>

    )
}
export default Gallery;