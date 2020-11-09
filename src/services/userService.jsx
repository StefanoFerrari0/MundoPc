import axios from 'axios';

const userUrl="http://localhost:5000/api/User";
const userAuthUrl="http://localhost:5000/api/User/authenticate";

export async function login(e, p) {    
    try{
        await axios.post(userAuthUrl, {
            email: e,
            password: p
        }).then(user =>{
            if (user.status === 401)//(user.status != 200)
            {
                logout();
            }

            if (user) {
                // store user details and basic auth credentials in local storage 
                // to keep user logged in between page refreshes
                user.config = '';
                //descomentar para guardar token en localStorage
                //user.data.authdata = window.btoa(e+':'+p);
                localStorage.setItem('user', JSON.stringify(user.data));
            }            
            return user;   
        });        
    }catch (e){
        console.log(e);
        return e.data;
    }
}

export function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

export async function getAll() {
    //descomentar para autenticacion por token basico
    //let user = JSON.parse(localStorage.getItem('user'));
    //const authHeader = {'Authorization': 'Basic ' + user.authdata};
    //console.log(authHeader);

    axios.get(userUrl).then(_users=>{
        if (_users.status === 200){
            if(_users){
                return JSON.stringify(_users.data);  
            }
            return _users.status;
        }
        console.log(_users);
        return _users;
    }).catch(error => {
        console.log("getAll error: "+error)
        return error
    });
}

export async function post(data){
    await axios.post(userUrl,data).then(res=>{
        console.log(res.status);
        return res.status;
    })
}
