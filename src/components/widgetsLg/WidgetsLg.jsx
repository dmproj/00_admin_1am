import "./widgetsLg.css";

const WidgetsLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetsLg">
      <h3 className="widgetLgTitle">registered transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.freeimages.com/images/large-previews/e56/run-away-1555225.jpg"
              alt=""
              className="widgetLgImage"
            />
            <span className="widgetLgName">Veronica Bree</span>
          </td>
          <td className="widgetLgdate">1 jan 2023</td>
          <td className="widhgetLgAmount">$333.99</td>
          <td className="widgetLgStatus"><Button type="Approved" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.freeimages.com/images/large-previews/e56/run-away-1555225.jpg"
              alt=""
              className="widgetLgImage"
            />
            <span className="widgetLgName">Veronica Bree</span>
          </td>
          <td className="widgetLgdate">1 jan 2023</td>
          <td className="widhgetLgAmount">$333.99</td>
          <td className="widgetLgStatus"><Button type="Declined" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
          <img
              src="https://images.freeimages.com/images/large-previews/e56/run-away-1555225.jpg"
              alt=""
              className="widgetLgImage"
            />
            <span className="widgetLgName">Veronica Bree</span>
          </td>
          <td className="widgetLgdate">1 jan 2023</td>
          <td className="widhgetLgAmount">$333.99</td>
          <td className="widgetLgStatus"><Button type="Pending" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
          <img
              src="https://images.freeimages.com/images/large-previews/e56/run-away-1555225.jpg"
              alt=""
              className="widgetLgImage"
            />
            <span className="widgetLgName">Veronica Bree</span>
          </td>
          <td className="widgetLgdate">1 jan 2023</td>
          <td className="widhgetLgAmount">$333.99</td>
          <td className="widgetLgStatus"><Button type="Approved" /></td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetsLg;
