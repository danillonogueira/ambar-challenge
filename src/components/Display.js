import styled from 'styled-components';
import Message from './Message';
import Loader from './Loader';
import Info from './Info';

const StyledDisplay = styled.div`
  align-items: center;
  display: flex;
  height: 213px;
  justify-content: center;
  margin: 20px 0;
  text-align: center;
`;

const Display = ({ 
  isLoading, 
  hasObservation, 
  observation 
}) => {
  return (
    <StyledDisplay>
      {(!hasObservation && !isLoading) && <Message />}
      {(isLoading) && <Loader />}
      {(hasObservation && !isLoading) && <Info observation={observation} />}
    </StyledDisplay>
  );
};

export default Display;
