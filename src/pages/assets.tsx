import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";

export default function Sass() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={"Assets"}
      description={siteConfig.tagline}
      keywords={siteConfig.customFields.keywords}
      metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
      wrapperClassName={"page-assets"}
    >
      assets
    </Layout>
  );
}
