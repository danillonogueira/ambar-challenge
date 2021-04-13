import Loader from './../components/Loader';
import { Component } from 'react';
import styled from 'styled-components';
import { Table } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../store/Actions';
import { getObservationsData } from './../helpers/Filters';
import { listenToFirebase, stopListeningToFirebase } from './../services/Firebase';

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

class History extends Component {
  state = {
    startedListeningToFirebase: false
  }

  setListeningToFirebase() {
    this.setState({ startedListeningToFirebase: true });
  }

  startLoading() {
    this.props.startFetching();
  }

  tryToStoreObservations(payload) {
    this.props.storeObservations(payload);
  }

  componentDidMount() {
    this.startLoading();
    listenToFirebase((snapshot) => {
      const { startedListeningToFirebase } = this.state;

      if (!startedListeningToFirebase) {
        this.setListeningToFirebase();
      }

      this.tryToStoreObservations({
        newObservations: getObservationsData(snapshot),
        startedListeningToFirebase
      });
    })
  }

  componentWillUnmount() {
    stopListeningToFirebase();
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
