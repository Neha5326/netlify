import Head from 'next/head';
import React from 'react';

const Dynamicmetadata = () => {
  const title = "This is dynamic meta title";
  const description = "This is dynamic meta description";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="pt-5 text-center bg-gray-500 mt-11">
        Dynamicmetadata
      </div>
    </>
  );
};

export default Dynamicmetadata;
