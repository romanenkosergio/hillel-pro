import React from "react";
import Card from "react-bootstrap/Card";
import './Post.css'

const Post = (props) => {

  return (
    <div className="post">
      <Card>
        <Card.Body>
          <Card.Title>
            {props.post.title}
          </Card.Title>
          <Card.Text>
             {props.post.body}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Post;
