import React from 'react'

const ImageIcon = ({ className = '', src: image, size = 25, ...restProps }) => {
    return (
        <img
            className={className}
            alt={'icon'}
            src={image}
            style={{ width: 'auto', height: size, objectFit: 'contain' }}
            {...restProps}
        />
    );
}

export default ImageIcon;
