import React from "react";

export const Spinner = () => (
  <div className="d-flex justify-content-center">
    <div className="spinner-border text-warning" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);
