import React from "react";
import Container from "./../components/container/container";
import { device } from "../../scss/device";
import styled from "styled-components";

const StyledFoot = styled.div`
  color: var(--global-colors-pewter);
  font-size: var(--global-font-size-small);
  font-weight: 500;
  line-height: 1.44;
  width: 100%;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  margin: 0 calc(-1 * calc(var(--global-gutter) / 2));

  &:nth-child(1) {
    text-align: center;

    @media ${device.laptop} {
      text-align: left;
    }
  }

  &:nth-child(2) {
    text-align: center;
    display: flex;
    flex-direction: column;

    @media ${device.laptop} {
      text-align: right;
      flex-direction: row;
    }
  }
`;

const StyledLink = styled.a`
  color: var(--global-colors-cape);

  &:hover {
    color: var(--global-colors-mandy);
  }
`;

function Foot() {
  const component = "shift-foot";

  return (
    <Container
      componentClass={component}
      spacingBottom={"small"}
      spacingTop={"none"}
    >
      <StyledFoot>
        <div>
          Made with &hearts; by &nbsp;
          <StyledLink
            href="https://github.com/andykamp/docs-docusaurus-ts"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Anders By Kampenes"}
          </StyledLink>
          {"  "}
        </div>
        <div>
          <span>{"© Anders By Kampenes. All rights reserved."}</span>
        </div>
      </StyledFoot>
    </Container>
  );
}

export default Foot;
