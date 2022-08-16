import { createSelector } from "reselect";

import { useAppSelector } from "../../hooks";
import { makeSelectAnimePage } from "./selectors"

import { Container, ItemContainer, Cover, Title } from './styledComponents.js'

const stateSelector = createSelector(
  makeSelectAnimePage, 
  (animePage) => ({
    animePage
  })
)

function TrendingAnime() {
  const { animePage } = useAppSelector(stateSelector)

  const isEmptyAnimePage = !animePage || !animePage.media || animePage.media.length === 0

  if (isEmptyAnimePage) return <div>Loading...</div>

  return (
    <Container>
      {animePage && animePage.media && animePage.media.map(anime => (
        <ItemContainer key={anime?.id}>
          <Cover>
            <img src={anime?.coverImage?.extraLarge || ""} alt="anime-cover" />
          </Cover>
          <Title>
            {anime?.title?.english}
          </Title>
          <h5>Average Score: {anime?.averageScore}</h5>
        </ItemContainer>
      ))}
    </Container>
  )
}

export default TrendingAnime