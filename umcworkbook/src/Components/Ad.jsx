import React from 'react';
import AdImage from '../adimage.svg';

const Ad = (props) => {
  if (props.showAd === null) {
    return null;
  }

  return (
    <div>
      <img style={{  
                         width:"1000px",
                    }}
      src={AdImage} alt="Advertisement" />
    </div>
  );
};

export default Ad;
