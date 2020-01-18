import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ApiService from '../../apiService/apiService';
import ApartmentPreview from '../ApartmentPreview';
import Spinner from '../Spinner';
import './AllApartments.css';

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
    // eslint-disable-next-line
  }, []);
  document.title = 'Avito Real Estate';
  return (
    <div className="apartments-container">
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

AllApartments.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(AllApartments);
