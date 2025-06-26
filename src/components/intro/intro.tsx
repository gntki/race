import * as S from './intro.style.ts'
import tree from "@images/tree.png"
import Pause from "@ui/pause/pause.tsx";
import {Game} from "@controllers/game.ts";
import {useRef} from "react";

export const Intro = () => {
    const gameRef = useRef<Game>(new Game());


    return (
        <S.IntroStyled>
            <Pause onPause={gameRef.current.setPause} onPlay={gameRef.current.setPlay}/>
            <S.RoadBox>
                <S.Road>
                    <S.Car/>
                </S.Road>
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
