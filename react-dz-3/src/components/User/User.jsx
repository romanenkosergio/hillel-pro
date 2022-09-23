import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './User.css'

const User = ({ user }) => {
  useEffect(() => {}, []);

  return (
    <div className="user">
      <Card style={{width: '18rem'}}>
        <Card.Body>
          <Card.Title>
            {user?.name}
          </Card.Title>
          <Card.Text>
             {user?.email}
          </Card.Text>
          <Link to={`/posts/${user?.id}`}>
            <Button variant="primary">View post</Button>
            </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
export default User;
