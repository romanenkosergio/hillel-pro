import React from "react";
import Card from "react-bootstrap/Card";
import './Post.css'

const Post = ({ post }) => {

  return (
    <div className="post">
      <Card>
        <Card.Body>
          <Card.Title>
            {post?.title}
          </Card.Title>
          <Card.Text>
             {post?.body}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Post;
