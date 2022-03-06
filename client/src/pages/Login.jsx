import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Form from "./Form";
import Emp from "./Emp";

const Login=()=>{
    return(
        <>
        <Router>


            <Switch>
                <Route path="/" exact component={Form}/>
                <Route path="/Emp" exact component={Emp}/>

            </Switch>
        </Router>
        
        
        </>

    )
}
export default Login;
