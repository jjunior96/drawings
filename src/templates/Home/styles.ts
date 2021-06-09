import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    height: calc(100vh - ${theme.grid.header});
    margin: 0 auto;
    padding-top: ${theme.grid.header};
  `}
`;

export const Grid = styled.div`
  width: 100%;
`;

export const Drawn = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${theme.spacings.xsmall};

    & + div {
      margin-top: ${theme.spacings.xsmall};
    }

    img {
      /* width: 100px; */
      /* height: 100px; */
    }
  `}
`;
