import "./user.css";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">edit user</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">Stan Paul</div>
        <div className="userUpdate">Developer</div>
      </div>
    </div>
  );
};

export default User;
