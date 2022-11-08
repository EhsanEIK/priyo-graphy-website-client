import { Carousel } from 'flowbite-react';
import React from 'react';

const Slider = () => {
    return (
        <div className="h-56 sm:h-66 xl:h-96 2xl:h-96">
            <Carousel>
                <img
                    className='w-full' src="https://121clicks.com/wp-content/uploads/2021/07/product_photography_tips.jpg"
                    alt="product photography"
                />
                <img
                    className='w-full' src="https://www.nijolcreative.com/wp-content/uploads/2017/01/Wedding-Photography-min.jpg"
                    alt="weeding photography"
                />
                <img
                    className='w-full' src="https://blog.sigmaphoto.com/wp-content/uploads/2019/07/cropped-pancakes-scaled.jpg"
                    alt="food photography"
                />
                <img
                    className='w-full' src="https://www.zacandzac.co.uk/wp-content/uploads/2015/06/harriet-hughes-decor-design-lounge.jpg"
                    alt="interior photography"
                />
                <img className='w-full' src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg"
                    alt="nature photography"
                />
                <img
                    className='w-full' src="https://www.lightstalking.com/wp-content/uploads/portrait-photography-outdoors.jpeg"
                    alt="potrait photography"
                />
            </Carousel>
        </div>
    );
};

export default Slider;