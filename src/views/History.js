import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
// import getObservations from './../services/GetObservations';
import { db } from '../services/Firebase';
import Loader from './../components/Loader';

const History = () => {
  const { isLoading, observations } = useSelector(state => state);
  const dispatch = useDispatch();

  const startFetching = useCallback(() => {
    dispatch({ type: 'FETCH_DATA' });
  }, [dispatch]);

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
    startFetching();
    db.ref('observations')
      .on('value', (snapshot) => {
        storeObservations(snapshot);
      });
  }, [startFetching, storeObservations]);

  return (
    <>
      {isLoading && <Loader />}
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
