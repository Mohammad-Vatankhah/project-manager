import "./App.css";
import { Auth } from "./Pages/Auth/Auth";
import { Home } from "./Pages/Home/Home";
import { CreateProject } from "./Pages/CreateProject/CreateProject";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserProfile } from "./Pages/UserProfile/UserProfile";
function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div className="App">
      ّ<div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
        <Route
          path="/createProject/:id"
          element={user ? <CreateProject /> : <Navigate to="../auth" />}
        />
        <Route
          path="/profile/:id"
          element={user ? <UserProfile /> : <Navigate to="../auth/" />}
        />
      </Routes>
    </div>
  );
}

export default App;
