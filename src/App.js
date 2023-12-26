import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Newscomponent from './components/Newscomponent'
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const pageSize = 6;
  const apikey = '5ca7b939216440fbad3aaa5a1460f14a';

  const [progress,setProgress] = useState(0);
     
    return (
      <Router>
        <LoadingBar
          color='#f11946'
          progress={ progress}
         
        />
        <Navbar />
        <Routes>
          {/* //key is added to rebound the page */}
          <Route path="/" exact element={<Newscomponent apikey={ apikey} setProgress={setProgress}   key="general" pageSize={ pageSize} country="in" category="general" />} />
          <Route path="/business" exact element={<Newscomponent apikey={ apikey} setProgress={setProgress}   key="business" pageSize={ pageSize} country="in" category="business" />} />
          <Route path="/entertainment" exact element={<Newscomponent apikey={ apikey} setProgress={setProgress}   key="entertainment" pageSize={ pageSize} country="in" category="entertainment" />} />
          <Route path="/general" exact element={<Newscomponent apikey={ apikey} setProgress={setProgress}   key="general" pageSize={ pageSize} country="in" category="general" />} />
          <Route path="/health" exact element={<Newscomponent apikey={ apikey} setProgress={setProgress}   key="health" pageSize={ pageSize} country="in" category="health" />} />
          <Route path="/science" exact element={<Newscomponent apikey={ apikey} setProgress={setProgress}   key="science" pageSize={ pageSize} country="in" category="science" />} />
          <Route path="/sports" exact element={<Newscomponent apikey={ apikey} setProgress={setProgress}   key="sports" pageSize={ pageSize} country="in" category="sports" />} />
          <Route path="/technology" exact element={<Newscomponent apikey={ apikey} setProgress={setProgress}   key="technology" pageSize={ pageSize} country="in" category="technology" />} />

        </Routes>
      </Router>
    )
  
}

export default App;
