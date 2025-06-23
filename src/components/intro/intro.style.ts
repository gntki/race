import styled, {css} from "styled-components";

import roadPart from "@images/road-part.png"

export const IntroStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100vh;
    background: green;
`

export const RoadBox = styled.div`
    position: relative; 
    width: 500rem;
    height: 100vh;
    background: #213547;;
`

export const Road = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: url(${roadPart}) repeat-y bottom/100% auto;
`

export const Trees = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

export const Tree = styled.div<{$mod: string}>`
    position: absolute;
    width: 350rem;
    
    
    ${({$mod})=> $mod==='1' && css`
        top: -10%;
    `}
    ${({$mod})=> $mod==='2' && css`
        top: 30%;
    `}
    ${({$mod})=> $mod==='3' && css`
        top: 70%;
    `}
    ${({$mod})=> $mod==='4' && css`
        top: -10%;
    `}
    ${({$mod})=> $mod==='5' && css`
        top: 30%;
    `}
    ${({$mod})=> $mod==='6' && css`
        top: 70%;
    `}

    ${({$mod})=> ($mod==='1' || $mod==='2' || $mod==='3') && css`
        left: 0;
        & img {
            transform: translate(-90%,0%);
        }
    `}
    ${({$mod})=> ($mod==='4' || $mod==='5' || $mod==='6') && css`
        right: 0;
        & img {
            transform: translate(90%,0%) rotateY(.5turn);
        }
    `}
`