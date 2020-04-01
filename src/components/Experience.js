import React from "react";
import "../stylesheets/Experience.css";

class Experience extends React.Component {
  listDescription(lists) {
    const len = [...Array(lists.length).keys()];
    const items = len.map((i) => (
      <li className="experience-points" key={i}>
        {" "}
        {lists[i]}{" "}
      </li>
    ));
    return <ul className="text-left">{items}</ul>;
  }

  render() {
    return (
      <section className="d-flex align-items-start flex-column">
        <h4 className="experience-subheading mb-1">{this.props.place} </h4>
        <div className="experience-title">{this.props.title}</div>
        <div className="experience-date">{this.props.date} </div>
        {this.listDescription(this.props.description)}
      </section>
    );
  }
}

export default Experience;
