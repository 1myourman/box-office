import React from 'react';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Box Office"
        subtitle="Are you looking for a movie or an actor?"
      />
      <Navs />
      {}
    </div>
  );
};

export default MainPageLayout;
