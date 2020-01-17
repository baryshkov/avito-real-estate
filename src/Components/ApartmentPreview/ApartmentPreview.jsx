import React from 'react';
import './ApartmentPreview.css';
import PropTypes from 'prop-types';

const ApartmentPreview = ({ id, address, title, previewImage, price, onItemSelected }) => {
  return (
    <div className="preview">
      <img
        className="preview-image"
        src={previewImage}
        alt={title}
        onClick={() => onItemSelected(id)}
      />
      <div className="preview-details">
        <a onClick={() => onItemSelected(id)}>{title}</a>
      </div>
      <div className="preview-price">
        <a onClick={() => onItemSelected(id)}>{price}</a>
      </div>
      <div className="preview-adress">{address}</div>
    </div>
  );
};

// ApartmentPage.propTypes = {
//
// };

export default ApartmentPreview;
