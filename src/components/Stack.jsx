import styled from 'styled-components';

export const Stack = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === 'horizontal' ? 'row' : 'column'};
  gap: ${(props) => props.$gap || 0}rem;
`;
