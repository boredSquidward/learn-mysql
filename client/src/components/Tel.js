import React from "react";

const Tel = () => {
  return (
    <input
      maxLength={10}
      placeholder="Tel"
      type="tel"
      style={{ width: "100%", margin: "5px 0" }}
      required
    />
  );
};

export default Tel;
