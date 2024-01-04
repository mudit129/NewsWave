import React, { Component } from 'react'
import NewsItem from './NewsItem'
import 'bootstrap/dist/css/bootstrap.min.css'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    pagesize: 20,
    country: 'in',
    category: 'general',
  }

  static propTypes = {
    pagesize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  }
  
  constructor(){
    super();
    console.log("Hello I'm a constructor from News");
    this.state = {
      articles : [],
      loading : false,
      page: 1
    }
  }

  updateData = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2358d2001ea24fb0aec3bbb0560c90c2&page=1&pagesize=20`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page-1,
      loading: false
    })
  }

  async componentDidMount(){
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2358d2001ea24fb0aec3bbb0560c90c2&page=1&pagesize=20`;
    
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false
    // })
    this.updateData();
  }

  handlePrev = async ()=>{
    // console.log("prev");
    // console.log(this.state.page);
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2358d2001ea24fb0aec3bbb0560c90c2&page=${this.state.page - 1}&pagesize=20`;
    // this.setState({loading: true})
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles: parsedData.articles,
    //   page: this.state.page-1,
    //   loading: false
    // })

    this.setState({page: this.state.page-1});
    this.updateData();
  }

  handleNext = async ()=>{
      // console.log("next");
      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2358d2001ea24fb0aec3bbb0560c90c2&page=${this.state.page + 1}&pagesize=20`;
      // this.setState({loading: true})
      // let data = await fetch(url);
      // let parsedData = await data.json();
      // this.setState({
      //   articles: parsedData.articles,
      //   page: this.state.page+1,
      //   loading: false
      // })
      this.setState({page: this.state.page+1});
      this.updateData();
  }

  render() {
    return (
      <div  className='container my-3'>
        
        <h1 className='text-center' style={{marginTop: '70px'}}>NewsMonkey - Top Headlines {this.props.category}</h1>
        {this.state.loading && <Spinner></Spinner>}
        <div className="row">
            {!this.state.loading && 
                this.state.articles.map(element => {
                  return <div className = "col-md-3 my-4" key = {element.url}>
                    <NewsItem title = {element.title} desc = {element.description} src = {element.urlToImage} url = {element.url} author = {element.author} date = {new Date(element.publishedAt).toGMTString()}/>
                  </div>
                })
            }
        <div className = 'container d-flex justify-content-between'>
          <button disabled = {this.state.page === 1} type="button" className="btn btn-dark" onClick={this.handlePrev}>&larr; Previous</button>
          <h6>Page - {this.state.page}</h6>
          <button disabled = {this.state.page === Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div>
            
        </div>
        
      </div>
    )
  }
}

export default News
