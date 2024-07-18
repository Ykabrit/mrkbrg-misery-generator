import styled from 'styled-components';

const FlexText = styled.span`
  font-size: ${(props) => props.$size || 11}px;
  width: fit-content;
`;

export default FlexText;
