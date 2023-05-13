import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../Images/Cool-Shoe-Backgrounds-HD-1080p.jpg';
import img2 from '../Images/download (1).jpg';
import img3 from '../Images/lvDRf57.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import {Header,Footer} from '../components/Header_Footer';

function Home() {
  return (
    <>
        <Header/>

        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        {/* -----------CARDS START----------- */}
        <br /><br /><br />
        <Container>

            <Row>
                <Col className='col-lg-4'>
                <Card >
                <Card.Img variant="top" src={img1} style={{height:'300px', width: '100%'}} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </Col>


                <Col lg={4}>
                <Card >
                <Card.Img variant="top" src={img2} style={{height:'300px', width: '100%'}} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </Col>

                <Col lg={4}>
                <Card >
                <Card.Img variant="top" src={img3} style={{height:'300px', width: '100%'}} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </Col>


                        {/* -----------CARDS END----------- */}

            </Row>

        </Container><br /><br /><br />

        <Footer/>

            


    </>

  );
}

export default Home;