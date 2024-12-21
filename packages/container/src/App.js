import React from "react";

import MarketingApp from "./components/MarketingApp";

export default () => {
  console.log("inside the container!");

  return (
    <>
      <h1>Hi there!</h1>
      <MarketingApp />
    </>
  );
};
