import "./App.css";
import Header from "./companents/Header/Header";
import Main from "./companents/Main/Main";
import Footer from "./companents/Footer/Footer";
import List from "./companents/List/List";
import Explore from "./companents/Explore/Explore";
import Notification from "./companents/Notification/Notification";
import Messages from "./companents/Messages/Messages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container d-flex">
        <div
          style={{
            width: "250px",
            height: "100vh",
            borderRight: "2px solid #E5E5E5",
          }}
        >
          <Header />
        </div>

        <div style={{ width: "849px", borderRight: "2px solid #E5E5E5" }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/list" element={<List />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </div>

        <div className="border" style={{ width: "300px" }}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
