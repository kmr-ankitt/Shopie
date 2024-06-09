import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface CardProps {
    item: string;
    image: string;
}

const Card: React.FC<CardProps> = ({ item, image }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 bg-white rounded-lg h-96  w-1/4">
            <img src={image} alt={item} className=" h-72 w-auto rounded-lg" />
            <div className=' text-justify  w-full pl-5 flex flex-col gap-2'>
                <p className='text-xl truncate'>{item}</p>
                <a href='#' className=' text-red-400'>Explore Now
                    <KeyboardArrowRightIcon />
                </a>
            </div>
        </div>
    );
}

export default Card;
