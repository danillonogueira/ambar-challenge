import styled from 'styled-components';
import Info from './Info';
import Loader from './Loader';
import Message from './Message';

const StyledDisplay = styled.div`
  align-items: center;
  display: flex;
  height: 213px;
  justify-content: center;
  margin: 20px 0;
  text-align: center;
`;

const Display = ({ isLoading, hasObservation, observation }) => {
  return (
    <StyledDisplay>
      {(!hasObservation && !isLoading) && <Message />}
      {(isLoading) && <Loader />}
      {(hasObservation && !isLoading) && <Info observation={observation} />}
    </StyledDisplay>
  );
};

export default Display;
