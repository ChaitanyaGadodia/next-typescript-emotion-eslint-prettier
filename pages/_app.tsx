import * as React from "react";
import App from "next/app";
import { CacheProvider } from "@emotion/core";

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from "emotion";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CacheProvider value={cache}>
        <Component {...pageProps} />
      </CacheProvider>
    );
  }
}
