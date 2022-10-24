import React from "react";
import { ComponentType } from "react";

const decorators: ComponentType<any>[] = [
  (Story) => {
    return (
      <>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="true"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400;600;900&display=swap"
        />
        <Story />
      </>
    );
  },
];

export default decorators;
