import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Article from './components/Admin/Article';
import Login from './components/Admin/Login';
import Signup from './components/Admin/Signup';
import ForgotPassword from './components/Admin/ForgotPassword';
import Auth from './components/Auth';

import * as serviceWorker from './serviceWorker';
import ArticlesService from './services/articles';
import SingleArticle from './components/SingleArticle';
import CreateArticle from './components/Admin/Article/CreateArticle';



class App extends React.Component{


    constructor(){
        super();


        this.state = {
            authUser: null,
            articles: [],
        }
    }


    componentDidMount(){
        const user = localStorage.getItem('user')


        if(user){
            this.setState({
                authUser: JSON.parse(user)
            })
        }
    }

    setArticles = (articles)=>{
        this.setState({articles});
    }

    setAuthUser = (authUser) => {
        this.setState({
            authUser,
        },()=>{
            localStorage.setItem('user', JSON.stringify(authUser));
            this.props.history.push('/');
        })
    }
    
    render(){ 
        const { location } = this.props;
        console.log(this.state.authUser);
        console.log(this.props);
        return(
            
            <div>    
            < Auth
                path = "/articles/create"
                component = {
                    CreateArticle
                }
                props = {
                    {
                        getArticleCategories: this.props.ArticlesService.getArticleCategories,
                        createArticle: this.props.ArticlesService.createArticle,
                        token: this.state.authUser ? this.state.authUser.access_token : null,
                    }
                }
                isAuthenticated={this.state.authUser !== null}
            />
            {
                location.pathname !== '/login' && location.pathname !== '/signup' &&
                < Navbar authUser = {this.state.authUser} />
            }    
            
            <Route exact path="/"  render={
                (props) => <Welcome {...props}  
                    getArticles={this.props.ArticlesService.getArticles} />
                } />  
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/article/:slug" render={
                (props) => <SingleArticle 
                    {...props}
                    getArticle={this.props.ArticlesService.getArticle}                    
                    />
                } />   
            <Route path="/post" render={
                (props) => <SingleArticle {...props} />
                } />                          
            <Route path="/create-article" render={
                (props) => <Article {...props}  
                    getArticleCategories={this.props.ArticlesService.getArticleCategories}                   
                    createArticle={this.props.ArticlesService.createArticle} 
                    token={this.state.authUser.access_token} />
                } />  
            <Route path="/login" render={
                (props) => <Login {...props}                     
                    setAuthUser={this.setAuthUser} />
                } />  
            <Route path="/signup" render={
                (props) => <Signup {...props}                    
                    setAuthUser={this.setAuthUser} />
                } />
            <Route path="/forgot-password" component={ForgotPassword} />
            {
                location.pathname !== '/login' && location.pathname !== '/signup' &&
               <Footer />
            }                 
        </div> 
        )
    }
}

const Main = withRouter((props) => {
    return (
        <App ArticlesService = {new ArticlesService()} {...props} />
    )
});



ReactDOM.render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


