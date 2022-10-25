import React from 'react'
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Stack } from '@mui/system';

export default function Footer() {
    return (
            <div className="container-fluid container-footer " >
                <div className="row " >
                    <div className="col col-lg-4 col-12 text-muted  ">

                        <a href="/" >
                            <img  src="assets\marhaba estate-01.png" 
                            style={{ width: "70px" }}
                            className='spacing-items ' />
                        </a>
                        <p className="spacing-items text-white " >Realproperty.pk - Pakistan's best free property listings website. Trusted place to investing, renting, buying & selling online.</p>
                        <p className="spacing-items text" >Follow us on</p>
                        <ul className='spacing-items icons'>
                            <li ><a href="/"><FacebookIcon className='iconsColor'/></a></li>
                            <li><a href="/"><TwitterIcon   className='iconsColor'/></a></li>
                            <li><a href="/"><PinterestIcon className='iconsColor'/></a></li>
                            <li><a href="/"><LinkedInIcon  className='iconsColor'/></a></li>
                        </ul>
                    </div>

                    <div className='col col-lg-3 col-12 d-none d-lg-block text-muted '>

                        <h5 className="spacing-items text-white">Quick Links Searches</h5>
                        <ul className='spacing-items searches '>
                            <li className="spacing-items"><a href="/">Property for Rent</a></li>
                            <li className="spacing-items"><a href="/">Property for Sale</a></li>
                            <li className="spacing-items"><a href="/">Society Maps</a></li>
                            <li className="spacing-items"><a href="/">News & Guide</a></li>
                        </ul>


                    </div>

                    <div className='col Accordion  col-12 text-muted '>
                        <Accordion defaultActiveKey="0" >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="bg-dark">Quick Links Searches</Accordion.Header>
                                <Accordion.Body>


                                    <ul className='searches'>
                                        <li ><a href="/">Property for Rent</a></li>
                                        <li><a href="/">Property for Sale</a></li>
                                        <li><a href="/">Society Maps</a></li>
                                        <li><a href="/">News & Guide</a></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </div>


                    <div className='col col-lg-2 col-sm-12 d-none d-lg-block text-muted '>
                        <h5 className="spacing-items text-white">Company</h5>
                        <ul className='searches'>
                            <li className="spacing-items" ><a href="/">About Us </a></li>
                            <li className="spacing-items"><a href="/">Contact Us </a></li>
                            <li className="spacing-items"><a href="/">Privacy Policy</a></li>
                            <li className="spacing-items"><a href="/">Place Free Ad</a></li>
                        </ul>

                    </div>

                    <div className=' Accordion Accordion2 col-lg-3 col-sm-12 text-muted '>
                        <Accordion defaultActiveKey="1" >
                            <Accordion.Item eventKey="1" >
                                <Accordion.Header >Company</Accordion.Header>
                                <Accordion.Body className="accordion-body">

                                    <ul className='searches '>
                                        <li ><a href="/">About Us</a></li>
                                        <li><a href="/">Contact Us</a></li>
                                        <li><a href="/">Privacy Policy</a></li>
                                        <li><a href="/">Place Free Ad</a></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </div>
                    <div className='col col-lg-3 col-sm-12 text-muted '>
                        <h5 className="spacing-items text-white">Contact</h5>
                        <ul className='searches'>
                            <li>
                                <Stack direction="row" >
                                    <RoomIcon />
                                    <p className='Icon-Text'>Main Saggian BypassNear Passport Office,Nain Sukh Shahdara Lahore.</p>
                                </Stack>
                                <Stack direction="row">
                                    <EmailIcon />
                                    <p className='Icon-Text'><a href="/">marhabaestate435@gmail.com</a></p>
                                    </Stack>
                                <Stack direction="row">
                                    <LocalPhoneIcon />
                                    <p className='Icon-Text'>0306-1172435</p></Stack>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        
    )
}
