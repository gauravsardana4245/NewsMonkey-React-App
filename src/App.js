import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import React from 'react'
import News from './News';
import NavBar from './NavBar';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

const App = () => {
  const [progress, setProgress] = useState(0)
  const apiKey = process.env.REACT_APP_NEWS_API;

  const updateProgress = (progress) => {
    setProgress(progress)

  }
  let pageSize = 5;


  return (
    <div style={{ display: "unset" }}>

      <NavBar />
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <Routes>
        <Route exact path="/" element={<News apiKey={apiKey} updateProgress={updateProgress} key="general" country="in" pageSize={pageSize} category="general" />} />
        <Route exact path="/business" element={<News apiKey={apiKey} updateProgress={updateProgress} key="business" country="in" pageSize={pageSize} category="business" />} />
        <Route exact path="/entertainment" element={<News apiKey={apiKey} updateProgress={updateProgress} key="entertainment" country="in" pageSize={pageSize} category="entertainment" />} />
        <Route exact path="/health" element={<News apiKey={apiKey} updateProgress={updateProgress} key="health" country="in" pageSize={pageSize} category="health" />} />
        <Route exact path="/science" element={<News apiKey={apiKey} updateProgress={updateProgress} key="science" country="in" pageSize={pageSize} category="science" />} />
        <Route exact path="/sports" element={<News apiKey={apiKey} updateProgress={updateProgress} key="sports" country="in" pageSize={pageSize} category="sports" />} />
        <Route exact path="/technology" element={<News apiKey={apiKey} updateProgress={updateProgress} key="technology" country="in" pageSize={pageSize} category="technology" />} />

      </Routes>

    </div>

  )



}
export default App
