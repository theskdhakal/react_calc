import React from "react";

export const BtnComp = ({ label, cls, setRealTimeDisplay }) => {
  return (
    <div
      class={cls}
      onClick={() => (cls === "display" ? null : setRealTimeDisplay(label))}
    >
      {label}
    </div>
  );
};
