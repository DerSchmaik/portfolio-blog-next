import { useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";

export default function Metadata({ pageTitle, description, keywords, imageURL, shouldIndex }) {
  const favicon = useColorModeValue('faviconL.ico', 'faviconD.ico');
  const tintColor = useColorModeValue('#fff', '#1a202c');

  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href={`/${favicon}`} />

      <meta name="title" content="Schmaik.net" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords}/>
      <meta name="image" content={imageURL} />
      <meta name="robots" content="index, follow"/>
      <meta name="language" content="German"/>
      <meta name="revisit-after" content="1 days"/>

      <meta property="og:title" content="Schmaik.net" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://schmaik.net" />
      <meta property="og:image" content={imageURL} />
      <meta property="og:description" content={description} />
      <meta name="theme-color" content="#FF0000" />


      <meta name="theme-color" content={tintColor} />
      <meta name="msapplication-navbutton-color" content={tintColor} />
      <meta name="apple-mobile-web-app-status-bar-style" content={tintColor} />

      {shouldIndex? <meta name="robots" content="index, follow"/> : <meta name="robots" content="noindex, nofollow"/>}
    </Head>
  )
}