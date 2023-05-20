import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">others</div>
      </div>
    </div>
  );
}

export default App;
