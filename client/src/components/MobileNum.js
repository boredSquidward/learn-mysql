import React from "react";

const MobileNum = () => {
  return (
    <input
      maxLength={12}
      placeholder="Mobile Number"
      type="tel"
      style={{ width: "100%", margin: "5px 0" }}
      required
    />
  );
};

export default MobileNum;
