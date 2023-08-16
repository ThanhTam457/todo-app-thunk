import React from "react";
import {Form, Button} from "react-bootstrap";
import { useState } from "react";
// import {useAppDispatch, useAppSelector} from "../redux/store.ts"; 
import db from "../database/db.config";

const SignIn_Form = () => {
    const getCurrentUser = async function() {
        const currentUser = await db.userDatabase.where({email: s_email}).first();
        if (currentUser !== null && currentUser!== undefined){
            if(currentUser.password === password){
                console.log('success');
                window.location.href = 'Dashboard';
                sessionStorage.setItem("userId", currentUser.id);
            }else{
                console.log('failled');
                alert("Wrong email or password. Please try again!!")
            }
        }else {
            console.log('failled');
            alert("No account match the email")
        }
        console.log(currentUser);
    }

    const [s_email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = () =>{
        getCurrentUser();
    }


    return ( 
        <Form style={{padding: "0px 350px"}}> 
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingEmail" placeholder="nguyentruongthanhtam.9a1@gmail.com" value={s_email} onChange={(e)=>setEmail(e.target.value)}/>
                <label for="floatingPassword">Enter your email</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <label for="floatingPassword">Enter your password</label>
            </div>
            <h4 className="mb-3"><a style={{textDecoration: "none", color: "#F700C4"}} href='SignUp'>Forget Password?</a></h4>
            <Button style={{backgroundColor: "#F700C4", height: "70px", width: "250px", textDecoration: "bold", fontSize: "25px"}} onClick={handleSignIn}>SignIn</Button>
        </Form>
     );
}
 
export default SignIn_Form;