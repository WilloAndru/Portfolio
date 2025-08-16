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
        <h5>{props.description1}</h5>
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
          <h5 className="text">{isShowMore ? "See less" : "More details"}</h5>
        </button>
        {isShowMore && (
          <h5 className={`description ${isShowMore ? "show" : "hide"}`}>
            {props.description2}
          </h5>
        )}
      </div>
    </a>
  );
}

export default Proyect;
