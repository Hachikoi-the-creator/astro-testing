import img1 from "~/assets/img1.jpg";
import img2 from "~/assets/img2.jpg";
import img3 from "~/assets/img3.jpeg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const testimonialItems = [
  {
    image: img1.src,
    name: "Anisha Li",
    text: '"Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."',
  },
  {
    image: img2.src,
    name: "Ali Bravo",
    text: '"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."',
  },
  {
    image: img3.src,
    name: "Richard Watts",
    text: '"Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!"',
  },
  {
    image: "images/avatar-shanai.png",
    name: "Shanai Gough",
    text: '"Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."',
  },
];

// =======================================================
//                  Testimonials
export default function SwipeCopy() {
  return (
    <>
      <div className="max-w-6xl px-5 mx-auto mt-16 mb-10 md:mt-36 md:mb-20 text-center">
        <h2 className="text-4xl font-bold text-center text-darkBlue">
          What they've said
        </h2>
      </div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        centeredSlides={true}
        slidesPerView={1}
        grabCursor={true}
        initialSlide={1}
        breakpoints={{
          560: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2.5,
          },
        }}
      >
        {testimonialItems.map(({ image, name, text }, index) => {
          return (
            <SwiperSlide key={index} className="container p-4 py-12">
              <div className="flex">
                <div className="container pt-5 p-10 flex flex-col self-stretch items-center space-y-6 rounded-lg bg-veryLightGray">
                  <img
                    src={image}
                    className="w-20 -mt-16 testimonial-image"
                    alt="testimonial image"
                    style={{
                      width: "100%",
                      height: "auto",
                      aspectRatio: "1",
                      maxWidth: "80px",
                    }}
                  />
                  <h3 className="text-lg font-bold text-darkBlue">{name}</h3>
                  <p className="text-sm text-center leading-loose text-darkGrayishBlue">
                    {text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
