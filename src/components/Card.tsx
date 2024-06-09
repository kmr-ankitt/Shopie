import React from 'react';

interface CardProps {
    item: string;
    image: string;
}

const Card: React.FC<CardProps> = ({ item, image }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 bg-white rounded-lg h-96  w-1/4">
            <img src={image} alt={item} className=" h-72 w-auto rounded-lg" />
            <div className=' text-justify  w-full pl-5'>
                <p className='text-xl truncate'>{item}</p>
                <p>Explore Now</p>
            </div>
        </div>
    );
}

export default Card;
