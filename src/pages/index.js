import React from "react";
import TemplateRenderer from "../templates/TemplateRenderer";

const index = () => {
  return (
    <div>
      <h1>Gatsby POC</h1>
      <TemplateRenderer templates={["a", "c"]} />
    </div>
  );
};

export default index;
