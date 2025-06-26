import * as S from './pause.style.ts'

import buttonPause from "@images/buttons/button_pause.svg"
import buttonPlay from "@images/buttons/button_play.svg"
import {useEffect, useState} from "react";

export const Pause = ({onPlay, onPause}) => {
    const [isPause, setIsPause] = useState(false);

    useEffect(() => {
        if(isPause) {
            onPlay()
        } else {
            onPause()
        }
    }, [isPause]);

    return (
        <S.PauseStyled onClick={()=> setIsPause(p=> !p)}>
            <S.PauseImgPlay $isPause={isPause} src={buttonPlay} alt={''}/>
            <S.PauseImgPause $isPause={isPause} src={buttonPause} alt={''}/>
        </S.PauseStyled>
    )
}

export default Pause
