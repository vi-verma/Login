import {useState} from 'react';
import Button from "./Components/Button";
import Card from './UI/Card';
import "./Login.css"

function Login(props){
    const [newUser, setNewUser] = useState('');
    const UserInputHandeler = (event) => setNewUser({...newUser, user:event.target.value});
    const userPasswordHandeler = (event) => setNewUser({...newUser, password:event.target.value});
    
    const loginHandeler = () => props.setUserLogin(newUser);

    return(
        <Card>
            <div className="row">
                <div className="user_login col-md-12">
                    <p>USER LOGIN</p>
                </div>
                <div className="col-md-12">
                    <label>User Id:</label>
                    <input onChange={UserInputHandeler} className="form-control" type="text" ></input>
                </div>
                <div className="col-md-12">
                    <label>Password:</label>
                    <input onChange={userPasswordHandeler}className="form-control"></input>
                </div>
                <div className="col-sm-12 button_log">
                    <Button  onClick={loginHandeler}>LOGIN</Button>
                </div>
            </div>
        </Card>
    );
};
export default Login;