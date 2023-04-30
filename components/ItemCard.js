import React from 'react';
import Image from "next/image";
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

const ItemCard = ({ src }) => {
    return (
        <LazyLoad height={200}>
            <Image
            alt="Original default"
            src={src}
            className="w-full object-cover h-96 rounded-2xl"
            width={400}
            height={400}
            />
        </LazyLoad>
    );
};

ItemCard.propTypes = {
    src: PropTypes.string
};

export default ItemCard;