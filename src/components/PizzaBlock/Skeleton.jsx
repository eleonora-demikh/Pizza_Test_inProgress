import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <div className="pizza-block-wrapper">
    <ContentLoader
      className="pizza-block"
      speed={1}
      width={280}
      height={465}
      viewBox="0 0 280 465"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}>
      <circle cx="133" cy="123" r="122" />
      <rect x="0" y="269" rx="0" ry="0" width="277" height="20" />
      <rect x="1" y="313" rx="8" ry="8" width="278" height="85" />
      <rect x="-1" y="433" rx="0" ry="0" width="112" height="23" />
      <rect x="125" y="420" rx="28" ry="28" width="154" height="45" />
      <rect x="226" y="446" rx="0" ry="0" width="2" height="0" />
    </ContentLoader>
  </div>
);

export default Skeleton;
