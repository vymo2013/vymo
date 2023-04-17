import * as React from 'react';
import { graphql } from 'gatsby';
import { builder, BuilderComponent } from '@builder.io/react';

// Initialize the Builder SDK with your organization's API Key
// Find the API Key on: https://builder.io/account/settings
builder.init('ae60c6be4f36433a869eb9b26db8d120')

// Your template populates your Gatsby pages with your Builder page content.
function PageTemplate({ data }) {
  const models = data?.allBuilderModels;
  const page = models.page?.content;

  return <BuilderComponent name="page" content={page} />;
}

export default PageTemplate;

// pageQuery is a GraphQL query that 
// fetches each page's content from Builder. 
// Your content is rendered within the 
// PageTemplate using BuilderComponent, provided by Builder's SDK.
export const pageQuery = graphql`
  query ($path: String!) {
    allBuilderModels {
      onePage(target: { urlPath: $path }) {
        content
      }
    }
  }
`;