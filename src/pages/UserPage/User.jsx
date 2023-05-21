import "./user.css";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">edit user</h1>
        <button className="userAddButton">Create</button>
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
          </div>
        </div>
        <div className="userUpdate">Developer</div>
      </div>
    </div>
  );
};

export default User;
