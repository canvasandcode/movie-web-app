import React from 'react';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';

const App = () => {
  //every component in React needs to return something
  return (
    //Wrap in 1 element, or React Fragments
    <div className="overflow-hide">
      <Header />
      <Home />
    </div>
  )
}

export default App;