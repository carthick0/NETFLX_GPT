// import React from 'react';
// import { IMG_CDN_URL } from '../utils/constants';

// const MovieCard = ({ posterPath }) => {
//   const imageUrl = IMG_CDN_URL + posterPath;
//   console.log('Image URL:', imageUrl); // Add logging

//   return (
//     <div className='w-48 pr-4'> 
//       <img alt='Movie Card'
//         src={imageUrl}
//       />
//     </div>
//   );
// }

// export default MovieCard;
import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  // const ad=IMG_CDN_URL+posterPath;
  // console.log(ad);
  return (
    <div className='w-48 pr-4'> 
      <img alt='Movie Card'
        src={IMG_CDN_URL + '/'+ posterPath} 
      />
    </div>
    
  );
}
 
export default MovieCard;
