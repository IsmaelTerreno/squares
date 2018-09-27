import React from 'react';
import '../styles/Loading.css';
const Loading = () =>(
  <div className="row justify-content-md-center">
    <div className={"spinner-wrapper col-lg-12 col-md-12 col-sm-12 col-12"}>
      <div className="spinner"/>
    </div>
  </div>
);

export default Loading;
