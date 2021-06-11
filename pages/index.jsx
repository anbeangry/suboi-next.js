import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { groq } from 'next-sanity';
import { useRouter } from 'next/router';
import { getClient, toPlainText } from 'utils/sanity';
import HomeLayout from 'layouts/HomeLayout/HomeLayout';
import HomePage from 'templates/Home/Home';

const query = groq`
  {
    "promote": * [_type == 'promote'][0] {
      albumAndSong-> {
        name,
        lyric,
        background,
        albumImage
      },
      ctaLink {
        buyAlbum,
        playVideo
      }
    },
    "about": * [_type == 'about'][0] {
      biography {
        lang
      }
    },
    "songs": * [_type == 'song'] {
      name,
      coverImage,
      background,
      slug,
      album -> {
        name,
        releaseDate
      },
      "albumReleaseDate": album -> releaseDate
    } | order(albumReleaseDate desc),
    "photos": * [_type == 'photo'] {
      photoName,
      image,
    },
    "tourName": * [_type == 'tourName'][0] {
      name
    },
    "tour": * [_type == 'tour'] | order(tourDate asc) {
      _id,
      venue,
      city,
      tourDate,
      tourTicket
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
    "background": * [_type == 'background'][0] {
      topBackground,
      aboutBackground,
      musicBackground,
      tourBackground,
      photoBackground,
      contactBackground
    }
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

function Home({ data }) {
  const { locale } = useRouter();
  const title = locale === 'en_US'
    ? 'SUBOI | Official Music Website'
    : 'SUBOI | Trang Official Music';
  return (
    <HomeLayout social={data.contact.social}>
      <Head>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={toPlainText(data.about?.biography?.lang?.[locale])}/>
      </Head>
      <HomePage
        background={data.background}
        tour={{
          tourName: data.tourName.name,
          tour: data.tour,
        }}
        about={data.about}
        promote={data.promote}
        songs={data.songs}
        photos={data.photos}
        contact={data.contact}
      />
    </HomeLayout>
  );
}

Home.propTypes = {
  data: PropTypes.object,
};

export default Home;
