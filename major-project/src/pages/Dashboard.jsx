import React from "react";
import "./Dashboard.css";
import analysis from "../assets/analysis.png";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <img src={analysis} alt="" />
        </div>
    );
};

export default Dashboard;
