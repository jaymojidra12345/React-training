import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);  
  const [searchTerm, setSearchTerm] = useState('');  

  useEffect(() => {
    const mockPosts = [
      { id: 1, title: 'Post One', content: 'Content of Post One' },
      { id: 2, title: 'Post Two', content: 'Content of Post Two' },
      { id: 3, title: 'Post Three', content: 'Content of Post Three' },
    ];
    setPosts(mockPosts); 
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Blog Posts</h1>
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px', padding: '10px', width: '300px' }}
      />
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id} style={{ marginBottom: '10px' }}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
