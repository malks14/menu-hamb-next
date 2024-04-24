// 'use client'
// import { useState } from 'react';

// const Carousel = ({ data, setIndex }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrevClick = () => {
//     const newIndex = (currentIndex - 1 + data.length) % data.length;
//     setCurrentIndex(newIndex);
//     setIndex(newIndex);
//   };

//   const handleNextClick = () => {
//     const newIndex = (currentIndex + 1) % data.length;
//     setCurrentIndex(newIndex);
//     setIndex(newIndex);
//   };

//   return (
//     <div>
//       <p>{data[currentIndex]}</p>
//       <button onClick={handlePrevClick}>Previous</button>
//       <button onClick={handleNextClick}>Next</button>
//     </div>
//   );
// };

// export default Carousel;