import React, { useState } from "react";

function Proyect(props) {
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-linear-to-br from-green-400 to-blue-600 rounded-xl h-fit"
    >
      <div className="text-start flex flex-col gap-3 bg-gray-950 rounded-xl transition-all duration-200 hover:scale-[0.97] p-4">
        <h3>{props.title}</h3>
        <img src={props.img} />
        <h6>{props.description1}</h6>
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsShowMore(!isShowMore);
          }}
        >
          <h6 className="text">{isShowMore ? "See less" : "More details"}</h6>
        </button>
        {isShowMore && <h6>{props.description2}</h6>}
      </div>
    </a>
  );
}

export default Proyect;
