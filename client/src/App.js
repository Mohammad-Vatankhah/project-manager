import "./App.css";
import CreateProject from "./Pages/CreateProject/CreateProject";
import Home from "./Pages/Home/Home";
import { UserProfile } from "./Pages/UserProfile/UserProfile";
function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      {/* <Home /> */}
      <UserProfile />
    </div>
  );
}

export default App;
