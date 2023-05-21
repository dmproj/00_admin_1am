import "./newuser.css";

const NewUser = () => {
  return (
    <div className="newuser">
      <h1 className="newUserTitle">New user</h1>
      <form action="" className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="">username</label>
          <input type="text" placeholder="Mickel" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">username</label>
          <input type="text" placeholder="Mickel@gmail.com" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">username</label>
          <input type="text" placeholder="address 11 Street E" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">username</label>
          <input type="pasword" placeholder="password" />
        </div>
        <div className="newUserGender">
          <label for="male">Male</label>
          <input type="radio" placeholder="male" id="male" />
          <label for="female">Female</label>
          <input type="radio" placeholder="female" id="female" />
          <label for="other"> Other</label>
          <input type="radio" id="other" placeholder="other" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
