import React, { useState, createContext, useContext } from "react";

import 'tailwindcss/tailwind.css'

export default function Recipes() {

    const [recipesList, setRecipesList] = useState([
        {
            id: 1,
            name: "Ratatouille",
            author: "Cuong Nguyen",
            image: 'https://cuongbuckettutorial.s3.ap-southeast-1.amazonaws.com/ratatoulie.jpg'
        },
        {
            id: 2,
            name: "Super Instant Noodle",
            author: "Cuong Nguyen",
            image: "https://cuongbuckettutorial.s3.ap-southeast-1.amazonaws.com/noodles.jpg"
        },
        {
            id: 3,
            name: "Galaxy Fried Eggs",
            author: "Cuong Nguyen",
            image: "https://cuongbuckettutorial.s3.ap-southeast-1.amazonaws.com/fried-egg.jpg"
        },
        {
            id: 4,
            name: "Boiled Chicken Breast",
            author: "Cuong Nguyen",
            image: "https://cuongbuckettutorial.s3.ap-southeast-1.amazonaws.com/boiled-chicken.jpg"
        }
    ]);
   
    return (
        <>
            <div>
                <h1 className="m-4">Recipes Lists</h1>
                <ul className="grid grid-cols-4 grid-flow-col gap-4">
                    {recipesList?.map((item, index) => (
                        <div key={index} className=" max-w-xs rounded-lg overflow-hidden shadow-xl cursor-pointer transition-all duration-500 hover:scale-[1.02]">
                            <div className="w-full h-[300px]">                          
                                <img className="w-full h-full object-cover" src={item.image} alt="Food" />
                            </div>
                            <div className="px-4 py-4">
                                <div className="font-bold text-xl mb-2">Chef: {item.author}</div>
                                <p className="text-gray-700 text-base">Explore this recipe now!</p>
                                <div className="mt-4 flex justify-end">
                                    <button                               
                                        className="w-full p-2 rounded bg-[#3E3E3E] transition-all outline-none border-none duration-300 hover:bg-[#F2A340] text-white text-sm cursor-pointer"
                                    >Save Recipe</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    );
}