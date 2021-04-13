// import { useSelector, useDispatch  } from 'react-redux';
import Loader from './../components/Loader';
import { Component } from 'react';
import styled from 'styled-components';
import { Table } from 'antd';
import { db } from './../services/Firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';
import * as Actions from './../store/Actions';

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

// class History extends Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     db.ref('observations')
//       .on('value', (snapshot) => {
//         this.props.storeObservationsAction(getObservations(snapshot));
//       });
//   }

//   render() {
//     return (
//       <StyledHistory>
//         {/* {isLoading && <Loader />} */}
//         {/* {
//           !isLoading && (
//             <Table 
//               pagination={{ pageSize: 10 }} 
//               columns={tableColumns}
//               dataSource={observations} 
//             />
//           )
//         } */}
//         <Table 
//           pagination={{ pageSize: 10 }} 
//           columns={tableColumns}
//           dataSource={this.props.observations} 
//         />
//       </StyledHistory>
//     );
//   }
// }

const History = ({ temperatures, storeObservations, startLoading }) => {
  const getObservations = (snapshot) => {
    return Object.entries(snapshot.val())
      .map((observation, index) => {
        return {
          ...observation[1],
          key: index + 1
        };
      });
  };

  useEffect(() => {
    startLoading();
    db.ref('observations')
      .on('value', (snapshot) => {
        storeObservations(getObservations(snapshot));
      });
  }, [
    startLoading,
    storeObservations
  ]); 

  return (
    <StyledHistory>
      {temperatures.isLoading && <Loader />}
      {
        !temperatures.isLoading && (
          <Table 
            pagination={{ pageSize: 10 }} 
            columns={tableColumns}
            dataSource={temperatures.observations} 
          />
        )
      }
    </StyledHistory>
  );
};

const mapStateToProps = state => ({ temperatures: state.temperatures });
const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(History);
