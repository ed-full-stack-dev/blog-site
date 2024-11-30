import React from 'react';
import Home from './pages/home';
import BlogPostDetails from './pages/blog-post-details';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/:slug' element={<BlogPostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
