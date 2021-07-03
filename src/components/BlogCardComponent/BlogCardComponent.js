import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Col, Row} from "reactstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { bounce } from 'react-animations';
// import Radium, {StyleRoot} from 'radium';
//
// const styles = {
//     bounce: {
//         animation: 'x 1s',
//         animationName: Radium.keyframes(bounce, 'bounce')
//     }
// }
export default class BlogCardComponent extends Component {
    render() {
        AOS.init({
            duration: 2000,
        })
        let resumeData = this.props.resumeData;
        return (
            <section id="portfolio" style={{background:"#ffffff"}}>
                {/*<div className="row">*/}
                    {/*<div className="twelve columns collapsed">*/}
                        {/*<h1>Check Out My Learnings.</h1>*/}
                         <h1 style={{fontSize:"25px",color:"#95A3A3"}}>My Blogs</h1>
                        <Row style={{width:"100%", marginBottom:"20px"}}>

                            {
                                resumeData.portfolio && resumeData.portfolio.map((item)=>{
                                    return(
                                        <Col data-aos="fade-up"
                                             // data-aos-anchor-placement="bottom-bottom"
                                             data-aos-offset="100" md="3" xs="12" style={{width:"100%", background:"#ffffff", marginBottom:"20px"}}>
                                            {/*<Link to={`${item.router}`}>*/}

                                                <div className="shadow">
                                                    {/*<div className="columns portfolio-item">*/}
                                                    {/*<div className="item-wrap">*/}

                                                        <Col>
                                                            <Row>
                                                                <img style={{padding:"25px"}} src={`${item.imgurl}`}/>
                                                            </Row>

                                                            <Row>

                                                                    <div style={{padding:"25px"}}>
                                                                        <h5>{item.date}</h5>
                                                                        <p>{item.description}</p>
                                                                    </div>
                                                            </Row>
                                                        </Col>


                                                    {/*</div>*/}
                                                </div>

                                            {/*</Link>*/}
                                        </Col>
                                    )
                                })
                            }


                        </Row>
                    {/*</div>*/}
                {/*</div>*/}
            </section>
        );
    }
}