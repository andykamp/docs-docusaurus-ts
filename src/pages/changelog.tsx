import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import { ChangeLog } from "../theme/sections/changelog";

export default function Sass() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={"changelog"}
      description={siteConfig.tagline}
      keywords={siteConfig.customFields.keywords}
      metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
      wrapperClassName={"page-changelog"}
    >
      <ChangeLog />
    </Layout>
  );
}
