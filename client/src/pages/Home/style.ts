import styled from 'styled-components';

export const HomeContainer = styled.div`
  flex-direction: column;
  font-size: ${(props) => props.theme.fontSize.logo};
  color: ${(props) => props.theme.color.darkGrey};
  background: ${(props) => props.theme.color.brightGrey};
  text-align: left;
  padding: 5rem;
  flex-basis: 100%;
`;
