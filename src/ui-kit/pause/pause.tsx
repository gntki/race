import * as S from './pause.style.ts'

import buttonPause from "@images/buttons/button_pause.svg"
import buttonPlay from "@images/buttons/button_play.svg"

export const Pause = () => {

    return (
        <S.PauseStyled>
            <img id={'pause-img'} src={buttonPause} alt={''}/>
            <img id={'play-img'} src={buttonPlay} alt={''}/>
        </S.PauseStyled>
    )
}

export default Pause
