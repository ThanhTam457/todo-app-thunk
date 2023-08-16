import React from "react";
import {Form, Button} from "react-bootstrap";
import {nanoid} from '@reduxjs/toolkit';
import { useState } from "react";
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {addUser} from '../redux/userSlice.ts'
import { UseSelector } from "react-redux";
// import { persistor } from "../redux/store";
import { db } from "../database/db.config";
import {addUserAsync} from '../redux/thunk';



const SignUp_Form =  () => {
    const dispatch = useAppDispatch();
    

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cf_password, setCf_password] = useState('');
    const initId = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
   
    const onNameChanged = e => setName(e.target.value);
    const onEmailChanged = e => setEmail(e.target.value);
    const onPasswordChanged = e => setPassword(e.target.value);
    const onCf_passwordChanged = e => setCf_password(e.target.value);
    const onClickedChange = () =>{
        if(password !== cf_password){
            alert("Password not matched!");
        }
        else{
            const user = {
                id: initId,
                name: name,
                email: email,
                password: password,
                tasks: []
            };
            // persistor.purge();
            dispatch(addUserAsync(user));
            dispatch(
                addUser({
                    id: initId,
                    name: name,
                    email: email,
                    password: password,
                    tasks:[],
                    count: 0,
                }),
            )
        }
    }
    console.log(useAppSelector((state) => state.user));
    sessionStorage.setItem("userId", initId);

    return ( 
        <Form style={{padding: "0px 350px"}}> 
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingName" placeholder="NguyenTruongThanhTam" value={name} onChange={onNameChanged} />
                <label for="floatingInput">Enter your full name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingEmail" placeholder="nguyentruongthanhtam.9a1@gmail.com" value={email} onChange={onEmailChanged}/>
                <label for="floatingPassword">Enter your email</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="password" value={password} onChange={onPasswordChanged}/>
                <label for="floatingPassword">Enter your password</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingC_Password" placeholder="password" value={cf_password} onChange={onCf_passwordChanged}/>
                <label for="floatingC_Password">Confirm password</label>
            </div>
            <Button style={{backgroundColor: "#F700C4", height: "70px", width: "250px", textDecoration: "bold", fontSize: "25px"}} onClick={onClickedChange} href='Dashboard' >SignUp</Button>
        </Form>
     );
};
 
export default SignUp_Form;