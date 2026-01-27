import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

function Proyect(props) {
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="proyect"
    >
      <div>
        <h3>{props.title}</h3>
        <img src={props.img} />
        <h6>{props.description1}</h6>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsShowMore(!isShowMore);
          }}
        >
          {isShowMore ? (
            <SlArrowUp className="icon" />
          ) : (
            <SlArrowDown className="icon" />
          )}
          <h6 className="text">{isShowMore ? "See less" : "More details"}</h6>
        </button>
        {isShowMore && (
          <h6 className={`description ${isShowMore ? "show" : "hide"}`}>
            {props.description2}
          </h6>
        )}
      </div>
    </a>
  );
}

export default Proyect;
