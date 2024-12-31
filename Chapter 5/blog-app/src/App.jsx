import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostEditor from './components/PostEditor';
import UserProfile from './components/UserProfile';
import PrivateRoute from './components/PrivateRoute';
import AuthProvider from './components/AuthProvider';
import './App.css';
const App = () => {
  return (
    <div className="logo">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route
              path="/posts/new"
              element={<PostEditor />}
            />
            <Route
              path="/posts/:id/edit"
              element={
                <PrivateRoute>
                  <PostEditor />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                // <PrivateRoute>
                  <UserProfile />
                // </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
