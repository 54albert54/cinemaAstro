import { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

export interface Props{
  text?:string
  allimg:string[]
}

const HeroBanner =({ allimg}:Props)=>{
  let [state , setState ]= useState(0)

  return(
    <Swiper
    modules={[Navigation, Pagination, A11y]}
    spaceBetween={50}
    slidesPerView={3}
    scrollbar={{ draggable: true }}
    pagination={{ clickable: false }}
  
  >
    {
        
              allimg.map((img, id)=>(
                <SwiperSlide key={id}>
                <figure  className={`  min-w-[400px] h-auto  mx-5`}>
                <img className=" object-cover" src={img} alt="" />
                </figure>
                </SwiperSlide>
              ))


    }

   
    ...
  </Swiper>
    // <section className={`flex flex-row  overflow-auto group  relative left-[${state}px]` }>
    //   {
    //     allimg.map((img, id)=>(
    //       <figure key={id} className={`  min-w-[400px] h-auto bg-red-300 mx-5`}>
    //       <img className=" object-cover" src={img} alt="" />
    //       </figure>
    //     ))
    //   }
    //   <button onClick={()=>setState(state += 500)} className="size-[80px] text-6xl flex justify-center items-center  absolute bg-white rounded-full right-6 top-32  group-hover:bg-red-300 ">{'>'}</button>
    // </section>
    )
};

export default HeroBanner; 
