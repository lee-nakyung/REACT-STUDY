import React from 'react';
import AdImage from '../adimage.svg';

const Ad = (props) => {
  if (props.showAd === null) {
    return null;
  }

  return (
    <div>
      <img style={{  
                        width:'1455px',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
      src={AdImage} alt="Advertisement" />
    </div>
  );
};

export default Ad;
