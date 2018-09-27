import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/App.css';
import StartIntroBlock from '../component/StartIntroBlock';
import SquareGallery from '../container/SquareGallery.container';
import SquareForm from '../container/SquareForm.container';

const App = () => {
  return (
      <Router>
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                  <div className="App">
                    <Route path="/" exact={true} render={() =>
                      <StartIntroBlock
                      title="Art with Squares"
                      description="Create customized stylish squares to have your own gallery and show them to the world."
                      buttonLegend="Start to create"
                      buttonUrlAction="/square"
                      />
                    }
                    />
                    <Route path="/square" exact={true} render={() => <SquareForm /> } />
                    <Route path="/square/gallery" exact={true} render={() => <SquareGallery /> }/>
                  </div>
                </div>
            </div>
        </div>
      </Router>
  );
};

export default App;
