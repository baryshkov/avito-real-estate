import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../../apiService/apiService';
import Spinner from '../Spinner';

const ApartmentPage = ({ id }) => {
  const apiService = new ApiService();

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
      setLoading(false);
    };
    fetchData();
  }, []);
  document.title = apartmentData.title;


  return (
    <div className="apartment-container">
      <Link to="/">Назад</Link>
      {(loading && <Spinner />) ||
        (apartmentData && (
          <>
            <div className="apartment__title">
              <h1>{apartmentData.title}</h1>
            </div>
            <div className="apartment__photo">
              <img src={apartmentData.images[0]} alt={apartmentData.title} />
            </div>
            <div className="apartment__adress">{apartmentData.address}</div>
            <div className="apartment__description">
              <span className="name">{apartmentData.sellerName}</span>
              {apartmentData.description}
            </div>
            <div className="price">{apartmentData.price}</div>
          </>
        ))}
    </div>
  );
};

export default ApartmentPage;
