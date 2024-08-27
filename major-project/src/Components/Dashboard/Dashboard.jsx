import React from "react";
import "./Dashboard.css";
import analysis from "../../assets/analysis.png";

const Dashboard = () => {
    return (
        <section id="dashboard">
        <div className="dashboard">
            <img src={analysis} alt="" />
        </div>
        </section>
    );
};

export default Dashboard;
