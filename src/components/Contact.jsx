import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Form,Field,Formik,ErrorMessage } from "formik";
import * as Yup from 'yup';
import conImg from '../Images/contact.jpg';
import "./All.css";
import {Header,Footer} from '../components/Header_Footer';

class Contact extends Component
{
    render()
    {
        const styles = {
            backgroundImage: `url(${conImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '250px'
          }

        return(

            <div className='gifBgcolor'>

                <Header/>

                <div style={styles}>
                    <br /><br /><br /><br /><br /><br /><br />
                    <h1 className='cHeading'><b>Contact Us</b></h1>
                </div><br /><br /><br />
            
                <Container>
                    <Row style={{backgroundColor:'white'}}>
                        <Col lg={6} className='mt-4 mb-4 ml-5'> <br /><br />
                            <Formik
                                initialValues={{fullName : "", email : "", phone : "", company : "", message :""}}

                                validationSchema={Yup.object({

                                    fullName: Yup.string().min(5, "Must 5 char").required(),
                                    email: Yup.string().email("Enter valid Email").required(),
                                    phone: Yup.string().max(11 , "not more than 11").required(),
                                    company: Yup.string().min(7 , "Name should be at least 7 char").required(),
                                    message: Yup.string().min(15 , "Message should be 15 char").required()
                                })}

                                onSubmit={(value)=>{console.log(value)}}
                            >

                                <Form>
                                    <Row>  <br /><br /><br />
                                        <Col lg={6}>
                                            <label htmlFor="fullName"> Full Name: </label> &emsp;&nbsp;
                                            <Field name={"fullName"} /> <br /> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                            <ErrorMessage name={"fullName"} /> <br />
                                        </Col>
                                        <Col lg={6}>
                                            <label htmlFor="email"> Email: </label> &emsp;&emsp;&emsp;&emsp;
                                            <Field name={"email"} /> <br /> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                            <ErrorMessage name={"email"} /> <br />
                                        </Col>
                                    </Row>
                                    <Row> <br /><br /><br />
                                        <Col lg={6}>
                                            <label htmlFor="phone"> Phone: </label> &emsp;&emsp;&emsp;
                                            <Field name={"phone"} /> <br /> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                            <ErrorMessage name={"phone"} /> <br />
                                        </Col>
                                        <Col lg={6}>
                                            <label htmlFor="company"> Company: </label> &emsp;&emsp;&nbsp;
                                            <Field name={"company"} /> <br /> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                            <ErrorMessage name={"company"} /> <br />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6}>
                                            <label htmlFor="message"> Message: </label> &emsp;&emsp;
                                            <Field type='textarea' name={"message"} /> <br /> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                            <ErrorMessage name={"message"} /> <br /><br /> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
                                            <button type='submit'>Submit</button>
                                        </Col>


                                    </Row>

                                </Form>
                            </Formik>
                        </Col>
                        <Col lg={6}>
                            
                        </Col>
                    </Row>
                </Container><br /><br /><br />

                <Footer/>
            
            </div>

        )
    }
}
export default Contact;