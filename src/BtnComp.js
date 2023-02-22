import React from "react";

export const BtnComp = ({ label, cls, setRealTimeDisplay }) => {
  return (
    <div class={cls} onClick={() => setRealTimeDisplay(label)}>
      {label}
    </div>
  );
};
