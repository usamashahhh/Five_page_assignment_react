import React from 'react';
import "./All.css";
import serviceImg from '../Images/abcd.gif';
import { Container, Row , Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {Header,Footer} from '../components/Header_Footer';

function Services()
{
    return(

        <div className='gifBgcolor'>

        <Header/>
        
        <br /><br /><br />

        <Container>

            <Row>
                <Col lg={6} className='topfont'>
                    <div style={{marginLeft:60, marginRight:60}}>
                        <h2>
                            <b>Our Services</b>
                        </h2><br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quod culpa quia excepturi. Tempora soluta voluptit necessitatibus soluta atque accusantium suscipit voluptates laboriosam, ipsum optio ab nemo fugit possimus fugiat culpa eos? Molestiae vero quae, soluta nam non explicabo sed maiores magnam at delectus! Provident cupiditate vitae eaque quasi possimus pariatur quaerat iusto porro laboriosam, non modi? Voluptatum, magnam? Rem a id nobis ea consectetur voluptatem aut perspiciatis perferendis, eaque nisi magni adipisci sint molestias? Labore maiores, modi consectetur facilis omnis enim, maxime inventore deserunt eum illum aut aliquid? Quae error sint reiciendis distinctio fugiat magni dolorum, non nesciunt, perspiciatis repellat laboriosam consequuntur eius sapiente! Laborum cumque esse, voluptas nam rem fugit in distinctio, molestias at commodi totam ipsam quia nostrum eos enim maiores ut nulla minima rerum nihil harum animi voluptatibus assumenda obcaecati! Temporibus, vero mollitia?
                        </p>
                    </div>
                </Col>
                <Col lg={6}>
                    <div>
                    <img src={serviceImg} className='bdr mb-5' width={100 + "%"} height={500} alt="About_Image"  />
                    </div>
                </Col>
            </Row> <br /><br />

            <div>

            <Row>
                <Col lg={4}>
                    <Card className='serviceCard'>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4}>
                    <Card className='serviceCard'>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className='serviceCard'>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>


            </Row><br /><br />
            
            <Row>
                <Col lg={4}>
                    <Card className='serviceCard'>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4}>
                    <Card className='serviceCard'>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className='serviceCard'>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>


            </Row> <br /><br /><br />


            </div>



        </Container>

        <Footer/>

        
        </div>

    )
}
export default Services;