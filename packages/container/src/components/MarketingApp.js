import { mount } from "marketing/MarketingApp";
import React, { useEffect, useRef } from "react";

export default () => {
  const marketingRef = useRef();

  useEffect(() => {
    mount(marketingRef.current);
  });

  return <div ref={marketingRef}></div>;
};
