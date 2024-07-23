import styled from 'styled-components';

const FlexText = styled.span`
  font-size: ${({ $size }) => $size || 16}px;
  width: fit-content;
  font-weight: ${({ $bold }) => ($bold && 'bold') || 'normal'};
  ${({ $monospace }) =>
    $monospace &&
    `
    font-family: monospace;
  `}
`;

export default FlexText;
