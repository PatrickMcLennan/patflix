import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

/**
 * The Document.  Put all CDN's or
 * starting metadata in here.
 */

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
