import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ApiService from '../../apiService/apiService';
import Spinner from '../Spinner';
import './ApartmentPage.css';

const ApartmentPage = ({ id }) => {
  const apiService = new ApiService();

  const [imgIndex, setImgIndex] = useState(0);
  const [imgLength, setImgLength] = useState(1);
  const [apartmentData, setApartmentData] = useState({
    id: 0,
    address: '',
    title: 'Avito Real Estate',
    price: 0,
    description: '',
    sellerName: '',
    images: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await apiService.getItem(id);
      setApartmentData(data[0]);
      setImgLength(data[0].images.length);
      setLoading(false);
    };
    fetchData();
    // eslint-disable-next-line
  }, []);
  document.title = apartmentData.title;

  const nextImg = () => {
    if (imgIndex === imgLength - 1) {
      setImgIndex(0);
    } else {
      setImgIndex(imgIndex + 1);
    }
  };

  const prevImg = () => {
    if (imgIndex === 0) {
      setImgIndex(imgLength - 1);
    } else {
      setImgIndex(imgIndex - 1);
    }
  };

  return (
    <div className="container">
      <Link to="/" className="goback">
        ⟵ Назад
      </Link>
      {(loading && <Spinner />) ||
        (apartmentData && (
          <div className="apartment">
            <div className="apartment__title">
              <h1>{apartmentData.title}</h1>
            </div>
            <div className="apartment__gallery">
              <button className="button prevImage" type="button" onClick={() => prevImg(imgIndex)}>
                ❮
              </button>
              <img
                className="apartment__gallery-image"
                src={apartmentData.images[imgIndex]}
                alt={apartmentData.title}
              />
              <button className="button nextImage" type="button" onClick={() => nextImg(imgIndex)}>
                ❯
              </button>
            </div>
            <div className="apartment__description">
              <span className="address">{apartmentData.address}</span>
              <span className="price">{apartmentData.price}</span>
              <blockquote className="description">
                {apartmentData.description}
                <p className="name">{apartmentData.sellerName}</p>
              </blockquote>
            </div>
          </div>
        ))}
    </div>
  );
};

ApartmentPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ApartmentPage;
