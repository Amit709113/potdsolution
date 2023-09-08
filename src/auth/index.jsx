// is logging 

//login related api calling


export const isLoggedIn=()=>{
    let data = localStorage.getItem("data");
    if(data==null) return false;
    else{ return true }
};

// data=>set to localstorage
export const doLogin=(data,next)=>{
    localStorage.setItem("data",JSON.stringify(data))
    next();

}

// doLogout => remove from local storage

export const doLogout=(next)=>{
    localStorage.removeItem("data");
    next();
}

//get current user

export const getCurrentUserDetail=()=>{
    if(isLoggedIn()){
        let data = localStorage.getItem("data")
        return JSON.parse(data).userDto;
    }
    else return undefined;
    
}

//get current user token

export const getToken=()=>{
    if(isLoggedIn() ){
    let token=localStorage.getItem("data");
    return JSON.parse(token).token;
    }
    return null;
}