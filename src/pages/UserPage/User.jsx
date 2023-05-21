import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import "./user.css";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">edit user</h1>
        <Link to="/newuser"><button className="userAddButton">Create</button></Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://st3.depositphotos.com/22025564/37708/i/600/depositphotos_377086496-stock-photo-black-woman-lifestyle-illustration-african.jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Kwizer Suzer</span>
              <span className="userShowUserTitle">Developer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">kwizer2000</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">kwizer2000</span>
            </div>
            <div className="userShowContact">Contact Details</div>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">kwizer2000</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">kwizer2000</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">kwizer2000</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label htmlFor="">Username</label>
                <input type="text" className="userUpdateInput" placeholder="kwizer2000" />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Calendar</label>
                <input type="text" className="userUpdateInput" placeholder="kwizer2000" />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Phone</label>
                <input type="text" className="userUpdateInput" placeholder="kwizer2000" />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Email</label>
                <input type="text" className="userUpdateInput" placeholder="kwizer2000" />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Location</label>
                <input type="text" className="userUpdateInput" placeholder="kwizer2000" />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://st3.depositphotos.com/22025564/37708/i/600/depositphotos_377086496-stock-photo-black-woman-lifestyle-illustration-african.jpg"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon"/>
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateBtn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
