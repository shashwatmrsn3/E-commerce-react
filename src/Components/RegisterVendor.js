import React,{useState} from 'react';
import {connect} from 'react-redux';
import {registerVendor} from '../Actions/RegisterVendor';
import {useHistory} from 'react-router';

const RegisterVendor = ({registerVendor}) => {
    const history = useHistory();
    const[formData,setFormData]=useState({
        name:'',
        email:'',
        about:''
    })

    const {name,email,about} = formData;

    const onChange = e => {
        e.preventDefault();
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const onSubmit = e =>{
        e.preventDefault();
        registerVendor(formData,history);

    }

    const registerForm = (<div className="card text-">
    <div className="card-body">
        <div className="card-title">
            <h1>Register</h1>
        </div>
        <form action=""  onSubmit={e=>onSubmit(e)}>
            <input type="text" name="name" placeholder="name" value={name} onChange={onChange}/> <br/>
            <input className="email" type="email" name="email" value={email} placeholder="email" onChange={onChange} /> <br/>
            <input type="text" name="about" placeholder="about" value={about} onChange={onChange} /> <br/>
            
            <input type="submit" value="submit" placeholder="login" className="btn btn-primary"/>
        </form>
    </div>
    </div>);

    return registerForm;


}

export default connect(null,{registerVendor})(RegisterVendor);

