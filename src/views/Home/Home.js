import React, {Component} from 'react';
import Header from '../../components/Header';
import About from '../../components/About';
import Resume from '../../components/Resume';
import Portfolio from '../../components/Portfolio';
import News from '../../components/news';
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/Footer';
import resumeData from '../../resumeData';
import FrontPageGallery from "../../components/FrontPageGallery/FrontPageGallery";
class Home extends Component {
  render() {
    return (
        //    "react-images": "^1.2.0-beta.7",

        <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
          <FrontPageGallery resumeData={resumeData}/>
        {/*<Resume resumeData={resumeData}/>*/}
        <Portfolio resumeData={resumeData}/>
        <News resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>

      </div>
    );
  }
}

export default Home

