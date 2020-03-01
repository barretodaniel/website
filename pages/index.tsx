import Head from 'next/head';
import Header from '../components/Header';
import Bio from '../components/Bio';
export default () => (
  <div className="relative bg-white overflow-hidden">
    <Head>
      <title>Daniel Barreto</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png" />
    </Head>
    <div className="max-w-screen-xl mx-auto lg:h-screen">
      <div className="relative z-10 lg:h-screen pb-8 bg-white sm:pb-16 md:pb-20 xl:max-w-2xl lg:max-w-lg lg:w-full lg:pb-28 xl:pb-32">
        <div className="pt-6 px-4 sm:px-6 lg:px-8">
          <Header />
        </div>
        <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <Bio />
        </div>
        <svg
          className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="object-top object-cover w-full h-144 md:h-192 lg:h-full"
        src="/img/daniel-barreto.jpeg"
        alt="Photo of Daniel Barreto"
      />
    </div>
  </div>
);
