



export const loginValidate =(loginEmail,loginPassword,setErrorEmailLogin,setErrorPasswordLogin)=>{
    
    if (!loginEmail.includes('@')){
        setErrorEmailLogin(true)
        setTimeout(()=>setErrorEmailLogin(false),2000)
    }
    else if(loginEmail.length < 2){
        setErrorEmailLogin(true)
        setTimeout(()=>setErrorEmailLogin(false),2000)
    }
    else if(loginPassword.length < 8){
        setErrorPasswordLogin(true)
        setTimeout(()=>setErrorPasswordLogin(false),2000)
    }
    else{
        
        
    }
}