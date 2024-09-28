import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  // useEffect(() => {}, [])
  //   appwriteService.getPosts([]).then((posts) => {
  //       if (posts) {
  //           setPosts(posts.documents)
  //       }
  //   })

  return (
    <div className="w-full py-8">
      <Container>
        {posts.map((post) => (
          <div className="flex flex-wrap">
            <div key={post.$id} className="p-2 w-1/4">
              {" "}
              <PostCard {...post} />
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default AllPosts;
