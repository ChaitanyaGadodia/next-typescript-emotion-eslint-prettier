import * as React from "react";
import { css, Global } from "@emotion/react";

const Index = () => {
  return (
    <>
      <Global
        styles={css`
          code {
            color: voilet;
          }
        `}
      />
      <h1 css={css({ color: "blue" })}>Hello World</h1>
      <code>Next.js Emotion Eslint Prettier Template</code>
    </>
  );
};

export default Index;
