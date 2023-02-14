import {Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';



export const AppRouter = () => {

    const authStatus = 'not-authenticated'; // 'authenticated'; // 'not-authenticated';


    return (
        <Routes>
            {
                ( authStatus === 'not-authenticated')  
                    ? <Route path="/auth/*" element={ <LoginPage /> } />
                    : <Route path="/" element={ <CalendarPage /> } />
            }

<<<<<<< HEAD
            <Route path="/*" element={ <Navigate to='/auth/login' />} /> 
            
            
=======
            {/*<Route path="/*" element={ <Navigate to={<ErrorPage />} /> } />*/}
            
           
            <Route path="/*" element={<Navigate to='/auth/login' />}/>
>>>>>>> dac188954dc486794587014689074436a0d97120
        </Routes>
    )
}
