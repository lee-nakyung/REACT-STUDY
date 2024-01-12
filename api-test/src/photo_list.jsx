import React from 'react';
import PhotoItem from './photo_item';

const PhotoList = (props) => {
    return (
        <div>
            {props.photos.map(photo => (
                <PhotoItem key={photo.id}  photo={photo} />
                console.log({photo.id} {photo})
           ))}
        </div>
    );
};

export default PhotoList;