import styled from 'styled-components';

const StyledText = styled.span`
  font-size: 22px;
`;

const Message = () => {
  return (
    <div>
      <StyledText>Clique em uma cidade acima</StyledText>
      <br />
      <StyledText>para buscar a temperatura</StyledText>
    </div>
  );
};

export default Message;
