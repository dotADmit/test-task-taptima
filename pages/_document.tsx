import Document, { Html, Head, Main, DocumentContext, NextScript, DocumentInitialProps } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="ru">
        <Head />
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}
