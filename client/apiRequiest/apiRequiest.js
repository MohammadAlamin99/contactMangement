import axios from "axios";

let BaseURL = "http://localhost:5000";

// add candidate
export  async function addContactRequest(name,email,phone,address,photo) {
    try {
        let reqBody ={name:name, email:email, phone:phone, address:address,photo:photo};
        let result = await axios.post('https://contact-mangement-theta.vercel.app/api/v1/addContact',reqBody);
        let data =  result;
        return data;
    }
    catch (e) {
        return false
    }
 }


 export async function allContactRequest() {
    try {
        let result = await axios.get('https://contact-mangement-theta.vercel.app/api/v1/allContact');
        let data =  result.data['data'];
        return data;
    }
    catch (e) {
        return false
    }
 }


 export  async function deleteContactRequest(id) {
    try {
        let result = await axios.get('https://contact-mangement-theta.vercel.app/api/v1/deleteCon/'+id);
        let data = result
        return data;
    }
    catch (e) {
        console.log(e)
        return false
    }
 }



 export  async function updateContactRequest(id,name,email,phone,address,photo) {
    try {
        let reqBody ={id:id,name:name, email:email, phone:phone, address:address,photo:photo};
        let result = await axios.post('https://contact-mangement-theta.vercel.app/api/v1/updateCon',reqBody);
        return result
    }
    catch (e) {
        return false
    }
 }
 