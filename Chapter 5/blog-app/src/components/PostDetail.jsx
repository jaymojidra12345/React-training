import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Comments from './Comments';  
const PostDetail = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState(null); 
  const [loading, setLoading] = useState(true); 
  
  useEffect(() => {
    const fetchPost = async () => {
      const mockPost = {
        id,
        title: `Post Title ${id}`,
        content: `Content of Post ${id}. This is the detailed view.`,
      };
      setPost(mockPost);
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;  
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/">Back to Posts</Link>

      <div style={{ marginTop: '20px' }}>
        <h3>Comments</h3>
        <Comments postId={id} />
      </div>
    </div>
  );
};

export default PostDetail;
