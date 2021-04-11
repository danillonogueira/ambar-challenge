import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import startFirebase from '../services/StartFirebase';
import Loader from './../components/Loader';
import { showSuccessNotification, showFailureNotification } from './../helpers/Notifications';
// import Observations from './../components/Observations';
import styled from 'styled-components';
import { Table } from 'antd';


const StyledHistory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const columns = [
  {
    title: 'Cidade',
    dataIndex: 'city',
    key: 'city'
  },
  {
    title: 'Temperatura',
    dataIndex: 'temp',
    key: 'temp'
  },
  {
    title: 'Mínima',
    dataIndex: 'min',
    key: 'min'
  },
  {
    title: 'Máxima',
    dataIndex: 'max',
    key: 'max'
  }
];

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
      .map((observation, index) => {
        return {
          ...observation[1],
          key: index + 1
        };
      });
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
    <StyledHistory>
      {isLoading && <Loader />}
      {!isLoading && <Table pagination={{ pageSize: 10 }}columns={columns} dataSource={observations} />}
    </StyledHistory>
  );
}

export default History;
