import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { Spin } from 'antd';
// import getObservations from './../services/GetObservations';
import { db } from '../services/Firebase';

const History = () => {
  const { observations } = useSelector(state => state);
  const dispatch = useDispatch();

  const getNewObservations = (snapshot) => {
    return Object.entries(snapshot.val())
      .map((observation) => observation[1]);
  };

  const storeObservations = useCallback((snapshot) => {
    const newObservations = getNewObservations(snapshot);

    dispatch({ 
      type: 'STORE_OBSERVATIONS',
      newObservations
    });
  }, [dispatch]);

  useEffect(() => {
    db.ref('observations')
      .on('value', (snapshot) => {
        storeObservations(snapshot);
      });
  }, [storeObservations]);

  return (
    <>
      { 
        (observations.length === 0) && (
          <div>
            <Spin 
              size="large"
              style={{
                margin: '20px 0'
              }} 
            />
            <br />
            <span>Buscando informações da cidade...</span>
          </div>
        )
      }
      {
        observations.map((observation, index) => {
          return <ul key={index + 1}>
            <li>{ observation.city }</li>
            <li>{ observation.temp }</li>
            <li>{ observation.min }</li>
            <li>{ observation.max }</li>
          </ul>
        })
      }
    </>
  );
}

export default History;
