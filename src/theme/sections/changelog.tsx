import React, { useRef, useState, useEffect } from "react";
import Heading from "./../components/heading/heading";
import Container from "./../components/container/container";
import localMd from "../../../CHANGELOG.md";

export const ChangeLog = () => {
  const inputEl = useRef(null);
  useEffect(() => {
    if (inputEl) return localMd(inputEl);
  });

  return <Container size={"medium"}>{inputEl && localMd(inputEl)}</Container>;
};
