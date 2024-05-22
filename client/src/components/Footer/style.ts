import styled from 'styled-components';

export const FooterContainer = styled.div`
  background: ${(props) => props.theme.color.darkGrey};
  color: ${(props) => props.theme.color.lightGrey};
  padding: 5rem;
  flex-basis: 20svh;
  flex-shrink: 0;
`;
