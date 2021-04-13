import styled from 'styled-components';
import { Spin } from 'antd';

const StyledLoader = styled.div`
  align-items: center;
  display: flex;
  font-size: 22px;
  flex-direction: column;
  justify-content: center;
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
