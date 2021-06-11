import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { groq } from 'next-sanity';
import { useRouter } from 'next/router';
import { getClient, urlFor } from 'utils/sanity';
import Default from 'layouts/Default/Default';
import MusicDetail from 'templates/MusicDetail/MusicDetail';

const query = groq`
  {
    "songs": * [_type == 'song'] {
      slug,
    },
    "song": * [slug.current == $slug][0] {
      name,
      coverImage,
      background,
      streamLink,
      slug,
      lyric,
      album -> {
        name,
        releaseDate
      }
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

export async function getStaticProps({ preview = false, params }) {
  const data = await getClient(preview).fetch(query, { slug: params.id });
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths({ preview = false }) {
  const data = await getClient(preview).fetch(query, { slug: '' });

  const paths = data.songs.map((item) => (
    {
      params: { id: String(item.slug.current) },
    }
  ));
  return {
    paths,
    fallback: false,
  };
}

function Music({ data }) {
  const { locale } = useRouter();
  const title = locale === 'en_US'
    ? `Checkout ${data.song?.name?.toUpperCase()} at Suboi official website`
    : `${data.song?.name?.toUpperCase()} đã có trên website chính thức của Suboi`;
  return <Default social={data.contact.social}>
    <Head>
      <meta property="og:title" content={title}/>
      <meta property="og:image" content={urlFor(data.song.background?.asset?._ref) || urlFor(data.song.coverImage?.asset?._ref)} />
    </Head>
    <MusicDetail item={data.song}/>
  </Default>;
}

Music.propTypes = {
  data: PropTypes.object,
};

export default Music;
