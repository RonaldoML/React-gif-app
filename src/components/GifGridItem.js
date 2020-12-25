
import React from 'react';
import { PropTypes } from 'prop-types';

export const GifGridItem = ({ title, url }) => {
    return (
        <div className='card animate__animated animated__fadeIn'>
            <img
                src={url}
                alt={title}
            />
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propType = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

// GifGridItem.defaultProps = {
//     title: 'Título',
//     url: 'Url'
// };