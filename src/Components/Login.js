import React,{useState} from 'react';
import { login } from '../Actions/Login';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

const Login = ({isAuthenticated,login}) => {
    
    const[formData,setFormData] = useState({
        email:'',
        password:''
    });
    const{email,password} = formData;
    const onChange = (e) => setFormData({...formData,[e.target.name]:e.target.value});
    

    const onSubmit = async (e) =>{
       
        e.preventDefault();
        login(formData);
    }

    
    if(isAuthenticated){
        return (<Redirect to="/"/>)
    }
    return (
        <div className="container mx-auto bg-light">
            <div className="card text-">
                <div className="card-body">
                    <div className="card-title">
                        <h1>Login</h1>
                    </div>
                    <form action="" onSubmit={e=> onSubmit(e)}>
                        <input type="text" name="email" placeholder="email" value={email} onChange={e=>onChange(e)}/> <br/>
                        <input type="password" name="password" placeholder="password" value={password} onChange={e=>onChange(e)}/> <br/>
                        <input type="submit" value="submit" placeholder="login" className="btn btn-primary"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state =>{
    return{
        isAuthenticated:state.auth.isAuthenticated
    }
}
export default connect(mapStateToProps,{login}) (Login);