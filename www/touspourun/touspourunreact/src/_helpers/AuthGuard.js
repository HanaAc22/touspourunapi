import {Navigate} from "react-router";

const AuthGuard = ({children}) => {
    let logged = false;
    
    if (!logged){
        return  <Navigate to='/auth/login'/>
    }
    return children
};

export default AuthGuard;