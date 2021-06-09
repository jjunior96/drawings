import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.grid.header};
    background-color: ${theme.colors.blackOpacity};
    position: fixed;
    z-index: ${theme.layers.alwaysOnTop};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    width: 100%;
    max-width: ${theme.grid.container};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
`;

export const ListItem = styled.li`
  ${({ theme }) => css`
    list-style: none;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    transition: color 0.3s;
    cursor: pointer;

    & + li {
      margin-left: ${theme.spacings.small};
    }

    &:hover {
      color: ${theme.colors.gray};
    }

    /* &:last-child::after {
      content: '|';
      height: 100%;
      width: 3px;
      color: ${theme.colors.white};
      margin: 0 ${theme.spacings.small};
    } */
  `}
`;
