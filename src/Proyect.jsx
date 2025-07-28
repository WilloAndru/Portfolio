import React, { useState } from 'react'
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

function Proyect(props) {
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <a href={props.href} className='proyect'>
      <div>
        <h3>{props.title}</h3>
        <img src={props.img} />
        <h5>{props.description1}</h5>
        <button onClick={() => setIsShowMore(!isShowMore)}>
          {isShowMore ? <SlArrowUp className='icon' /> : <SlArrowDown className='icon'/>}
          <h5 className="text">{isShowMore ? "Ver menos": "Más detalles"}</h5>
        </button>
        {isShowMore && <h5 className={`description ${isShowMore ? "show" : "hide"}`}>{props.description2}</h5>}
      </div>
    </a>
  )
}

export default Proyect