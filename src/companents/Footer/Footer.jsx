import "../Footer/Footer.css";
import search from "../../assets/search.svg";
import thirtd from "../../assets/thirtd.svg";
import girl from "../../assets/girl.svg";
import line from "../../assets/line.svg";
import shuhname from "../../assets/shuh-name.svg";
import Group25 from "../../assets/Group25.svg";
import settings from "../../assets/settings.svg";

const Footer = () => {
  return (
    <>
      <div className="p-2 pt-3">
        <div className="position-relative">
          <input
            className="foot-inp ps-5"
            type="search"
            placeholder="Search Twitter"
          />
          <img className="foot-img" src={search} alt="" />
        </div>
        <img className="mx-auto mt-3" src={thirtd} alt="" width={"225px"} />
        <div className="box-foot">
          <p className="text-foot">You might like</p>
          <div className="d-flex justify-content-between align-items-center">
            <img src={girl} alt="" width={"40px"} />
            <div style={{ marginRight: "14px" }}>
              <p className="misha-name">Mushtariy</p>
              <span className="misha-spn">@Mushtar565266</span>
            </div>
            <img className="mb-3" src={line} alt="" />
          </div>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <img src={shuhname} alt="" width={"40px"} />
            <div style={{ marginRight: "40px" }}>
              <p className="misha-name">Shuhratbek</p>
              <span className="misha-spn">@mrshukhrat</span>
            </div>
            <img className="mb-3" src={line} alt="" />
          </div>
        </div>


        <div className="box-foot-2">
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="text-foot-tred m-0">Trends for you</p>
                <img src={settings} alt="" />
              </div>

              <div className="d-flex justify-content-between mt-2">
                <div>
                  <span className="text-spn">Trending in Germany</span>
                  <p className="text-spn-2">Revolution</p>
                  <span className="text-4">50.4K Tweets</span>
                </div>
                <img className="mb-4" src={line} alt="" />
              </div>
              <div className="d-flex justify-content-between mt-2">
                <div>
                  <span className="text-spn">Trending in Germany</span>
                  <p className="text-spn-2">Revolution</p>
                  <span className="text-4">50.4K Tweets</span>
                </div>
                <img className="mb-4" src={line} alt="" />
              </div>
              <a className="link-" href="">Show more</a>
            </div>
        </div>
          {/* <img className="mt-4 mx-auto" src={Group25} alt="" width={"225px"} height={"auto"}/> */}
      </div>
    </>
  );
};

export default Footer;
