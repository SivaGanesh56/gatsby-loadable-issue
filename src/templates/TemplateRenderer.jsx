import React from "react";

import loadable from "@loadable/component";

const TemplateA = loadable(() => import("./TemplateA"));
const TemplateB = loadable(() => import("./TemplateB"));
const TemplateC = loadable(() => import("./TemplateC"));

// import TemplateA from "./TemplateA";
// import TemplateB from "./TemplateB";
// import TemplateC from "./TemplateC";

const templatesMap = {
  a: TemplateA,
  b: TemplateB,
  c: TemplateC,
};

const TemplateRenderer = ({ templates }) => {
  return (
    <div>
      {templates.map((template, idx) => {
        const Template = templatesMap[template] ?? null;

        if (!Template) return null;

        return <Template key={idx} />;
      })}
    </div>
  );
};

export default TemplateRenderer;
