import { useState, useEffect } from "react";
import { Post } from "../components/Post";

function LandingPage() {
  const [posts, setPosts] = useState([]);
  const [fetchData, setFetchData] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  // with dependencies
  useEffect(() => {
    if (fetchData) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPosts(data);
        });
    }
  }, [fetchData]);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      className="App"
    >
      {posts.slice(0, 10).map((post, index) => {
        return <Post post={post} index={index} />;
      })}
      <button onClick={() => setFetchData(true)}> Fetch Data</button>
    </div>
  );
}

export default LandingPage;
