import React, { useState } from "react";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material";

import IndexPage from "./pages/IndexPage";
import SoundTestPage from "./pages/SoundTestPage";
import BssTestPage from "./pages/BssTestPage";

import './styles.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Pretendard Variable'
  }
})

function App() {
  return (<>
  <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/sound-test" element={<SoundTestPage />} />
        <Route path="/bss-test" element={<BssTestPage />} />
      </Routes>
    </Router>
  </ThemeProvider>
  </>)
  
}


export default App;
