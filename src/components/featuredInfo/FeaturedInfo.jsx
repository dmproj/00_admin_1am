import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import "./featuredInfo.css";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuedMoney">$9.999</span>
          <span className="featuredMoneyRate">-1.2% <ArrowDownward className="featuredIcon negative"/></span>
        </div>
        <span className="featuredSub">Lorem ipsum dolor sit amet.</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sold</span>
        <div className="featuredMoneyContainer">
          <span className="featuedMoney">$8.999</span>
          <span className="featuredMoneyRate">-1.2% <ArrowDownward className="featuredIcon negative"/></span>
        </div>
        <span className="featuredSub">Lorem ipsum dolor sit amet.</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Price</span>
        <div className="featuredMoneyContainer">
          <span className="featuedMoney">$7.999</span>
          <span className="featuredMoneyRate">-1.2% <ArrowUpward className="featuredIcon"/></span>
        </div>
        <span className="featuredSub">Lorem ipsum dolor sit amet.</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
