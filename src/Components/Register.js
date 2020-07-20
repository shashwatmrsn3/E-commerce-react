import React,{useState} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import {register} from '../Actions/Login';

const Register = ({isAuthenticated,register}) =>{
    
    const [formData,updateFormData] = useState({
        name:'',
        email:'',
        password:'',
        
        role:'ROLE_CUSTOMER'
    });

    if(isAuthenticated){
        return <Redirect to="/"/>
    }

    

    const {name,email,password} = formData;
    const password2='';

    const onChange = e =>{
        e.preventDefault();
        updateFormData({...formData,[e.target.name]:e.target.value});
    }

    const onSubmit=e=>{
        console.log('inside onsubmit functio');
        e.preventDefault();
        register(formData);
    }

    const registerForm=(<div className="container mx-auto bg-light">
   
    <div className="card text-">
        <div className="card-body">
            <div className="card-title">
                <h1>Register</h1>
            </div>
            <form action=""  onSubmit={e=>onSubmit(e)}>
                <input type="text" name="name" placeholder="name" value={name} onChange={onChange}/> <br/>
                <input className="email" type="email" name="email" value={email} placeholder="email" onChange={onChange} /> <br/>
                <input type="password" name="password" placeholder="password" value={password} onChange={onChange} /> <br/>
                <input type="password" name="password2" placeholder="Confirm password" value={password2} onChange={onChange} /> <br/>
                <br/>
                <input type="submit" value="submit" placeholder="login" className="btn btn-primary"/>
            </form>
        </div>
        </div>
    </div>);
   
    return registerForm;
}

const mapStateToProps = state =>{
    return{
        isAuthenticated:state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps,{register})(Register);