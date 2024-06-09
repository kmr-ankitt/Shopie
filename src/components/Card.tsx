import React from 'react';

interface CardProps {
    item: string;
    image: string;
}

const Card: React.FC<CardProps> = ({ item, image }) => {
    return (
        <div className="flex flex-col justify-center pl-10 bg-red-500 h-96  w-1/4">
            <img src={image} alt={item} className=" h-72 w-72" />
            <div className=' text-justify  w-72'>
                <p className='text-xl'>{item}</p>
                <p>Explore Now</p>
            </div>
        </div>
    );
}

export default Card;
