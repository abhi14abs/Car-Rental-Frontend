import React from 'react'
import { Link } from 'react-router-dom';
import aboutImg from '../../assets/images/about.jpg';
import aboutCardImg from '../../assets/images/about-card.jpg';

function About() {
  return (
    <section>
        <div className="container">
            <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
                {/* ======= about img ======== */}
                <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                    <img src={aboutImg} alt="" className='rounded-[50px]' />
                    <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                        <img src={aboutCardImg} alt=""  className='rounded-[50px] '/>
                    </div>
                </div>

                {/* ========= about content ========= */}
                <div className='w-full lg:w-1/2 xl:w-[650px] order-1 lg:order-2'>
                    <h2 className='heading'>
                        Proud to be one of the nations best
                    </h2>
                    <p className='text__para'>Welcome to our premier car and bike rental system website, where convenience meets adventure. 
                            With our diverse fleet of vehicles, ranging from stylish cars to rugged bikes, 
                            we provide the perfect transportation solution for every occasion.
                    </p>

                    <p className='text__para mt-[30px]'> Booking your ride is a breeze with our intuitive platform, offering seamless browsing, transparent pricing, and flexible rental options to suit your schedule.
                    </p>

                    <Link to="/">
                        <button className='btn'>Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About