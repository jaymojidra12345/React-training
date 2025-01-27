
import './App.css'
import RingLoader from "react-spinners/RingLoader";
import { useEffect, useState } from 'react'

import { FetchAlbums } from './api/FetchApi'
import AlbumCard from './components/AlbumCard'

import { FetchPosts } from './api/FetchApi'
import PostCard from './components/PostCard'

function App() {

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // for posts API data
  useEffect(() => {
    FetchPosts().then(res => setData(res))
  }, [])

  // for albums API data
  useEffect(() => {
    setIsLoading(true);
    FetchAlbums().then(res => setData(res))
      .finally(() => setIsLoading(false));
  }, [])

  if (isLoading) {
    return (
      <div className="spinner-container">
        <RingLoader color="#36d7b7" size={150} /> {/* Spinner */}
      </div>
    );
  }

  if (!data) {
    return <h3>No results found</h3>
  }


  return (
    <div>

      {/* // for posts API data */}
       {data.map(data =><PostCard title={data.title} body={data.body}  /> )} 

      {/* //for albums API data */}
       {data.map(data => <AlbumCard id={data.id} title={data.title} />)}

    </div>
  )
}

export default App
