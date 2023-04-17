import * as React from 'react';
import Layout from '../components/Layout';
import { useEffect, useState } from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";

// Put your API key here
builder.init('ae60c6be4f36433a869eb9b26db8d120');

// set whether you're using the Visual Editor,
// whether there are changes,
// and render the content if found
export default function CatchAllRoute() {
  const isPreviewingInBuilder = useIsPreviewing();
  const [notFound, setNotFound] = useState(false);
  const [content, setContent] = useState(null);
  const isBrowser = typeof window !== "undefined";

  // get the page content from Builder
   useEffect(() => {

    if (isBrowser) {
        // Your code here
        async function fetchContent() {
        const content = await builder
            .get("page", {
            url: window.location.pathname
            })
            .promise();
    
        setContent(content);
        setNotFound(!content);
    
        // if the page title is found, 
        // set the document title
        if (content?.data.title) {
            document.title = content.data.title
        }
        }
        fetchContent();
      }
    }, [isBrowser]);

  }, [window.location.pathname]);
  
  // If no page is found, return 
  // a 404 page from your code.
  // The following hypothetical 
  // <FourOhFour> is placeholder.
  if (notFound && !isPreviewingInBuilder) {
    // return <FourOhFour/>
  }

  // return the page when found

    return (
        <Layout>
            <div className="mt-5 mb-4">
                <BuilderComponent model="page" content={content} />;
            </div>
        </Layout>
    );

}