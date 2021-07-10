import "./featuredInfo.css";
import { ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Today Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">D122,415, 443</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Orders</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">233</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Successful Deliveries</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">102</span>
          <span className="featuredMoneyRate">
            +2.4% <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
