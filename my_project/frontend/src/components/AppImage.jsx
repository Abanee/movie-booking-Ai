import React from 'react';

function Image({
  src,
  alt = "",
  className = "",
  ...props
}) {

  return (
    <img
      src={src ? src : "./assets/images/no.png"}
      alt={alt}
      className={className}
      onError={(e) => {
        e.target.onerror = null; // Prevents infinite loop
        e.target.src = "./assets/images/no.png";
      }}
      {...props}
    />
  );
}

export default Image;


// import React from 'react';

// function Image({
//   src,
//   alt = "Image Name",
//   className = "",
//   ...props
// }) {
//   const fallbackImages = [
//     "/assets/images/ch,jpg",
//     "/assets/images/mo.jpg",
//     "/assets/images/pal.jpg",
//     "/assets/images/ja.png"
//   ];

//   let fallbackIndex = 0;

//   return (
//     <img
//       src={src ? src : fallbackImages[fallbackIndex]}
//       alt={alt}
//       className={className}
//       onError={(e) => {
//         fallbackIndex++;
//         if (fallbackIndex < fallbackImages.length) {
//           e.target.src = fallbackImages[fallbackIndex];
//         } else {
//           e.target.onerror = null; // Prevents infinite loop
//           e.target.src = fallbackImages[fallbackImages.length - 1];
//         }
//       }}
//       {...props}
//     />
//   );
// }

// export default Image;