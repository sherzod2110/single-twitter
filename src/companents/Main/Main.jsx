import "../Main/Main.css";
import { useState } from "react";
import label from "../../assets/Arrow.svg";
import Rectangle from "../../assets/Rectangle.png";
import bobur from "../../assets/bobur.png";
import frame from "../../assets/Frame.svg";
import fram from "../../assets/Fram.svg";
import frame1 from "../../assets/Frame1.svg";
import frame2 from "../../assets/Frame2.svg";
import Ellips from "../../assets/Ellips.svg";
import Vecto from "../../assets/Vecto.svg";
import comment from "../../assets/comment.svg";
import Vect from "../../assets/Vect.svg";
import like from "../../assets/likefill.svg";
import Frame21 from "../../assets/Frame21.svg";
import statistics from "../../assets/statistics.svg";
import image8 from "../../assets/image8.png";
import { NavLink } from "react-router-dom";

const Main = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="scrool">
        <div>
          <div className="d-flex align-items-center justify-content-between gap-4 p-2 ps-4">
            <div className="d-flex align-items-center gap-4">
              <img src={label} alt="" />
              <div>
                <p className="main-text">Bobur</p>
                <span className="main-spn">1,070 Tweets</span>
              </div>
            </div>
            <div>
              <NavLink to="/">
                <button className="logut mt-2">Logout</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div>
          <div className="position-relative">
            <img src={Rectangle} alt="" width={849} height={"auto"} />
            <div className="d-flex justify-content-between">
              <img className="position-absolute img-bobur" src={bobur} alt="" />
              <div className="ms-auto me-4 mt-3">
                <button className="hero-btn">Edit profile</button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 pb-0  border-bottom border-2">
          <div>
            <p className="horo-text-name">Bobur</p>
            <a
              className="hero-link"
              href="https://t.me/boburjon_mavlonov"
              target={"_blank"}
            >
              @bobur_mavlonov
            </a>
            <p className="hero-text-link">
              UX&UI designer at{" "}
              <a className="link" href="https://abutech.uz/" target={"_blank"}>
                @abutechuz
              </a>
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-1">
              <img src={frame} alt="" />
              <p className="frame">Mashag’daman</p>
            </div>
            <div className="d-flex align-items-center gap-1">
              <img src={fram} alt="" />
              <p className="m-0">
                <a
                  className="frame2"
                  href="https://t.me/boburjon_mavlonov"
                  target={"_blank"}
                >
                  t.me/boburjon_mavlonov
                </a>
              </p>
            </div>
            <div className="d-flex align-items-center gap-1">
              <img src={frame1} alt="" />
              <p className="frame">Born November 24, 2000</p>
            </div>
            <div className="d-flex align-items-center gap-1">
              <img src={frame2} alt="" />
              <p className="frame">Joined May 2020</p>
            </div>
          </div>
          <div className="d-flex gap-4 mt-3">
            <p className="text-flow">
              <span className="text-flow-spn">67</span> Following
            </p>
            <p className="text-flow">
              <span className="text-flow-spn">47</span> Followers
            </p>
          </div>
          <ul className="list-unstyled d-flex justify-content-between mx-3 item-list m-0">
            <li className="list-twet-2">Tweets</li>
            <li className="list-twet">Tweets & replies</li>
            <li className="list-twet">Media</li>
            <li className="list-twet">Likes</li>
          </ul>
        </div>
        <div className="p-4 pb-0">
          <div className="d-flex justify-content-between gap-3">
            <img style={{ marginBottom: "30px" }} src={Ellips} alt="" />

            <div>
              <p className="m-0">
                <span className="text-name">Bobur</span>{" "}
                <span className="full-text">@bobur_mavlonov · Apr 1</span>
              </p>
              <p className="m-0 text-bob">
                4-kursni tugatgunimcha kamida bitta biznesim bo'lishini,
                uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni,
                sog'lik va jismoniy holatni normallashtirishni reja qildim
              </p>
            </div>

            <div>
              <img src={Vecto} alt="" />
            </div>
          </div>

          <ul className="list-unstyled d-flex justify-content-between qwerty">
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
        <p className="border-bottom border-2"></p>

        <div className="p-4">
          <div className="d-flex">
            <img style={{ marginBottom: "30px" }} src={Ellips} alt="" />

            <div className="ms-3">
              <p className="m-0">
                <span className="text-name">Bobur</span>{" "}
                <span className="full-text">@bobur_mavlonov · Apr 1</span>
              </p>
              <p className="m-0 text-bob">A bo'pti maskamasman</p>
            </div>

            <div className="ms-auto">
              <img src={Vecto} alt="" />
            </div>
          </div>

          <img
            className="ms-5 ps-4"
            data-aos="fade-right"
            src={image8}
            alt=""
          />

          <ul className="list-unstyled d-flex justify-content-between qwerty mx-auto">
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
    </>
  );
};

export default Main;
