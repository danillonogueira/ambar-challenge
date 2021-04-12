import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
// import startFirebase from '../services/StartFirebase';
import Loader from './../components/Loader';
// import { showSuccessNotification, showFailureNotification, showUpdateNotification } from './../helpers/Notifications';
// import Observations from './../components/Observations';
import styled from 'styled-components';
import { Table } from 'antd';
import { db } from './../services/Firebase';


const StyledHistory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const tableColumns = [
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

  // const stopFetching = useCallback(() => {
  //   dispatch({ type: 'OBSERVATION_FETCHING_ERROR' });
  // }, [dispatch]);

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
    db.ref('observations')
      .on('value', (snapshot) => {
        storeObservations(snapshot);
      });
  }, [
    startFetching, 
    storeObservations
  ]);

  return (
    <StyledHistory>
      {isLoading && <Loader />}
      {
        !isLoading && (
          <Table 
            pagination={{ pageSize: 10 }} 
            columns={tableColumns}
            dataSource={observations} 
          />
        )
      }
    </StyledHistory>
  );
}

export default History;
