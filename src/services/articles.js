import Axios from 'axios';
import config from '../Config';

export default class ArticlesService {
    
    async getArticleCategories() {

        

        try {
            const response = await Axios.get(`${config.apiUrl}/api/categories`);
            
            return response.data.categories;
            
        } catch (errors) {           
            return errors
        }


        
    }

    async getArticles(url = `${config.apiUrl}/api/articles`) {



        try {
            const response = await Axios.get(url);

            return response.data.articles;

        } catch (errors) {
            return errors
        }



    }

    async getArticle(slug) {



        try {
            const response = await Axios.get(`${config.apiUrl}/api/article/${slug}`);

            return response.data.article;

        } catch (errors) {
            return errors
        }



    }
}