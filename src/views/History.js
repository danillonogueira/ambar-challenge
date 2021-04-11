import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import startFirebase from '../services/StartFirebase';
import Loader from './../components/Loader';
import { showSuccessNotification, showFailureNotification } from './../helpers/Notifications';

const History = () => {
  const { isLoading, observations } = useSelector(state => state);
  const dispatch = useDispatch();

  const startFetching = useCallback(() => {
    dispatch({ type: 'FETCH_DATA' });
  }, [dispatch]);

  const stopFetching = useCallback(() => {
    dispatch({ type: 'OBSERVATION_FETCHING_ERROR' });
  }, [dispatch]);

  const getObservations = (snapshot) => {
    return Object.entries(snapshot.val())
      .map((observation) => observation[1]);
  };

  const storeObservations = useCallback((snapshot) => {
    const newObservations = getObservations(snapshot);

    dispatch({ 
      type: 'STORE_OBSERVATIONS',
      newObservations
    });
  }, [dispatch]);

  useEffect(() => {
    startFetching();
    startFirebase()
      .then((snapshot) => {
        storeObservations(snapshot);
        showSuccessNotification();
      })
      .catch(() => {
        stopFetching();
        showFailureNotification();
      });
  }, [
    startFetching, 
    stopFetching, 
    storeObservations
  ]);

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
