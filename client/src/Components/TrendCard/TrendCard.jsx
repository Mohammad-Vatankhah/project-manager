import React from "react";
import "./TrendCard.css";
import { TrendData } from "../../Data/TrendData"
const TrendCard = () => {
  return <div className="TrendCard">
    <h3>Trends For You</h3>
    {TrendData.map((trend) => {
        return (
            <div className="trend">
                <span><b>#{trend.name}</b></span>
                <span>{trend.shares}K shares</span>
            </div>
        )
    })}
  </div>;
};

export default TrendCard;
