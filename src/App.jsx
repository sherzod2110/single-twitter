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
import Login from "./companents/Login/Login";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const { pathname } = useLocation();
  console.log(pathname);

  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  const user = {
    username: "sherzod",
    password: "007700",
  };

  const useAuth = (params) => {
    return user.username === params.userName &&
      user.password === params.password
      ? navigate("/main")
      : navigate("/");
  };

  return (
    <>
      <div className="container d-flex">
        {pathname === "/" ? (
          ""
        ) : (
          <div
            style={{
              width: "250px",
              height: "100vh",
              borderRight: "2px solid #E5E5E5",
            }}
          >
            <Header />
          </div>
        )}

        {pathname === "/" ? (
          <Login isLogin={auth} login={useAuth}/>
        ) : (
          <div style={{ width: "849px", borderRight: "2px solid #E5E5E5" }}>
            <Routes>
              <Route path="/main" element={<Main />} />
              <Route path="/list" element={<List />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/lists" element={<Lists />} />
              <Route path="/more" element={<More />} />
              <Route
                path="/"
                element={<Login isLogin={auth} login={useAuth} />}
              />
            </Routes>
          </div>
        )}

        {pathname === "/" ? (
          ""
        ) : (
          <div className="border" style={{ width: "300px" }}>
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
