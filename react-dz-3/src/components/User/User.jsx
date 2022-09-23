import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './User.css'

const User = (props) => {
  useEffect(() => {}, []);

  return (
    <div className="user">
      <Card style={{width: '18rem'}}>
        <Card.Body>
          <Card.Title>
            {props.user.name}
          </Card.Title>
          <Card.Text>
             {props.user.email}
          </Card.Text>
          <Link to={`/posts/${props.user.id}`}>
            <Button variant="primary">View post</Button>
            </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
export default User;
