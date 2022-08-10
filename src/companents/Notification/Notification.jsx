import star from "../../assets/Group.svg";

const Notification = () => {
  return (
    <>
      <div style={{ width: "849px" }}>
        <div>
          <div className="d-flex justify-content-between p-3 border-bottom border-2">
            <p className="home">Notification</p>
            <img src={star} alt="" />
          </div>

          <p className="home mx-auto mt-5 pt-5" style={{ width: "150px" }}>
            Go to profile
          </p>
        </div>
      </div>
    </>
  );
};

export default Notification;
