import axios from 'axios';

const userUrl="https://localhost:44324/api/User";
const userAuthUrl="https://localhost:44324/api/User/authenticate";

export const userService = {
    login,
    logout,
    getAll
};

async function login(u, p) {    
    try{
        await axios.post(userAuthUrl, {
            email: u,
            password: p
        }).then(user =>{
            if (user.status === 401)
            {
                logout();
            }

            if (user) {
                // store user details and basic auth credentials in local storage 
                // to keep user logged in between page refreshes
                user.authdata = window.btoa(u + ':' + p);
                localStorage.setItem('user', JSON.stringify(user));
                
            }
            console.log(user.data)            
            return user.data;   
        });        
    }catch (e){
        console.log(e);
    }
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

async function getAll() {
    let user = JSON.parse(localStorage.getItem('user'));
    //console.log(user.authdata);
    try{
        await axios.get(userUrl, {
            headers: 
            {
                'Authorization': 'Basic ' +user.authdata
            },
        })
        .then(users => {
            //console.log(users.data);
            return users
        });
    }catch(e){
        console.log(e);
    }
}

export default userService;