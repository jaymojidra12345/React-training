import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PostEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { id } = useParams(); 
  const navigate = useNavigate(); 

  useEffect(() => {
    if (id) {
      const mockPost = {
        id,
        title: `Post Title ${id}`,
        content: `Content of Post ${id}. Edit this post.`,
      };
      setTitle(mockPost.title);
      setContent(mockPost.content);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      console.log('Post saved:', { title, content });

       navigate(`/posts/${id || Date.now()}`);
    }
  };

  return (
    <div>
      <h1>{id ? 'Edit Post' : 'Create New Post'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post Title"
            required
            style={{ padding: '10px', width: '300px' }}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Post Content"
            required
            style={{ padding: '10px', width: '300px', height: '150px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px', marginTop: '10px' }}>
          {id ? 'Save Changes' : 'Create Post'}
        </button>
      </form>
    </div>
  );
};

export default PostEditor;
