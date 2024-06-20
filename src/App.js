// App.js

import React from 'react';
import Profile from "./portifolio container/home/profile";
import Me from './portifolio container/About me/me';
import Re from './portifolio container/resume/re'
import Footer from './portifolio container/footer/footer'
function App() {
  return (
    <center>
      <div className="App">
      <Profile />
      <Me />
      <Re />
      <Footer />
    </div>
    </center>
    
  );
}

export default App;
