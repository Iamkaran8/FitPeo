import ThreeStar from "../assets/stars/ThreeStar.png";
import FourStar from "../assets/stars/FourStar.png";
import FiveStar from "../assets/stars/FiveStar.png";
import review_img_1 from "../assets/review-imgs/review-img-1.png";
import review_img_2 from "../assets/review-imgs/review-img-2.png";
import review_img_3 from "../assets/review-imgs/review-img-3.png";

const reviews = [
  {
    id: "1",
    name: "Jordan Lee",
    saying:
      "The Royal Heritage Mansion offers an awe-inspiring experience with its majestic design and historical charm. The detailed wood carvings and exquisite artworks are captivating for those interested in history. Although the entrance fee is on the higher side and it can get quite busy, it's worth the visit for a glimpse into the grandeur of the past. Note that there might be extra costs if you wish to take photographs.",
    star: ThreeStar,
    img: review_img_1,
  },
  {
    id: 2,
    name: "Riley Carter",
    saying:
      "We had a fantastic time at the bustling venue. The vibrant atmosphere and lively energy made the experience unforgettable. A highlight was spotting a sleek sports car, which added an extra thrill to our day. Earlier, we enjoyed a visit to an art gallery, which was visually stunning and culturally enriching. The warm hospitality we received everywhere we went made the day even more memorable.",
    star: FiveStar,
    img: review_img_2,
  },
  {
    id: 3,
    name: "Avery Patel",
    saying:
      "This shopping center is a step above the rest. I went in without much expectation and was pleasantly surprised. It's a high-end shopping destination with a range of luxury brands. Parking is ample and conveniently accessible. The standout feature is the food court, which offers a stunning view of the skyline from its open terrace. The open amphitheater adds a unique touch. The food, music, and overall ambiance make it a worthwhile visit. However, if you’re looking for budget shopping, you might be disappointed.",
    star: FourStar,
    img: review_img_3,
  },
];

export default reviews;
