import React from "react";
import Heading from "../../components/heading/heading";
import Container from "../../components/container/container";

export default function ShowcaseGrid() {
  const component = "changelog";

  return (
    <div className={component}>
      <Container componentClass={component}>
        <Heading
          componentClass={component}
          title={"Changelog"}
          subtitle={
            "See the awesome websites people are building with Eightshift Boilerplate."
          }
        />
        <div className={`${component}__content`}>items goes here</div>
      </Container>
    </div>
  );
}
