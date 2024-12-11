import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/home';
import BlogPostDetails from '../pages/blog-post-details';

function MainRouter() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/:slug' element={<BlogPostDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default MainRouter;
