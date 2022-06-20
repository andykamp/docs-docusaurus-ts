import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Container from "./../components/container/container";
import Button from "./button";
import { device } from "../../scss/device";
import styled from "styled-components";

const StyledTitle = styled.div`
  font-size: var(--global-font-size-big);
  line-height: 1.13;
  color: var(--global-colors-elephant);
  font-weight: bold;
  letter-spacing: -1px;
  font-family: var(--global-font-family-alternative);
  z-index: 1;
  position: relative;

  @media ${device.tablet} {
    font-size: var(--global-font-size-enormous);
    line-height: 0.98;
    margin-bottom: 40px;
  }

  @media ${device.desktop} {
    font-size: var(--global-font-size-gigantic);
  }
`;

const StyledContent = styled.div`
  font-size: var(--global-font-size-default);
  line-height: 1.56;
  color: var(--global-colors-cape);
  margin-bottom: 25px;
  padding-left: 75px;
  position: relative;
  max-width: 550px;

  @media ${device.tablet} {
    margin-bottom: 50px;
    padding-left: 115px;
  }

  &::before {
    content: "";
    width: 45px;
    position: absolute;
    left: 0;
    top: 20px;
    background-color: var(--global-colors-nevada);
    height: 1px;

    @media ${device.tablet} {
      width: 75px;
    }
  }
`;

const StyledHero = styled.div`
  .image {
    position: relative;
    margin: 0 calc(var(--global-gutter) * -1) 40px;
    display: flex;
    justify-content: flex-end;

    @media ${device.tablet} {
      position: absolute;
      right: 0;
      top: 50%;
      display: block;
      margin: 0;
      transform: translateY(-50%);
    }
  }

  .image-bg {
    display: block;
    width: 100%;
    height: auto;
  }

  .image-img {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    max-width: 75%;
    transform: translate(-50%, -50%);

    @media ${device.tablet} {
      max-width: 75%;
    }
  }
`;

export default function Intro() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const component = "shift-intro";

  return (
    <Container componentClass={component} size={"medium"} bgColor={"light"}>
      <StyledHero>
        <StyledTitle
          dangerouslySetInnerHTML={{
            __html: "Eightshift<br/>Development<br/>kit",
          }}
        ></StyledTitle>
        <div className="image">
          <img className="image-bg" src={useBaseUrl("img/ic-intro.svg")} />
          <img
            className="image-img"
            src={useBaseUrl("img/img-boilerplate-intro@2x.png")}
          />
        </div>
        <StyledContent>{siteConfig.tagline}</StyledContent>
        <Button
          componentClass={component}
          label={"Get Started"}
          href={useBaseUrl("/docs/welcome")}
        />
      </StyledHero>
    </Container>
  );
}
