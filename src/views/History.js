import styled from 'styled-components';
import { Component } from 'react';
import * as Actions from './../store/Actions';
import { listenToFirebase, stopListeningToFirebase } from './../services/Firebase';
import { getObservationsData } from './../helpers/Filters';
import Loader from './../components/Loader';
import Observations from './../components/Observations';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const StyledHistory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class History extends Component {
  state = { startedListeningToFirebase: false }

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
    const { isLoading, observations } = this.props.temperatures;

    return (
      <StyledHistory>
        {isLoading && <Loader />}
        {!isLoading && <Observations observations={observations} />}
      </StyledHistory>
    );
  }
}

const mapStateToProps = state => ({ temperatures: state.temperatures });
const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(History);
