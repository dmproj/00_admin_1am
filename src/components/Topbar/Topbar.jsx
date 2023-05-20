import "./topbar.css";
import { Language, NotificationsNone, Settings } from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="logo">LOOGGOOL</div>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <NotificationsNone />
            <span className="topIconBag">3</span>
          </div>
          <div className="topbarIconsContainer">
            <Language />
            <span className="topIconBag">3</span>
          </div>
          <div className="topbarIconsContainer">
            <Settings />
          </div>
          <img  src="https://static9.depositphotos.com/1074452/1184/i/950/depositphotos_11843630-stock-photo-jpg-key-shows-image-format.jpg" alt="" className="topAvatar"/>
        </div>
      </div>

    </div>
    
  );
};

export default Topbar;
