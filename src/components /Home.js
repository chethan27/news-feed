import React, { Component } from "react";
import Cards from "./Cards";
import { Col, Row } from "reactstrap";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  returnPosts = () => {
    if(this.props.news.data !== undefined){
      // console.log("hi",this.props.news.data.map(post=>{console.log(post.ID)}))
      if (this.props.news.data.length > 0) {
        return this.props.news.data.map(post => {
          return (
            <Col lg={3} md={4} sm={6} xs={12} style={{ paddingBottom: "40px", }}>
              <Cards
                id={post.ID}
                title={post.TITLE}
                publisher={post.PUBLISHER}
                url={post.URL}
                category={post.CATEGORY}
                addToLike={this.props.addToLike}
              />
            </Col>
          );
        });
      } 
    }
    
  };

  render() {
    return (
      <Row >
        <Col lg={12}   > {this.returnPosts()}</Col>
      </Row>
    );
  }
}
