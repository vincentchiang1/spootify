import React from 'react';
import ContentContainer from './ContentContainer';
import ArtistsImage from './images/top-artists-image.jpg'

export default function Recent() {
  return <ContentContainer header="Recently Played" image={ArtistsImage} />
}
