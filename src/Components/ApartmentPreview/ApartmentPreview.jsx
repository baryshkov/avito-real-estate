import React from 'react';
import { Link } from 'react-router-dom';

import './ApartmentPreview.css';
import PropTypes from 'prop-types';

const ApartmentPreview = ({ id, address, title, previewImage, price, onItemSelected }) => {
  return (
    <div className="preview">
      <img
        className="preview__image"
        src={previewImage}
        alt={title}
        onClick={() => onItemSelected(id)}
      />
      <div className="preview__details">
        <Link className="link" to={`/apartments/${id}`}>
          {title}
        </Link>
      </div>
      <div className="preview__price">
        <Link className="link" to={`/apartments/${id}`}>
          {price}
        </Link>
      </div>
      <div className="preview__adress">{address}</div>
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
