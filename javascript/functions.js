const imgFolder = "../images/banner";
// const fs = require('fs');

// Returns true if zipcode is greater than 20000
function zipcodeChecker(zipcode) {
  return zipcode > 20000;
};

// Can't get this to add to banner array
// Get array of banners from folder
// function getBannerArray(folder) {
//   let banner = [];
//   fs.write(folder, (err, files) => {
//     files.forEach(file => {
//       console.log(file);
//       banner.push(file)   
//     });
//       return banner; // doesn't work not in scope for some reason.
//   })
// };

const bannerArray = ["../images/banner/carAd.png", "../images/banner/schoolAd.png"];

// selects a random ad from banners array
function simpleBannerSelect(ads) {
  let ad = ads[Math.floor(Math.random() * ads.length)];
  return ad;
}


// Call functions
// let testBanners = getBannerArray(imgFolder);
// console.log(`Array: ${testBanners}`);


let testOneBanner = simpleBannerSelect(bannerArray);
console.log(`One ad: ${testOneBanner}`);

// Update the DOM for the banner

document.getElementById("bannerImage").setAttribute("src", testOneBanner);
// element.setAttribute("src", testOneBanner); 

// console.log(`One ad: ${testOneBanner}`);