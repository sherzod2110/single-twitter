import "./App.css";
import Header from "./companents/Header/Header";
import Main from "./companents/Main/Main";
import Footer from "./companents/Footer/Footer";
import List from "./companents/List/List";
import Explore from "./companents/Explore/Explore";
import Notification from "./companents/Notification/Notification";
import Messages from "./companents/Messages/Messages";
import Bookmarks from "./companents/Bookmarks/Bookmarks";
import Lists from "./companents/Lists/Lists";
import More from "./companents/More/More";
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
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/more" element={<More />} />
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
