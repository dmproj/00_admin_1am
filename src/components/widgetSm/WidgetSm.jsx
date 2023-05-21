import { Visibility } from "@mui/icons-material";
import "./widgetSm.css";

const WidgetSm = () => {
  return (
    <div className="widgetsSm">
      <span className="widgetSmTitle">new member</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://images.freeimages.com/images/large-previews/e56/run-away-1555225.jpg" alt="" className="widgetSmImage"/>
          <div className="widgetSmUser">
            <div className="widgetSmUsername">Mikel Groovy</div>
            <div className="widgetSmUserTitle">Developer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/> Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
