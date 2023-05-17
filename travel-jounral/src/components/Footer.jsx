import React from "react";

export default function Footer() {
  const date = new Date();
  const getYear = date.getFullYear();
  return (
    <footer className="footer">
      <p>
        <small>Copyright &copy; {getYear}. All right Reserved</small>
      </p>
    </footer>
  );
}
