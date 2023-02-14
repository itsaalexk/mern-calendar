export const registerValidate =(registerName,setErrorNameRegister,registerEmail,setErrorEmailRegister,registerPassword,setErrorPassRegister,registerPasswordConfirm,setErrorPassRegister2)=>{
    if(registerName.length < 2){
        setErrorNameRegister(true)
        setTimeout(()=>setErrorNameRegister(false),2000)
    }
    else if(!registerEmail.includes('@')){
        setErrorEmailRegister(true)
        setTimeout(()=>setErrorEmailRegister(false),2000)
    }
    else if(registerEmail.length < 3){
        setErrorEmailRegister(true)
        setTimeout(()=>setErrorEmailRegister(false),2000)
    }
    else if(registerPassword.length < 8){
        setErrorPassRegister(true)
        setTimeout(()=>setErrorPassRegister(false),2000)
    }
    else if(registerPasswordConfirm !== registerPassword){
        setErrorPassRegister2(true)
        setTimeout(()=>setErrorPassRegister2(false),2000)
    }
}