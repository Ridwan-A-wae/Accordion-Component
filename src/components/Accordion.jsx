import React, { useState } from "react";
import "./accordion.css";
import data from "../data";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

function Accordion() {
  const [selected, setSelected] = useState(null);

  const handleClick = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  console.log(selected);
  return (
    <div className="container">
      <div className="head">
        <h1 className="hTitle">Frequently Asked Questions</h1>
        <div className="hInfo">
          <span className="info">Answers to common questions about</span>
          <br />
          <span className="info">our fronted challenges website</span>
        </div>
      </div>
      <div className="accordion">
        {data.map((item, i) => (
          <div key={i} className={`item${i}`}>
            <div onClick={() => handleClick(i)} className={`title${i}`}>
              <h2>{item.title} </h2>
              <span className="icons" >{selected == i ? <AiOutlineClose/> : <AiOutlinePlus/>}</span>
            </div>
            <div className={selected == i ? "content show" : "content"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
