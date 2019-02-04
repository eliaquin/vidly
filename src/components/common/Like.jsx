import React from "react";
const Like = ({ liked, onClick }) => {
  const nameOfClass = liked ? "fas fa-heart" : "far fa-heart";
  return (
    <i
      className={nameOfClass}
      style={{ cursor: "pointer" }}
      onClick={() => onClick()}
    />
  );
};
export default Like;
