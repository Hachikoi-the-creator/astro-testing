// Libraries
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import type { ReactNode } from "react";
// Types
// Components/Assets
import img1 from "~/assets/img1.jpg";
import img2 from "~/assets/img2.jpg";
import img3 from "~/assets/img3.jpeg";

type Slide = {
  image: string | ReactNode;
  title: string;
  hoverText1: string;
  hoverText2: string;
};

type SwiperCarouselProps = {
  slidesArr?: ReactNode[];
};

const imagesArr = [img1, img2, img3];
// ? * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
export default function SwiperCarousel({}: SwiperCarouselProps) {
  return (
    <div className="w-[80vw] mx-auto my-10">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {imagesArr.map((slide, i) => (
          <SwiperSlide key={i}>
            <img src={imagesArr[i].src} alt="" />

            <div className="flex flex-col justify-center items-center absolute top-0 w-full h-full gap-10 -z-10">
              <p className="uppercase font-bold text-center">
                slide.hoverText1
              </p>
              <p className="uppercase font-bold text-center">
                slide.hoverText2
              </p>
            </div>
          </SwiperSlide>
        ))}
        <BsArrowLeftCircleFill
          className="swiper-button-prev cursor-pointer rounded-full fill-orange-500"
          size={32}
        />
        <BsArrowRightCircleFill
          className="swiper-button-next cursor-pointer rounded-full fill-orange-500"
          size={32}
        />
      </Swiper>
    </div>
  );
}
