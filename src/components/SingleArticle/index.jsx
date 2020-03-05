import React from 'react';
import Article from './Article'

class SingleArticle extends React.Component {

    constructor() {
        super();


        this.state = {
            article: {
                data:[]
            },
            loading: true
        };

    }

    async componentWillMount() {
        // console.log(this.props);
        const article = await this.props.getArticle(this.props.match.params.slug);
        // console.log(article);
        this.setState({
            article,
            loading: false
        })
    }
    
    render() {
        return (
            <div>
                {
                    !this.state.loading &&
                        <Article article={this.state.article} />
                }
                {
                    this.state.loading &&
                        <p className="text-center">Loading...</p>
                }
            </div>
        );
    }
}
export default SingleArticle;