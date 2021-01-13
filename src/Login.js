import { Button,Input } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import './login.css';
import {auth,provider} from './firebase';
import { useStateValue } from './StateProvider';
import {actionTypes} from './reducer';
// import Modal from '@material-ui/core/Modal';
// import { makeStyles } from '@material-ui/core/styles';

//styling of modal
/*
function getModalStyle(){
    const top=50;
    const left=50;
  
    return{
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  
  const useStyles=makeStyles((theme)=>({
    paper:{
      position:'absolute',
      width:300,
      objectFit:'contain',
      backgroundColor:theme.palette.background.paper,
      border:'2px solid lightgray',
      boxShadow:theme.shadows[5],
      padding:theme.spacing(5,8,6),
    },
  }));
  */
  

function Login(){
    const [state,dispatch]=useStateValue();

   /* const [open,setOpen]=useState(false);
    const [openSignIn,setOpenSignIn]=useState(false);
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const [user,setUser]=useState(null);
    const classes=useStyles();
    const [modalStyle]=React.useState(getModalStyle);

    useEffect(()=>{
    
        const unsubscribe=auth.onAuthStateChanged((authUser)=>{
            if(authUser){
                //for handle login of a user
                console.log(authUser);
                setUser(authUser);
            }else{
                setUser(null)
            }
        })
        return()=>{
            unsubscribe();
        }
 
    },[user,username]);

//simple signup
    const signUp=(e)=>{
        e.preventDefault();
    
        auth.createUserWithEmailAndPassword(email,password)
        .then((authUser)=>{
           return authUser.user.updateProfile({
            displayName:username,
          })
        })
        .catch((error)=>alert(error.message));
    
        setPassword('');
        setEmail('');
      }
   //simple login
   const logIn=(e)=>{
    e.preventDefault();

    auth.signInWithEmailAndPassword(email,password)
        .catch((error)=>alert(error.message))

    setOpenSignIn(false); 
    setPassword('');
    setEmail('');   

  }
*/
    //google signup
    const signIn=()=>{
       auth.signInWithPopup(provider)
       .then((result)=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
          

        }).catch((error)=>alert(error.message));
        
    }
    return(
        <div className="login">
            {/* modal for sign up */}
        
        {/* <Modal open={open} onClose={()=>setOpen(false)}>
          <div style={modalStyle} className={classes.paper}>
            <form className="app__signup">
                <center>
                   <img
                   className="login__headerImage"
                    src="http://www.socialmediaexplorer.com/wp-content/uploads/2013/03/facebook-logo-reversed.png"
                   alt=""
                    />
                </center>
                    <Input 
                       placeholder="Username"
                       type="text"
                       value={username}
                       onChange={(e)=>setUsername(e.target.value)}
                    />
                    <Input 
                       placeholder="Email"
                       type="text"
                       value={email}
                       onChange={(e)=>setEmail(e.target.value)}
                    />
                    <Input
                         placeholder="Password"
                         type="password"
                         value={password}
                         onChange={(e)=>setPassword(e.target.value)}
                    />
                    <Button type="submit" onClick={signUp}><p style={{color:"black"}}>Sign Up</p></Button>
                </form>   
           </div>

        </Modal>
        

        <Modal open={openSignIn} onClose={()=>setOpenSignIn(false)}>
          <div style={modalStyle} className={classes.paper}>
            <form className="app__signup">
                <center>
                   <img
                   className="login__headerImage"
                    src="http://www.socialmediaexplorer.com/wp-content/uploads/2013/03/facebook-logo-reversed.png"
                   alt=""
                    />
                </center>
                    
                    <Input 
                       placeholder="Email"
                       type="text"
                       value={email}
                       onChange={(e)=>setEmail(e.target.value)}
                    />
                    <Input
                         placeholder="Password"
                         type="password"
                         value={password}
                         onChange={(e)=>setPassword(e.target.value)}
                    />
                    <Button  type="submit" onClick={logIn}><p style={{color:"black"}}>Sign In</p></Button>
                </form>   
           </div>

        </Modal> */}

            <div className="login__logo">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                  alt=""
                />
                <img 
                  src="http://www.socialmediaexplorer.com/wp-content/uploads/2013/03/facebook-logo-reversed.png"
                  alt=""
                />
            </div>
            {/* <div className="app__loginContainer">
               <button className="app__button" onClick={()=>setOpenSignIn(true)}>Sign In</button>
               <button className="app__button" onClick={()=>setOpen(true)}>Sign Up</button>
            </div> */}
            <Button type="submit" onClick={signIn}>
                Sign-in with Google
           </Button>            
        </div>
    )

}
export default Login;



