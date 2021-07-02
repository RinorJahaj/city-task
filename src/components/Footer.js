import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="container">
        <p>Eduwo Tasks &copy; {date}</p>
      </div>
    </div>
  );
};

export default Footer;
