import { IProps } from './types';
import { Container } from './styledComponents'

import TrendingAnime from '../../components/TrendingAnime';

import { useFetchAnimePage } from '../../utils/hooks/fetchHooks'

function HomePage(props: IProps) {
  useFetchAnimePage(0, 20)

  return (
    <Container>
      <h1>Trending Anime</h1>
      <TrendingAnime />
    </Container>
  )
}

export default HomePage