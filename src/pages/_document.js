import Document, {Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const GA4 = process.env.GA4
const GTM = process.env.GTM

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
        {
            GA4 && (
              <>
                <script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=${GA4}`}
                />
      
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${GA4}', { page_path: window.location.pathname });
                    `,
                  }}
                />
              </>
            )
          }

          {
            GTM && (
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${GTM}');
              `,
                }}
              />
            )
          }

          <link rel="icon" type="image/png" href="/favicon.png" />
        </Head>
        <body>
          {
            GTM && (
              <noscript><iframe src={"https://www.googletagmanager.com/ns.html?id=" + GTM}
              height="0" width="0" style={{display: "none", visibility: "hidden"}}></iframe></noscript>
            )
          }

          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}