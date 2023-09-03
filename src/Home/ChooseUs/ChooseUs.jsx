import React from 'react';
import handshake from "../../assets/handshake.jpg"

const ChooseUs = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2'> 
            <div className='mb-5 sm:mb-0'>
                <img className='rounded-xl' src={handshake} alt="" />
            </div>
            <div className='my-auto mx-auto '>
                <ul className='list-disc ml-10 text-xl'>
                    <li>Wide Selection of High-Quality Toy Cars</li>
                    <li>Exceptional Quality and Durability</li>
                    <li>Competitive Pricing</li>
                    <li>Knowledgeable and Friendly Staff</li>
                    <li>Convenient Shopping Experience</li>
                    <li>Customer Satisfaction Guarantee</li>
                    <li>Community Involvement</li>
                    <li>Regular Promotions and Discounts</li>
                    <li>Environmental Responsibility</li>
                    <li>Positive Customer Reviews</li>
                </ul>
            </div>
        </div>
    );
};

export default ChooseUs;