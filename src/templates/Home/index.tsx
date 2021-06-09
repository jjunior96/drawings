import Image from 'next/image';

import Header from 'components/Header';

import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <S.Grid>
          {/* {GridData.map((grid) => ( */}
          <S.Drawn>
            <Image src="/img/1.jpg" width="900" height="900" />
            <Image src="/img/2.jpg" width="900" height="900" />
            <Image src="/img/4.jpg" width="900" height="900" />
            <Image src="/img/5.jpg" width="900" height="900" />
            <Image src="/img/6.jpg" width="900" height="900" />
            <Image src="/img/7.jpg" width="900" height="900" />
            <Image src="/img/8.jpg" width="900" height="900" />
            <Image src="/img/9.jpg" width="900" height="900" />
            <Image src="/img/10.jpg" width="900" height="900" />
          </S.Drawn>
          {/* ))} */}
        </S.Grid>
      </S.Content>
    </S.Container>
  );
};

export default Dashboard;
