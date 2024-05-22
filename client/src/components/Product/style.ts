import styled from 'styled-components';

export const ProductContainer = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50px 50%;
  border: 2px solid red;
`;

export const ImageContainer = styled.div`
  grid-area: 2 / 1 / 2 / 1;
  background: var(--bright-grey);
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.div`
  flex-direction: column;
  justify-content: left;
  grid-area: 2 / 2 / 2 / 2;
  outline: red dashed 1px;
`;

export const DescriptionBox = styled.p`
  outline: red dashed 1px;
`;
