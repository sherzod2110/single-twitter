import "../List/List.css";
import { useState } from "react";
import star from "../../assets/Group.svg";
import Profil from "../../assets/Profil.svg";
import Fra from "../../assets/Fra.svg";
import El from "../../assets/El.svg";
import comment from "../../assets/comment.svg";
import Vect from "../../assets/Vect.svg";
import like from "../../assets/likefill.svg";
import Frame21 from "../../assets/Frame21.svg";
import statistics from "../../assets/statistics.svg";
import Ellip from "../../assets/Ellip.svg";
import eeee from "../../assets/eeee.svg";
import meal from "../../assets/meal.png";
import { NavLink } from "react-router-dom";

const List = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="scrool" style={{ width: "849px" }}>
        <div>
          <div className="d-flex justify-content-between p-3 align-items-center border-bottom border-2">
            <p className="home">Home</p>
            <div>
              <img className="me-3" src={star} alt="" />
              <NavLink to="/">
                <button className="logut mt-2">Logout</button>
              </NavLink>
            </div>
          </div>

          <div className="border-bottom border-2 p-3">
            <div className="d-flex align-items-center gap-3">
              <img src={Profil} alt="" />
              <p className="text-home">What’s happening</p>
            </div>

            <div
              className="d-flex justify-content-between mt-3 align-items-center"
              style={{ paddingLeft: "76px" }}
            >
              <img src={Fra} alt="" />
              <div>
                <button className="home-btn">Tweet</button>
              </div>
            </div>
          </div>

          <div className="border-bottom border-2 p-3">
            <div className="d-flex align-items-center gap-3">
              <img src={El} alt="" />
              <div>
                <p className="d-flex align-items-center gap-2 m-0">
                  <p className="home-name">Designsta</p>
                  <span className="spn-link">@inner · 25m</span>
                </p>
                <p className="text-text m-0">
                  Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar
                  zerikmadinglarmi?
                </p>
              </div>
            </div>
            <ul className="list-unstyled d-flex justify-content-between mt-4 ps-2 mb-0 qwerty">
              <li className="d-flex align-items-center gap-1">
                <img src={comment} alt="" />
                <p className="m-0">10</p>
              </li>
              <li className="d-flex align-items-center gap-1">
                <img src={Vect} alt="" />
                <p className="m-0">1</p>
              </li>
              <li className="d-flex like align-items-center gap-1">
                <button
                  className="btn-ww border-0 bg-transparent d-flex align-items-center gap-1"
                  onClick={() => setCount((count) => count + 1)}
                >
                  <img className="like1" src={like} alt="" />
                  {count}
                </button>
              </li>
              <li className="d-flex align-items-center gap-1">
                <img src={Frame21} alt="" />
              </li>
              <li className="d-flex align-items-center gap-1">
                <img src={statistics} alt="" />
              </li>
            </ul>
          </div>

          <div className="border-bottom border-2 p-3">
            <div className="d-flex align-items-center gap-3">
              <img src={Ellip} alt="" />
              <div>
                <p className="d-flex align-items-center gap-2 m-0">
                  <p className="home-name">cloutexhibition</p>
                  <span className="spn-link">@RajLahoti · 22m</span>
                </p>
                <p className="text-text m-0">
                  YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda.
                  Mentorlik davomida talaba va yangi bitiruvchilarni
                  o’sayotganini ko’rib hursand bo’ladi odam.
                </p>
              </div>
            </div>
            <ul className="list-unstyled d-flex justify-content-between mt-4 ps-2 mb-0 qwerty">
              <li className="d-flex align-items-center gap-1">
                <img src={comment} alt="" />
                <p className="m-0">10</p>
              </li>
              <li className="d-flex align-items-center gap-1">
                <img src={Vect} alt="" />
                <p className="m-0">1</p>
              </li>
              <li className="d-flex like align-items-center gap-1">
                <button
                  className="btn-ww border-0 bg-transparent d-flex align-items-center gap-1"
                  onClick={() => setCount((count) => count + 1)}
                >
                  <img className="like1" src={like} alt="" />
                  {count}
                </button>
              </li>
              <li className="d-flex align-items-center gap-1">
                <img src={Frame21} alt="" />
              </li>
              <li className="d-flex align-items-center gap-1">
                <img src={statistics} alt="" />
              </li>
            </ul>
          </div>

          <div className="border-bottom border-2 p-3">
            <div className="d-flex align-items-center gap-3">
              <img src={eeee} alt="" />
              <div>
                <p className="d-flex align-items-center gap-2 m-0">
                  <p className="home-name">CreativePhoto</p>
                  <span className="spn-link">@cloutexhibition · 1h</span>
                </p>
                <p className="text-text m-0">Обетда.....</p>
                <p className="text-text m-0">Кечиринглар</p>
              </div>
            </div>
            <img className="ms-5 ps-4 mt-2" src={meal} alt="" />
            <ul className="list-unstyled d-flex justify-content-between mx-auto ps-2 mb-0 qwerty">
              <li className="d-flex align-items-center gap-1">
                <img src={comment} alt="" />
                <p className="m-0">10</p>
              </li>
              <li className="d-flex align-items-center gap-1">
                <img src={Vect} alt="" />
                <p className="m-0">1</p>
              </li>
              <li className="d-flex like align-items-center gap-1">
                <button
                  className="btn-ww border-0 bg-transparent d-flex align-items-center gap-1"
                  onClick={() => setCount((count) => count + 1)}
                >
                  <img className="like1" src={like} alt="" />
                  {count}
                </button>
              </li>
              <li className="d-flex align-items-center gap-1">
                <img src={Frame21} alt="" />
              </li>
              <li className="d-flex align-items-center gap-1">
                <img src={statistics} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
