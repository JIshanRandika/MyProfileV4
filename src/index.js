import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './views/Home/Home';
import BlogCardsView from './views/BlogCardsView/BlogCardsView';
import ResumeView from './views/ResumeView/ResumeView';
import TestimonialView from './views/TestimonialView/TestimonialView';


import Learning from './Learning';
import Achievement from './achievements';
import Kvns from './components/learning/Kvns';
import Esoft from './components/learning/Esoft';
import Htcc from './components/learning/Htcc';
import Self from './components/learning/Self';
import MyLife from './myLife';
import Testing from './Testing';
import Project from './projects';
import Ijse from './components/learning/Ijse';
import Acbt from './components/learning/Acbt';
import Betting from './components/projects/Betting';
import "../node_modules/video-react/dist/video-react.css";

// import 'bootstrap/dist/css/bootstrap.min.css';
//    "bootstrap": "^4.6.0",
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom'

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/Achievement" component={Achievement} />
            <Route exact path="/Learn" component={Learning} />
            <Route exact path="/MyLife" component={MyLife} />
            <Route exact path="/Project" component={Project} />
            <Route exact path="/kvns" component={Kvns} />
            <Route exact path="/htcc" component={Htcc} />
            <Route exact path="/esoft" component={Esoft} />
            <Route exact path="/Betting" component={Betting} />
            <Route exact path="/Testing" component={Testing} />
            <Route exact path="/ijse" component={Ijse} />
            <Route exact path="/acbt" component={Acbt} />
            <Route exact path="/self" component={Self} />
            <Route exact path="/blogCards" component={BlogCardsView} />
            <Route exact path="/resume" component={ResumeView} />
            <Route exact path="/testimonial" component={TestimonialView} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

