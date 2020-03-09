import Axios from 'axios';
import config from '../Config';

export default class ArticlesService {
    
    async getArticleCategories() {

        

        try {
            const response = await Axios.get(`${config.apiUrl}/api/categories`);
            console.log(response);
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

    createArticle = async (data, token) => {        
        console.log(token);
        const image = await this.uploadToCloudinary(data.image);

        try{
            const response = await Axios.post(`${config.apiUrl}/api/articles/create`, {
                title: data.title,
                content: data.content,
                category_id: data.category,
                imageUrl: image.secure_url,
            });
            console.log(response);

            return response.data;
        }catch(errors){
            console.log(errors);            
        }
        


    }

    async uploadToCloudinary(image){
        const form = new FormData();
        form.append('file', image);
        form.append('upload_preset', 'adgg4zme');

        const response = await Axios.post('https://api.cloudinary.com/v1_1/dplooivsz/image/upload',form);
        console.log(response);
        return response.data;
    }
}