import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import Iframe from "../theme/sections/iframe";
import styled from "styled-components";

const StyledIframe = styled(Iframe)`
  top: calc(var(--global-header-height) - 10px);
`;

export default function Storybook() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={"Storybook"}
      description={siteConfig.tagline}
      keywords={siteConfig.customFields.keywords}
      metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
      wrapperClassName={"page-storybook"}
    >
      <StyledIframe src="https://infinum.github.io/eightshift-frontend-libs/storybook/" />
    </Layout>
  );
}
