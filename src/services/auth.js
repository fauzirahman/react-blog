import Axios from 'axios';
import { validateAll } from 'indicative';
import config from '../Config';

export default class AuthService {
    
    async registerUser(data){        
        const rules = {
            name: 'required|string',
            email: 'required|email',
            password: 'required|string|min:6|confirmed'
        };


        const message = {
            required: 'This field is required.',
            'required.email': 'The email is required.',
            'password.confirmed': 'The password confirmation does not match.'
        };

        try {

            await validateAll(data, rules, message)

            try {
                const response = await Axios.post(`${config.apiUrl}/api/register`, {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    password_confirmation: data.password_confirmation
                })


                console.log(response);
                return response.data;
                
            } catch (errors) {
                var Jsonemail = JSON.parse(errors.response.data)

                const formattedErrors = {}
                formattedErrors['email'] = Jsonemail['email'];
                console.log(formattedErrors);
                return formattedErrors
            }


        } catch (errors) {
            //show Errors
            const formattedErrors = {}
            errors.forEach(error => formattedErrors[error.field] = error.message)
            console.log(formattedErrors);
            return formattedErrors
        }
    }
}