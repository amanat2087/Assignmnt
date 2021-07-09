
const INITIAL_STATE = {
    Userdata : {username: "", password: ""},
    error: "",
    users: [{
        name: "",
        email: "",
        id: "",
        age: "",
        phone: "",
        gender: ""
    }]
}

const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            const {username, password} = action.logindata;
         let errorMsg = "";
            if(username==="hruday@gmail.com" && password==="hruday123"){
                errorMsg="";
            }else{
                errorMsg= "Invalid credentials! Please try again."
            }
            return {
                ...state,
                error: errorMsg
            }
        case 'USER_LIST': 
            return{
                ...state,
                users: action.userslist
            }
        default:
            return {
                ...state
            }
    }
}

export default UserReducer;