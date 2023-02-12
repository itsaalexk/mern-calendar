import { useDispatch, useSelector } from "react-redux"

export const useAuhStore =()=>{
   const dispatch = useDispatch()
   const {status , user, errorMessage} = useSelector(state => state.auth)

    const startLogin =async({email,password})=>{

    }

    return {
       status , user ,errorMessage
    }
}