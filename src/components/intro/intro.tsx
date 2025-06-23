import * as S from './intro.style.ts'
import tree from "@images/tree.png"

export const Intro = () => {

  return (
    <S.IntroStyled>
        <S.RoadBox>
            <S.Road></S.Road>
            <S.Trees>
                <S.Tree $mod={'1'}><img src={tree} alt={''}/></S.Tree>
                <S.Tree $mod={'2'}><img src={tree} alt={''}/></S.Tree>
                <S.Tree $mod={'3'}><img src={tree} alt={''}/></S.Tree>
                <S.Tree $mod={'4'}><img src={tree} alt={''}/></S.Tree>
                <S.Tree $mod={'5'}><img src={tree} alt={''}/></S.Tree>
                <S.Tree $mod={'6'}><img src={tree} alt={''}/></S.Tree>
            </S.Trees>
        </S.RoadBox>
    </S.IntroStyled>
  )
}

export default Intro
