import React from 'react';
import SectionOne from 'modules/Home/SectionOne/SectionOne';
import SectionTwo from 'modules/Home/SectionTwo/SectionTwo';
import SectionSix from 'modules/Home/SectionSix/SectionSix';

function HomePage() {
  return (
    <React.Fragment>
      <SectionOne />
      <SectionTwo />
      <SectionSix />
    </React.Fragment>
  );
}

HomePage.propTypes = {
  songs: PropTypes.array,
  photos: PropTypes.array,
};

export default HomePage;
