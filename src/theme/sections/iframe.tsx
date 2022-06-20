import React from "react";
import styled from "styled-components";
const StyledIframe = styled.div`
  width: 100vw;
  height: calc(100vh - (var(--global-header-height)));
  position: absolute;
  left: 0;
  top: calc(var(--global-header-height) - 10px);
`;

const StyledFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

export default function iFrame(props) {
  const component = "shift-iframe";

  const { src, type = "" } = props;

  return (
    <StyledIframe className={`${component} ${type && `${component}--${type}`}`}>
      <StyledFrame className={`${component}__frame`} src={src} />
    </StyledIframe>
  );
}
