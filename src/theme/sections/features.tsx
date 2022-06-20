import React from "react";
import Heading from "./../components/heading/heading";
import Container from "./../components/container/container";
import styled from "styled-components";
import { device } from "../../scss/device";

const StyledFeature = styled.div`
  background-color: var(--global-colors-white);
`;

const StyledContent = styled.div`
  display: grid;
  flex-direction: column;
  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    row-gap: 30px;
  }
`;

const StyledItem = styled.div`
  &:hover {
    .feature_icon::before {
      transform: rotate(45deg);
      transition: {
        property: transform;
        timing-function: ease-out;
        duration: 0.3s;
      }
    }
  }
`;

const StyledTitle = styled.div`
  font-size: var(--global-font-size-large);
  line-height: 1.2;

  font-weight: bold;
  color: var(--global-colors-elephant);
  font-family: var(--global-font-family-alternative);
  margin-bottom: 15px;
  padding-left: 40px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 7px;
    width: 16px;
    height: 16px;
    background-color: red;
  }
  &.feature_icon::before {
    background-image: url(${(props) => props.icon});
  }
`;

const StyledDesc = styled.div`
  @extend .paragraph-size--default;
  font-weight: 500;
  color: var(--global-colors-cape);
  margin-bottom: 20px;
  padding-left: 40px;

  @include media(tablet up) {
    max-width: 410px;
  }
`;

export default function Features() {
  const component = "shift-features";

  const data = [
    {
      icon: "/img/ic-bullet-1.svg",
      title: "Custom Block Editor blocks",
      desc:
        "Build a dynamic block faster than you can say Gutenberg. With automatic block registration and top-notch attribute handling, you'll be shipping blocks in record time.",
    },
    {
      icon: "/img/ic-bullet-2.svg",
      title: "Sustainable, like code should be",
      desc:
        "All our code follows battle-tested programming practices. OOP? Check. Unit tests? Check. Code docblocks, linters for coding standards and great documentation? Triple check.",
    },
    {
      icon: "/img/ic-bullet-1.svg",
      title: "OOP: The good way to write PHP code",
      desc:
        "Object-oriented programming is at the core of Eightshift Development kit, making your projects cleaner and allowing you to extend and replace functionality.",
    },
    {
      icon: "/img/ic-bullet-3.svg",
      title: "wp boilerplate",
      desc:
        "Include features you need, and leave out the ones you don't using our powerful WP-CLI tooling.",
    },
    {
      icon: "/img/ic-bullet-4.svg",
      title: "First-class CSS variables",
      desc:
        "Forget about conditional classnames: build out CSS variables from attribute values and scope them to a particular block with almost no code.",
    },
    {
      icon: "/img/ic-bullet-1.svg",
      title: "A build process to love",
      desc:
        "Eightshift Development kit comes with Webpack preconfigured, so you can start building your JavaScript and CSS assets from the start. Vendor prefixes? Polyfills? SCSS compilation? Asset minification? All taken care of!",
    },
    {
      icon: "/img/ic-bullet-2.svg",
      title: "As responsive as it can get",
      desc:
        "Declare breakpoints once, use them everywhere — from media queries to blocks. Override any attribute value for particular breakpoints without breaking a sweat. Need to tweak that width for tablets? Done.",
    },
    {
      icon: "/img/ic-bullet-3.svg",
      title: "Cache busting",
      desc:
        "Each time you build assets, we generate a new URL for each asset file. This means you'll never see the old cached version while developing or after pushing your code to production.",
    },
    {
      icon: "/img/ic-bullet-1.svg",
      title: "Eightshift Libs",
      desc:
        "Library aimed at bringing the modern development tools to your project.",
    },
    {
      icon: "/img/ic-bullet-2.svg",
      title: "Eightshift Frontend Libs",
      desc:
        "A collection of useful front-end utility modules and all the tools you need to start building modern Block Editor dynamic blocks.",
    },
  ];

  const items = data.map((item, index) => {
    const { icon, title, desc } = item;

    return (
      <StyledItem key={index}>
        <StyledTitle icon={icon} className="feature_icon">
          {title}
        </StyledTitle>
        <StyledDesc>{desc}</StyledDesc>
      </StyledItem>
    );
  });

  return (
    <StyledFeature>
      <Container size={"medium"}>
        <Heading title={"Unmatched developer experience"} align={"left"} />
        <StyledContent>{items}</StyledContent>
      </Container>
    </StyledFeature>
  );
}
