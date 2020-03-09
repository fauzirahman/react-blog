/* eslint-disable */
import React from 'react';
import Axios from 'axios';
import { validateAll } from 'indicative/validator';
import config from '../../../Config';
import CreateArticle from './CreateArticle';


class Article extends React.Component {
    constructor() {
        super();


        this.state = {
            title: '',
            image: null,
            content: '',
            category: null ,
            errors: {},
            categories: []
        };

    }

    async componentWillMount(){
        const categories = await this.props.getArticleCategories();

        this.setState({
            categories
        })
    }

    handleSubmit = async(event) => {
        event.preventDefault();

        await this.props.createArticle(this.state, this.props.token); 
    }

    handleInputChange = async (event) => {
        
        this.setState({
            [event.target.name]: event.target.type === 'file' ?  event.target.files[0] : event.target.value
        });
    }

    handleSubmitChange = async (event) => {
        event.preventDefault()
        console.log(this.state)

        //validating user data        
        const data = this.state;
        const rules = {
            title: 'required|string',
            image: 'required',
            content: 'required|string',
            category: 'required|string'           
        };
        


        const message = {
            required: 'This field is required.'
        };
       
        validateAll(data, rules, message)
        .then(() => {
            Axios.post(`${config.apiUrl}/api/articles/create`,{                
                title: this.state.title,
                imageUrl: 'http://localhost:3000/assets/img/bg-login-image.jpg',
                category_id: this.state.category,
                content: this.state.content
            }).then(response => {
                console.log(response.data)
                localStorage.setItem('article', JSON.stringify(response.data))                
                this.props.history.push('/');
            }).catch(errors=>{
                console.log(errors)
                var Jsonemail = JSON.parse(errors.response.data)

                const formattedErrors = {}
                //formattedErrors['email'] = Jsonemail['email'];
                this.setState({
                    errors
                })
            })
        })  
        .catch(errors=>{
            console.log(errors);
            const formattedErrors = {}
            errors.forEach(error => formattedErrors[error.field] = error.message)
            this.setState({
                errors: formattedErrors
            })        
        })      


    }

    render() {
        return (
            <CreateArticle 
            categories={this.state.categories} 
            handleInputChange={this.handleInputChange}             
            handleSubmit={this.handleSubmit}
            errors={this.state.errors}/>
        );
    }
}
export default Article;