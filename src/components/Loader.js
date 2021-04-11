import styled from 'styled-components';
import { Spin } from 'antd';

const StyledLoader = styled.div`
  font-size: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <StyledLoader>
      <Spin 
        size="large"
        style={{ margin: '10px 0' }} 
      />
      <span>Buscando informações...</span>
    </StyledLoader>
  );
};

export default Loader;
