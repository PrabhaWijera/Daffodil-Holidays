// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const LikeComponent = () => {
    const [liked, setLiked] = useState(false);

    const handleLikeToggle = () => {
        setLiked(!liked);
    };

    return (
        <button onClick={handleLikeToggle} className="focus:outline-none">
            {liked ? (
                <AiFillHeart className="text-red-500 w-6 h-6 transition-transform transform hover:scale-110" />
            ) : (
                <AiOutlineHeart className="text-gray-500 w-6 h-6 transition-transform transform hover:scale-110" />
            )}
        </button>
    );
};

export default LikeComponent;
