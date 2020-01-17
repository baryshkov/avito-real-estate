import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import ApiService from '../../apiService/apiService';
import ApartmentPreview from '../ApartmentPreview';
import Spinner from '../Spinner';
import PropTypes from 'prop-types';

const AllApartments = ({ history }) => {
  const apiService = new ApiService();

  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await apiService.getAllItems();
      setItems(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  document.title = 'Avito Real Estate';
  return (
    <div className="container">
      {(loading && <Spinner />) ||
        (items &&
          items.map(item => (
            <ApartmentPreview
              key={item.id}
              onItemSelected={id => {
                history.push(`apartments/${id}`);
              }}
              {...item}
            />
          )))}
    </div>
  );
};

AllApartments.propTypes = {};

export default withRouter(AllApartments);
