import React, { useState } from 'react';
import Ad from './Ad';

const AdPage = () => {
  const [showAd, setShowAd] = useState(true);

  return (
    <div>
      <Ad showAd={showAd} />
    </div>
  );
};

export default AdPage;