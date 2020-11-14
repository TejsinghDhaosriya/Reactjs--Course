import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render('kya dikhana hai ','kaha dikhanaa','callback fun');



 ReactDOM.render(
    <React.Fragment>
 <h1>Hello world</h1>
  <h5>Reactjs course</h5>
 </React.Fragment>
 ,document.getElementById('root'));

//create element pure js 
//same thing which is done by render method

// const h1 = document.createElement('h1');
// h1.innerHTML = "Reactjs course"
// document.getElementById("root").appendChild(h1);


//from react 16 onward it is possible to return array of element in render method


// ReactDOM.render(
// [
// <h1>H2ello world</h1>,
// <h5>Reactjs course</h5>
// ]
// ,document.getElementById('root'));
