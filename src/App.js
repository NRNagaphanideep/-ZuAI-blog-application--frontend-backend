import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostList from "./components/PostList";
import PostDetailWrapper from "./components/PostDetail";
import PostForm from "./components/PostForm";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetailWrapper />} />
        <Route path="/posts/form/:id?" element={<PostForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
