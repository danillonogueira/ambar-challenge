import styled from 'styled-components';
import Info from './Info';
import { useSelector } from 'react-redux';
import Loader from './Loader';
import Message from './Message';

const StyledDisplay = styled.div`
  height: 213px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const Display = () => {
  const { observation, isLoading, hasObservation } = useSelector(state => state.temperatures);

  return (
    <StyledDisplay>
      {(!hasObservation && !isLoading) && <Message />}
      {(isLoading) && <Loader />}
      {(hasObservation && !isLoading) && <Info observation={observation} />}
    </StyledDisplay>
  );
};

export default Display;
