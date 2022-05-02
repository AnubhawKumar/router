import React from "react";
import { Link } from "react-router-dom";

const ErrorFound = () => {
  return (
    <>
      <h1 className="text-danger">404!! Not Found</h1>
      <Link to="/">Back to Home</Link>
    </>
  );
};

export default ErrorFound;
