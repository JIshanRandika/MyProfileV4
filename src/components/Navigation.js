import React, {Component} from 'react';
import resumeData from "../resumeData";
import News from "./news";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import {Link} from "react-router-dom";

import { StyleSheet, css } from "aphrodite";


export default class Navigation extends Component {

    render() {
        // let mql = window.matchMedia('(max-width: 600px)');
        //
        // document.querySelector(".mq-value").innerText = mql.matches;

        // const styles = StyleSheet.create({
        //     heading: {
        //         textAlign: "right",
        //         backgroundColor: "red",
        //         "@media (max-width: 767px)": {
        //             textAlign: "center",
        //             backgroundColor: "green"
        //         },
        //         // "@media (max-width: 767px)": {
        //         //     textAlign: "center",
        //         //     backgroundColor: "blue"
        //         // }
        //     }
        // });
        // Create a media condition that targets viewports at least 768px wide
        const mediaQuery = window.matchMedia('(max-width: 600px)')
        const start = document.getElementById("start");
// Check if the media query is true

        if (mediaQuery.matches) {

            // Then trigger an alert
            // document.body.style.backgroundColor = "blue";
            alert('Use your PC or Laptop for best look!')
            // start.style.display = "block";
        }else {
            // start.style.display = "block";
        }
        // const divStyle = {
        //
        //     background:"blue",
        //     display:"block"
        //     // backgroundImage: 'url(' + imgUrl + ')',
        // };

        let resumeData = this.props.resumeData;
        return (



     //       <Navbar id="navigation" bg="primary" variant="dark">
       //         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
         //       <Nav className="mr-auto">
          //          <Nav.Link href="#home">Home</Nav.Link>
            //        <Nav.Link href="#features">Features</Nav.Link>
              //      <Nav.Link href="#pricing">Pricing</Nav.Link>
            //    </Nav>
             //   <Form inline>
              //      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
             //       <Button variant="outline-light">Search</Button>
           //     </Form>
           // </Navbar>

        //     <li><a className="smoothscroll" href="#about">About</a></li>
        // <li><a className="smoothscroll" href="portfolio">Gallery</a></li>
        // <li><Link to={`/blogCards`}><a className="smoothscroll" href="">Blogs</a></Link></li>
        // <li><a className="smoothscroll" href="#portfolio">Resume</a></li>
        // <li><a className="smoothscroll" href="#testimonials">Cerfications</a></li>
        // <li><a className="smoothscroll" href="#contact">Honors & Awards</a></li>
        // <li><a className="smoothscroll" href="#contact">Projects</a></li>
        // <li><a className="smoothscroll" href="#contact">Life</a></li>
        // <li><a className="smoothscroll" href="#contact">Services</a></li>
        // <li><a className="smoothscroll" href="#contact">My Updates</a></li>


            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                <ul id="nav" >
                    <li className="current"><a href="http://localhost:3000/">Home</a></li>
                    <li><a className="smoothscroll" href="http://localhost:3000/#about">About</a></li>
                    <li><a className="smoothscroll" href="http://localhost:3000/#portfolio">Gallery</a></li>
                    <li><Link to={`/blogCards`}><a>Blog</a></Link></li>
                    <li><Link to={`/resume`}><a>Resume</a></Link></li>
                    <li><a className="smoothscroll" href="#">Cerfications</a></li>
                    <li><a className="smoothscroll" href="#">Honors & Awards</a></li>
                    <li><a className="smoothscroll" href="#">Projects</a></li>
                    <li><a className="smoothscroll" href="#">Life</a></li>
                    <li><a className="smoothscroll" href="#">Services</a></li>
                    <li><a className="smoothscroll" href="http://localhost:3000/#testimonials">My Updates</a></li>
                    <li><Link to={`/testimonial`}><a>Testimonial</a></Link></li>
                    {/*<li><a className="smoothscroll" href="http://localhost:3000/#resume">Resume</a></li>*/}
                    {/*<li><a className="smoothscroll" href="http://localhost:3000/#portfolio">Works</a></li>*/}
                    {/*/!*<News resumeData={resumeData}/>*!/*/}

                    {/*<li><a className="smoothscroll" href="http://localhost:3000/#testimonials">News</a></li>*/}
                    {/*<li><a className="smoothscroll" href="http://localhost:3000/#contact">Contact</a></li>*/}
                </ul>
            </nav>
        );
    }
}