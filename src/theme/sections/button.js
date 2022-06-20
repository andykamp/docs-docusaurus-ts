import React from "react";
import Link from "@docusaurus/Link";
import styled from "styled-components";
const StyledButton = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  border-radius: 50px;
  text-transform: uppercase;
  padding: 5px 45px;
  transition: {
    property: color, background-color, border-color;
    timing-function: ease-out;
    duration: 0.3s;
  }

  &:hover {
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }

  background-color: var(--global-colors-elephant);
  color: var(--global-colors-white);

  &:hover {
    background-color: var(--global-colors-mandy);
    color: var(--global-colors-white);
  }

  font-size: var(--global-font-size-small);
  line-height: 1.43;
  height: 48px;
`;

export default function Button(props) {
  const component = "shift-button";

  const { label, href } = props;

  return <StyledButton to={href}>{label}</StyledButton>;
}
