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
        <a className="link" href={`${id}`} onClick={() => onItemSelected(id)}>
          {title}
        </a>
      </div>
      <div className="preview-price">
        <a className="link" href={`${id}`} onClick={() => onItemSelected(id)}>
          {price}
        </a>
      </div>
      <div className="preview-adress">{address}</div>
    </div>
  );
};

ApartmentPreview.propTypes = {
  id: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onItemSelected: PropTypes.func.isRequired,
};

export default ApartmentPreview;
