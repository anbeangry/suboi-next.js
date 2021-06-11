import React from 'react';
import PropTypes from 'prop-types';
import { groq } from 'next-sanity';
import { getClient, urlFor } from 'utils/sanity';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Default from 'layouts/Default/Default';
import ShopListing from 'templates/ShopListing/ShopListing';

const query = groq`
  {
    "products": * [_type == 'product'] {
      name,
      slug,
      productImage,
      price,
      productCategory -> {
        name,
        slug
      }
    },
    "categories": * [_type == 'productCategory'] {
      name,
      slug,
      description,
    },
    "background": * [_type == 'background'][0] {
      shopBackground,
    },
    "contact": * [_type == 'contact'][0] {
      businessInquiry {
        mainEmail,
        manageEmail
      },
      social {
        appleMusic,
        facebook,
        instagram,
        spotify,
        youtube
      }
    },
  }
`;

export async function getStaticProps({ preview = false }) {
  const data = await getClient(preview).fetch(query);
  return {
    props: {
      data,
    },
  };
}

function Shop({ data }) {
  const { locale } = useRouter();
  const title = locale === 'en_US'
    ? 'Checkout the latest merchandise from Suboi shop'
    : 'Suboi Shop';
  return <Default social={data.contact.social}>
    <Head>
      <meta property="og:title" content={title}/>
      <meta property="og:image" content={urlFor(data.background?.shopBackground?.asset?._ref)}/>
    </Head>
    <ShopListing items={data.products} categories={data.categories} background={data.background}/>
  </Default>;
}

Shop.propTypes = {
  data: PropTypes.object,
};

export default Shop;
