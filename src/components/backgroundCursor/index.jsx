import dynamic from "next/dynamic";
import React from "react";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function BackgroundCursor() {
  return (
    <AnimatedCursor
      innerSize={30}
      outerSize={30}
      color="255,255,255"
      outerAlpha={0.5}
      innerScale={1}
      outerScale={3}
    />
  );
}
