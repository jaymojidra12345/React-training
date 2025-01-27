
// const InfiniteScrollExample = () => {
//     const limit = 50

//     const [photos, setPhotos] = useState([])
//     const [hasMore, setHasMore] = useState(true)
//     const [page, setPage] = useState(1)
//     const [query, setQuery] = useState('')
//     const [throttledQuery, setThrottledQuery] = useState('')

//     const fetchPhotos = async (pageNumber, searchquery) => {

//         const API_KEY = "XHz9iuJwTpog3qEauT7DqgFy1FYaoearceKYzrCMRgzFCgmHCA9hvF56"
//         const API_URL = searchquery
//             ? `https://api.pexels.com/v1/search?query=${searchquery}&page=${pageNumber}&per_page=${limit}`
//             : `https://api.pexels.com/v1/curated?page=${pageNumber}&per_page=${limit}`;

//         try {
//             const response = await axios.get(API_URL, {
//                 headers: {
//                     Authorization: API_KEY,
//                 },
//             });

//             setPhotos((prevPhotos) =>
//                 pageNumber === 1
//                     ? response.data.photos // Replace photos for new search
//                     : [...prevPhotos, ...response.data.photos]
//             );

//             setPage((page) => page + 1)

//             if (response.data.photos.length === 0) {
//                 setHasMore(false);
//             }


//         } catch (error) {
//             console.log(error);
//             setHasMore(false);
//         }
//     }

//     //Throttling interval set to 500ms
//     const throttledSearch = _.throttle((query) => {
//         setThrottledQuery(query)
//     }, 500)

//     const handleSearch = (e) => {
//         setQuery(e.target.value)              // Update the query value on every keystroke
//         throttledSearch(e.target.value)        // calling the throttle function
//     }

//     useEffect(() => {
//         if (throttledQuery || page === 1) {
//             setPhotos([]); 
//             setPage(1); 
//             setHasMore(true); 
//             fetchPhotos(1, throttledQuery);
//         }
//     }, [throttledQuery])

//     return (
//         <div>
//             <h1>Pexels Infinite Scroll Example</h1>

//             <input type='text' value={query} onChange={handleSearch} placeholder='Search...' style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginBottom: "20px",
//                 fontSize: "16px",
//             }} />

//             <InfiniteScroll
//                 pageStart={page}
//                 loadMore={() => fetchPhotos(page, throttledQuery)}
//                 hasMore={hasMore}
//                 loader={<div className="loader" key={0}>Loading...</div>}
//             >
//                 <div className="photo-grid">
//                     {photos.map((photo) => (
//                         <div key={photo.id} className="photo-card">
//                             <img src={photo.src.medium} alt={photo.photographer} />
//                             {/* <p>{photo.photographer}</p> */}
//                         </div>
//                     ))}
//                 </div>
//             </InfiniteScroll>
//         </div>
//     )
// }

// export default InfiniteScrollExample

import { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import { throttle } from "lodash";
import "./styles.css";

const InfiniteScrollExample = () => {
  const limit = 50;

  const [photos, setPhotos] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [throttledQuery, setThrottledQuery] = useState("");

  const fetchPhotos = async (pageNumber, searchQuery, retry = 3) => {

    const API_KEY = "XHz9iuJwTpog3qEauT7DqgFy1FYaoearceKYzrCMRgzFCgmHCA9hvF56";
    const API_URL = searchQuery
      ? `https://api.pexels.com/v1/search?query=${searchQuery}&page=${pageNumber}&per_page=${limit}`
      : `https://api.pexels.com/v1/curated?page=${pageNumber}&per_page=${limit}`;


    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: API_KEY,
        },
      });

      setPhotos((prevPhotos) =>
        pageNumber === 1
          ? response.data.photos // Replace photos for new search
          : [...prevPhotos, ...response.data.photos]
      );

      setPage((prevPage) => prevPage + 1);

      if (response.data.photos.length === 0) {
        setHasMore(false); // No more photos available
      }

    } catch (error) {
      console.error("Error fetching photos:", error.message);

      if (retry > 0) {
        console.log("retrying..")
        fetchPhotos(page, throttledQuery, retry - 1)
      } else {
        comsole.error("No more retries")
        setHasMore(false)
      }

    }
  };

  const throttledSearch = throttle((query) => {
    setThrottledQuery(query);   // Set the throttled query after the delay
  }, 500);

  const handleSearch = (e) => {
    setQuery(e.target.value);            // Update the query value on every keystroke
    throttledSearch(e.target.value);     // Call the throttled function
  };

  // Fetch photos when the throttled query changes
  useEffect(() => {
    if (throttledQuery || page === 1) {
      setPhotos([]);
      setPage(1);
      setHasMore(true);
      fetchPhotos(1, throttledQuery);
    }
  }, [throttledQuery]);

  return (
    <div>
      <h1>Pexels Infinite Scroll Example with Throttling</h1>

      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />

      <InfiniteScroll
        pageStart={page}
        loadMore={() => fetchPhotos(page, throttledQuery)}
        hasMore={hasMore}
        loader={<div className="loader" key={0}>Loading...</div>}
      >
        <div className="photo-grid">
          {photos.map((photo) => (
            <div key={photo.id} className="photo-card">
              <img src={photo.src.medium} alt={photo.photographer} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrollExample;
