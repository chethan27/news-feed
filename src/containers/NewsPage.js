import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import Home from "../components /Home";
import Header from "../components /Header";
import axios from "axios";

import {connect} from "react-redux";
import {fetchNews} from "../actions/fetchActions";
import PropTypes from 'prop-types';

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      publisher: [],
      selCategory:"",
      selPublisher:"",
      like:[],
      disNews:[]
    };
  }

  async componentDidMount() {

    await this.props.fetchNews();

  }

  // async componentWillReceiveProps() {



  //   // await this.setState({
  //   //   disNews: this.props.news
  //   // })

  //   // await this.setState({
  //   //   publisher: [...new Set(this.props.disNews.map(t => t.PUBLISHER))]
  //   // });

  //   // await this.setState({
  //   //   category: [...new Set(this.props.news.map(t => t.CATEGORY))]
  //   // });

  //   console.log("df",this.state.category, this.state.publisher, this.props.news,this.state.disNews);

  // }

  async componentDidUpdate() {

    //   await this.setState({
    //   disNews: this.props.news
    // })

    this.props.news.data.map(el=>console.log(el.ID))

    console.log("df",this.state.category, this.state.publisher, this.props.news,this.state.disNews);
  }

  setCatFilter = async (fil) => {
    await this.setState({selCategory:fil})
    this.updateNews(this.state.selCategory)
  }
  setPubFilter = async (fil) => {
    await this.setState({selPublisher:fil})
    this.updatePubNews(this.state.selPublisher)
  }

  addToLike = async (lk) => {
    await this.setState({like: [...this.state.like,lk]})
  }

  updateNews = async (categoryOfNews) => {
    await this.setState({
      disNews: this.state.news.filter(item =>  item.CATEGORY === categoryOfNews )
  })
  }

  updatePubNews = async (categoryOfNews) => {
    console.log(categoryOfNews);
    await this.setState({
      disNews: this.state.news.filter(item =>  item.PUBLISHER === categoryOfNews )
  })
  console.log(this.state.news);
  }

  sortNews = () => {
    
      const sortedarray =  this.state.disNews.sort(function(a,b){
      return a.TIMESTAMP-b.TIMESTAMP
    })

    this.setState({
      disNews : sortedarray
    })
    console.log("hi",this.state.disNews.map((el)=>el));

  }

  

  render() {
    return (
      <Container>
        <Row>
          <Header
            publisher={this.state.publisher}
            category={this.state.category}

            setCatFilter={this.setCatFilter}
            setPubFilter={this.setPubFilter}
            sortNews={this.sortNews}
          />
        </Row>
        <Row>
          <Col
            lg={12}
            style={{ paddingBottom: "40px" }}
          >
            <Home
              news={this.props.news}
              addToLike={this.addToLike}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

NewsPage.propTypes = {
  fetchNews : PropTypes.func.isRequired,
  news: PropTypes.array.isRequired
}



const mapStateToProps = state => ({
  news : state.posts.news
});

export default connect(mapStateToProps,{fetchNews})(NewsPage);
