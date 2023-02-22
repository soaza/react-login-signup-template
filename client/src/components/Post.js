import React from "react";

export const Post = ({ post, index }) => {
  return (
    <div>
      {post.id % 2 == 0 && (
        <div
          style={{
            backgroundColor: post.id % 2 ? "pink" : "blue",
            marginBottom: 5,
            height: 400,
            width: 400,
          }}
        >
          {post.id}. {post.title} {post.userId}
        </div>
      )}
    </div>
  );
};
