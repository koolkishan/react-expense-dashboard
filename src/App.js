import DashboardApp from "./components/DashboardApp";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <DashboardApp />
      </div>
      <div className="shapes__one"></div>
      <div className="shapes__two"></div>
      <div className="shapes__three"></div>
    </>
  );
}

export default App;
