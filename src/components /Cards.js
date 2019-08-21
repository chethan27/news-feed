import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardLink } from "reactstrap";

const Cards = props => {
  return (
    <div>
      <Card style={{ margin: "16px", width: "18rem" }}>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>

          <CardSubtitle className="mb-2 text-muted">
            {props.publisher}
          </CardSubtitle>

          <CardLink target="_blank" href={props.url}>
            Link
          </CardLink>

          <CardSubtitle onClick={()=>{props.addToLike(props.id)}} className="mb-2 text-muted">Like</CardSubtitle>
          <CardSubtitle className="mb-2 text-muted">
            {props.category}
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;
