import React from 'react';
import Articles from '../Articles';
import Banner from '../Banner';

class Welcome extends React.Component {
    constructor() {
        super();


        this.state = {
            articles: {
                
            },            
        };

    }

    async componentWillMount(){
        const articles = await this.props.getArticles();
        console.log(articles);
        this.setState({
            articles
        })
    }

    
    handlePagination = async (url) => {
      console.log(url);
      const articles = await this.props.getArticles(url);

      this.setState({ articles})
    }


    render() {
        return (
            <div>
                <Banner
                    backgroundImage={`url(${process.env.PUBLIC_URL}assets/img/home-bg.jpg)`}
                    title="New React Blog"
                    subTitle="Welcome to App"
                />
                <Articles 
                    articles={this.state.articles.data} 
                    handlePagination={this.handlePagination}
                    nextUrl={this.state.articles.next_page_url}
                    prevUrl={this.state.articles.prev_page_url}                    
                />
            </div>
        );
    }
    
}

export default Welcome;