import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {

  coun = 'in';
  apiKey = 'ae4a78988749452c8bacd793bbc6a65d';
  completeUrl = `https://newsapi.org/v2/top-headlines?country=${this.coun}&category=${this.props.cat}&apiKey=${this.apiKey}`;

  constructor(props) {    //Whenever an object of this class is made, this constructor() method will run
    super(props);
    this.state = {        //this helps in setting state inside constructor(), state is used when you change
      articles: [],       //something dynamically without reloading the webpage
      loading: true,
      page: 1,
      totalResults: 0,
    }
  }

  async componentDidMount() {

    this.props.progress(10);
    let response = await fetch(this.completeUrl);
    this.props.progress(30);
    
    let data = await response.json();
    this.props.progress(70);

    this.setState({
      articles: data.articles,
      totalResults: data.totalResults,
      loading: false,
    })
    this.props.progress(100);
  }


  fetchMoreData = async () => {
    let nextPage = `https://newsapi.org/v2/top-headlines?country=${this.coun}&category=${this.props.cat}&apiKey=${this.apiKey}&page=${this.state.page + 1}`;
    this.setState({ page: this.state.page + 1, });

    let response = await fetch(nextPage);
    let data = await response.json();
  
    this.setState({
      articles: this.state.articles.concat(data.articles),
      totalResults: data.totalResults,
    })
  }

 
  render() {
    // if(!loading) return
    //   <h2> Please Wait Some Time...</h2>

    return (

        <>
          <h3 className='text-center' style={ {marginTop: '66px',} }>Top Headlines in {this.props.cat? this.props.cat.charAt(0).toUpperCase() + this.props.cat.slice(1): ""} Category</h3>
          { this.state.loading && <Spinner /> }   {/* this will render when both the conditions are true */}
          <InfiniteScroll
            dataLength={ this.state.articles.length }
            next={ this.fetchMoreData }
            hasMore={ this.state.articles.length !== this.state.totalResults }
            loader={ <Spinner /> }  
            endMessage={ <p style={ { textAlign: 'center', } }><b> You Have Reached The End Of The Document..</b></p> }
            >
            <div className="container">
              <div className="row">
                { this.state.articles.map((elem) => {
                return <div className="col-md-4" key={elem.url}>
                  <NewsItem title={elem.title? elem.title.slice(0, 82): ""} description={elem.description ? elem.description.slice(0, 130) : ""} imgUrl={ elem.urlToImage } newsUrl={ elem.url } date={ elem.publishedAt } newsSource={ elem.source.name } mode={ this.props.useMode }/>
                  </div>
                  })
                }
              </div>
            </div>
          </InfiniteScroll>

        </>
    );
  }
}

export default News;
