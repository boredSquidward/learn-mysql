import React from "react";

const Name = () => {
  return (
    <input
      type="text"
      name="name"
      placeholder="Name"
      style={{ width: "100%" }}
      maxLength={50}
      required
    />
  );
};

export default Name;
