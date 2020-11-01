import axios from 'axios';

const productUrl="https://localhost:5001/api/Product";


export function getAll() {
    //let user = JSON.parse(localStorage.getItem('user'));
    //const authHeader = {'Authorization': 'Basic ' + user.authdata};
    //console.log(authHeader);
    
    axios.get(productUrl).then(_products=>{
        if (_products.status === 200){
            if(_products){
                return JSON.stringify(_products.data);  
            }
            return _products.status;
        }
        console.log(_products);
        return _products;
    }).catch(error => {
        console.log("getAll error: "+error)
        return error
    });
}

export async function post(data){
    await axios.post(productUrl,data).then(res=>{
        console.log(res.status);
        return res.status;
    }).catch(error=>{
        console.log("Catch post error: "+ error);
        return error;
    });
}
