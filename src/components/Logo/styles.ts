import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: flex;
    align-items: center;

    h1 {
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.bold};
      letter-spacing: -2px;
    }

    svg {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`;
