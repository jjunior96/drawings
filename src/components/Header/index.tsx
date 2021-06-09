import Logo from 'components/Logo';

import * as S from './styles';

const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <Logo />

        <S.Nav>
          <S.List>
            <S.ListItem>Home</S.ListItem>
            <S.ListItem>About me</S.ListItem>
            <S.ListItem>More</S.ListItem>
          </S.List>
        </S.Nav>
      </S.Content>
    </S.Container>
  );
};

export default Header;
