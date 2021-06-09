import Image from 'next/image';

import Header from 'components/Header';

import { GridData } from './data';
import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <S.Grid>
          {GridData.map((grid) => (
            <S.Drawn key={grid.id}>
              <Image src={grid.path} width="900" height="900" />
            </S.Drawn>
          ))}
        </S.Grid>
      </S.Content>
    </S.Container>
  );
};

export default Dashboard;
