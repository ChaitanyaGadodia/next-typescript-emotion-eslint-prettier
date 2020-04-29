import * as React from "react";
import { css, Global } from "@emotion/core";

const Index = () => {
  return (
    <>
      <Global
        styles={css`
          code {
            color: red;
          }
        `}
      />
      <div css={css({ color: "blue" })}>
        Steps involved in creating this template:
      </div>
      <ol>
        <li>
          Create Project Folder:{" "}
          <code>mkdir project-name; cd project-name</code>
        </li>
        <li>
          Initialize package.json: <code>yarn init</code>
        </li>
        <li>
          Add Next.js: <code>yarn add next, react, react-dom</code>
        </li>
        <li>
          Add Typescript:{" "}
          <code>yarn add --dev typescript @types/react @types/node</code>
        </li>
        <li>
          Add Emotion:{" "}
          <code>yarn add @emotion/core @emotion/babel-preset-css-prop</code>
        </li>
        <li>
          Add Eslint & Prettier:{" "}
          <code>
            yarn add --dev @typescript-eslint/eslint-plugin
            @typescript-eslint/parser eslint-plugin-prettier eslint-plugin-react
            prettier
          </code>
        </li>
        <li>
          Setup Eslint: <code>yarn eslint -init</code> (or simply copy the
          .eslintrc.js file)
        </li>
        <li>
          Add pages folder and index.tsx file inside it and add some code to it
        </li>
        <li>
          Add the scripts to your package.json:
          <pre>
            <code>
              {JSON.stringify(
                {
                  scripts: {
                    dev: "next",
                    build: "next build",
                    start: "next start",
                    lint: "eslint --fix './pages/**/*.{ts,tsx}'",
                  },
                },
                undefined,
                2
              )}
            </code>
          </pre>
        </li>
        <li>
          <code>yarn lint</code>
        </li>
        <li>
          Start server: <code>yarn; yarn dev</code> (Here you will get a
          warning:{" "}
          <i>
            We detected TypeScript in your project and created a tsconfig.json
            file for you.
          </i>{" "}
          Add Next.js will create a tsconfig.json for us! )
        </li>
        <hr />
        <li>
          <code>git init; touch .gitignore</code>
        </li>
        <li>Add the following to .gitignore: .next node_modules out</li>
        <li>
          Eslint precommit hook: <code>yarn add --dev husky lint-staged</code>
        </li>
        <li>
          Add to your package.json:{" "}
          <pre>
            <code>
              {JSON.stringify(
                {
                  husky: {
                    hooks: {
                      "pre-commit": "lint-staged",
                    },
                  },
                  "lint-staged": {
                    "*.{ts,tsx}": ["eslint --fix"],
                  },
                },
                undefined,
                2
              )}
            </code>
          </pre>
        </li>
        <li>
          <code>git add .</code>
        </li>
        <li>
          <code>git commit -m &quot;Initial setup&quot;</code>
        </li>
      </ol>
    </>
  );
};

export default Index;
