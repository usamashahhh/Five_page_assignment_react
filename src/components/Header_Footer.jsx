import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./All.css";
import { Link } from 'react-router-dom';
import { GiRunningShoe } from 'react-icons/gi';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import {AiFillLinkedin } from 'react-icons/ai';
import {BsGithub } from 'react-icons/bs';
import {BsArrowRight } from 'react-icons/bs';
import { Col, Row } from 'react-bootstrap';
import { toast , ToastContainer } from 'react-toastify';
import { useEffect , useState } from 'react';

let  Header = _ =>{
  return (
        <>
            <Navbar bg="dark" variant="ydark">
                <Container>
                    <Navbar.Brand> <Link to={"/home"} style={{textDecoration:'none',color:'white'}}><b><i> SHOE MART <GiRunningShoe style={{fontSize:'25px'}}/></i></b></Link></Navbar.Brand>

                    <Nav className="me-auto">
                      <Nav.Link style={{marginLeft:'150px'}} ><Link to={"/home"} style={{textDecoration:'none',color:'white'}}>Home</Link></Nav.Link>
                      <Nav.Link className='mg'><Link to={"/aboutUs"} style={{textDecoration:'none',color:'white'}}>About</Link></Nav.Link>
                      <Nav.Link className='mg'><Link to={"/Gallery"} style={{textDecoration:'none',color:'white'}}>Gallery</Link></Nav.Link>
                      <Nav.Link className='mg'><Link to={"/ContactUs"} style={{textDecoration:'none',color:'white'}}>Contact Us</Link></Nav.Link>
                      <Nav.Link className='mg'><Link to={"/Services"} style={{textDecoration:'none',color:'white'}}>Services</Link></Nav.Link>
                    </Nav>

                </Container>
            </Navbar>
        </>
    )
}

let Footer = _ =>{

  const [email , setEmail] = useState("");

  const sendMsg =_=>{

    if(email != "" )
    {
        toast.success("Your message has been send",{

            position:'top-center',
            theme:'colored',
            progress:0,
            autoClose:1000,
            draggable:true

        })
    }
    else{

        toast.error("Plz fill the given Fields",{

            position:'top-center',
            theme:'colored',
            progress:0,
            autoClose:1000,
            draggable:true

        })

    }
  }


  useEffect(()=>{


    alert("You have subscribed")

  }, [email]);

    return(

        <>
            
            <footer className="bg-dark text-center text-white">

              <Row>

                <Col lg={1}>
                </Col>

          <Col lg={2} className=' mt-4'>

            <li className='tlc' style={{listStyle:'none',textAlign:'left'}}>
            <BsArrowRight/>
            <Link to={"/home"} style={{textDecoration:'none', color:'white'}}><b><i> &emsp; Home</i></b> </Link>
            </li>
            <li className='mt-4' style={{listStyle:'none',textAlign:'left'}}>
            <BsArrowRight/>
            <Link to={"/aboutUs"} style={{textDecoration:'none', color:'white'}}><b><i> &emsp; About</i></b></Link>
            </li>
            <li className='mt-4' style={{listStyle:'none',textAlign:'left'}}>
            <BsArrowRight/>
            <Link to={"/Gallery"} style={{textDecoration:'none', color:'white'}}><b><i> &emsp; Gallery</i></b> </Link>
            </li>
            <li className='mt-4' style={{listStyle:'none',textAlign:'left'}}>
            <BsArrowRight/>
            <Link to={"/ContactUs"} style={{textDecoration:'none', color:'white'}}><b><i> &emsp; Contact Us</i></b> </Link>
            </li>
            <li className='mt-4' style={{listStyle:'none',textAlign:'left'}}>
            <BsArrowRight/>
            <Link to={"/Services"} style={{textDecoration:'none', color:'white'}}><b><i> &emsp; Survices</i></b> </Link>
            </li>

          </Col>

          <Col lg={9}>

      <div className="container p-4">
        <section className="mb-4">
          <a href="#" className="btn btn-outline-light btn-floating m-1" role="button">
            <BsFacebook/>
          </a>

          <a href="#" className="btn btn-outline-light btn-floating m-1" role="button">
            <AiFillInstagram/>
          </a>

          <a href="#" className="btn btn-outline-light btn-floating m-1" role="button">
            <BsTwitter/>
          </a>

          <a href="#" className="btn btn-outline-light btn-floating m-1" role="button">
            <AiFillLinkedin/>
          </a>

          <a href="#" className="btn btn-outline-light btn-floating m-1" role="button">
            <BsGithub/>
          </a>

        </section>

        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div className="col-md-5 col-12">
                <div className="form-outline form-white mb-4">
                  <input type="email" value={email} id="form5Example2" className="form-control" />
                  <label className="form-label" htmlFor="form5Example2">Email address</label>
                </div>
              </div>

              <div className="col-auto">
                <button type='submit' onClick={()=>sendMsg()} className="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>

        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
            eum harum corrupti dicta, aliquam sequi voluptate quas.
          </p>
        </section>
      </div>

      </Col>
      </Row>


      <div className="text-center p-3" style={{background: 'rgba(0, 0, 0, 0.2)'}}>
        © 2023 My Website. All rights reserved.
      </div>

      <ToastContainer/>


    </footer>


        </>

    )
}
export {Header,Footer}