import React from "react";
import "../stylesheets/Degree.css";

function Degree(props) {
  return (
    <section className="d-flex align-items-start flex-column">
      <h4 className="degree-subheading mb-1">{props.school} </h4>
      <div className="degree-date">{props.date} </div>
      <div className="degree-degree">{props.degree}</div>
    </section>
  );
}
export default Degree;
