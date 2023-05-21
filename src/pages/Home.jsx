import Chart from "../components/chart/Chart";
import FeaturedInfo from "../components/featuredInfo/FeaturedInfo";
import WidgetSm from "../components/widgetSm/WidgetSm";
import WidgetsLg from "../components/widgetsLg/WidgetsLg";
import { userData } from "../dummyData";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="analytics" grid dataKey="Current User" />
      <div className="homeWidgets">
      <WidgetSm />
      <WidgetsLg />
      </div>
    </div>
  );
};

export default Home;
