import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-[10px] border-[1px] border-mercury hover:shadow-lg bg-white ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
