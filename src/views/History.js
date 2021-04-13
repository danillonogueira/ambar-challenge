import Loader from './../components/Loader';
import { Component } from 'react';
import styled from 'styled-components';
import { Table } from 'antd';
import { db } from './../services/Firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

const getObservations = (snapshot) => {
  return Object.entries(snapshot.val())
    .map((observation, index) => {
      return {
        ...observation[1],
        key: index + 1
      };
    });
};

class History extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    startedListeningToFirebase: false
  }

  componentDidMount() {
    this.props.startLoading();
    db.ref('observations')
      .on('value', (snapshot) => {
        const { startedListeningToFirebase } = this.state;

        if (!startedListeningToFirebase) {
          this.setState({ startedListeningToFirebase: true });
        }

        this.props.storeObservations({
          newObservations: getObservations(snapshot),
          startedListeningToFirebase
        });
      });
  }

  componentWillUnmount() {
    db.ref('observations')
      .off();
    this.props.stopListeningToFirebase();
  }

  render() {
    return (
      <StyledHistory>
        {this.props.temperatures.isLoading && <Loader />}
        {
          !this.props.temperatures.isLoading && (
            <Table 
              pagination={{ pageSize: 10 }} 
              columns={tableColumns}
              dataSource={this.props.temperatures.observations} 
            />
          )
        }
      </StyledHistory>
    );
  }
}

const mapStateToProps = state => ({ temperatures: state.temperatures });
const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(History);
