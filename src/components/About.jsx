import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "./All.css";
import aboutImg from '../Images/download (1).jpg';
import img2 from '../Images/abcd.gif';
import Card from 'react-bootstrap/Card';
import img1 from '../Images/Cool-Shoe-Backgrounds-HD-1080p.jpg';
import img4 from '../Images/download (1).jpg';
import img3 from '../Images/lvDRf57.jpg';
import {Header,Footer} from '../components/Header_Footer';

function About()
{
    return(
        
        <>

            <Header/>

            <Container><br /><br /><br />

                <Row>
                    <Col lg={6} className='topfont'>
                        <div style={{marginLeft:60, marginRight:60}}>
                            <h2>
                                <b>About Us</b>
                            </h2><br />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quod culpa quia excepturi. Tempora soluta voluptit necessitatibus soluta atque accusantium suscipit voluptates laboriosam, ipsum optio ab nemo fugit possimus fugiat culpa eos? Molestiae vero quae, soluta nam non explicabo sed maiores magnam at delectus! Provident cupiditate vitae eaque quasi possimus pariatur quaerat iusto porro laboriosam, non modi? Voluptatum, magnam? Rem a id nobis ea consectetur voluptatem aut perspiciatis perferendis, eaque nisi magni adipisci sint molestias? Labore maiores, modi consectetur facilis omnis enim, maxime inventore deserunt eum illum aut aliquid? Quae error sint reiciendis distinctio fugiat magni dolorum, non nesciunt, perspiciatis repellat laboriosam consequuntur eius sapiente! Laborum cumque esse, voluptas nam rem fugit in distinctio, molestias at commodi totam ipsam quia nostrum eos enim maiores ut nulla minima rerum nihil harum animi voluptatibus assumenda obcaecati! Temporibus, vero mollitia?
                            </p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                        <img src={aboutImg} className='bdr' width={100 + "%"} height={500} alt="About_Image" />
                        </div>
                    </Col>
                </Row><br /><br /><br /><br />

                <Row className='gifBgcolor'>
                    <Col lg={12}>

                       <center> <img src={img2} alt="shoeGif" /> </center><br /><br />

                    </Col>
                    <Col lg={4} className='alitem'>
                        <div style={{marginLeft:60, marginRight:60}}>
                            <h4><b>SIMPLICITY IN DESIGN</b></h4><br />
                            <p className='gifFont'>
                                No flashy logos. No senseless details. Just the world’s most comfortable shoes, made naturally and designed practically.
                                It’s that simple.
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} className='alitem'>
                        <div style={{marginLeft:50, marginRight:50}}>
                            <h4><b>CONFIDENCE IN COMFORT</b></h4><br />
                            <p className='gifFont'>
                                Trying is believing. Give our shoes a shot for 30 days, and if you’re not walking on cloud nine, we’ll take them back—no questions asked.
                            </p>                            
                        </div>
                    </Col>
                    <Col lg={4} className='alitem'>
                        <div style={{marginLeft:60, marginRight:60}}>
                            <h4><b>MADE FROM NATURE</b></h4><br />
                            <p className='gifFont'>
                                The footwear industry often overlooks Mother Nature’s materials in favor of cheaper, synthetic alternatives. We think it’s
                                time to change that.
                            </p>
                        </div>
                    </Col>
                </Row><br /><br />

                <Row>
                    <Col lg={6} className='offset-lg-3 hlg alitem'>
                        <p><b>The journey to making better things in a better way is a long one, and we’re
                            just getting started. Here are a few of our proudest moments so far:</b>
                        </p>
                    </Col>

                </Row><br />

                {/* -----------CARDS START----------- */}

                <Row>
                <Col className='col-lg-4 alitem'>
                <Card style={{border:'none', marginLeft:10, marginRight:10}}>
                <Card.Img variant="top" src={img1} style={{height:'250px', width: '100%'}} />
                <Card.Body>
                    <Card.Title><h5><b>B CORP</b></h5></Card.Title> <br />
                    <Card.Text className='gifFont'>
                    As a certified B Corp, we do business differently. The environment is a stakeholder here, and how we treat it is just as important as the bottom line.
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>


                <Col lg={4} className='alitem'>
                <Card style={{border:'none', marginLeft:10, marginRight:10}}>
                <Card.Img variant="top" src={img4} style={{height:'250px', width: '100%'}} />
                <Card.Body>
                    <Card.Title><h5><b>SOLES4SOULS<sup>®</sup></b></h5></Card.Title> <br />
                    <Card.Text className='gifFont'>
                    Thanks to our friends at Soles4Souls®, lightly used Allbirds find new life all around the world, helping communities in need thrive in the process.
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>

                <Col lg={4} className='alitem'>
                <Card style={{border:'none', marginLeft:10, marginRight:10}}>
                <Card.Img variant="top" src={img3} style={{height:'250px', width: '100%'}} />
                <Card.Body>
                    <Card.Title><h5><b>RECYCLED PACKAGING</b></h5></Card.Title> <br />
                    <Card.Text className='gifFont'>
                    We reimagined shoe packaging, using 90% post-consumer recycled cardboard that serves as a shoebox, shopping bag, and mailer all in one.
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>


                        {/* -----------CARDS END----------- */}

            </Row><br /><br /><br />


            </Container>


            <Footer/>


        </>
            

    )
}
export default About;