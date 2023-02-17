import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";
import { useAuthStore } from "../hooks";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return (
      <div
        style={{
          display: "grid",
          placeItems: "center",
          backgroundColor: "teal",
          height: "100vh",
        }}>
        <PropagateLoader size={30} color='white' />;
      </div>
    );
  }

  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          <Route path='/auth/*' element={<LoginPage />} />
          <Route path='/*' element={<Navigate to='/auth/login' />} />
        </>
      ) : (
        <>
          <Route path='/' element={<CalendarPage />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </>
      )}
    </Routes>
  );
};
