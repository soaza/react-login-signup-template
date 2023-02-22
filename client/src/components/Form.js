import React from "react";

export const Form = ({ post, index }) => {
  return (
    <div
      style={{
        backgroundColor: "pink",
        marginBottom: 5,
        height: 400,
        width: 400,
      }}
    >
      {post.id}. {post.title} {post.userId}
    </div>
  );
};
