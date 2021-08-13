import { homeObjFive, homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../../components/Data/SolutionData'
import FeatureSection from '../../components/featureHero/FeatureSection'
import SolutionHero from '../../components/SolutionHero/SolutionHero'
import HeaderSection from './HeaderSection/HeaderSection'

function Home() {
  return (
    <>
      <HeaderSection />
      <FeatureSection />
      <SolutionHero {...homeObjOne} />
      <SolutionHero {...homeObjTwo} />
      <SolutionHero {...homeObjThree} />
      <SolutionHero {...homeObjFour} />
      <SolutionHero {...homeObjFive} />
    </>
  )
}

export default Home
