import styled, {} from "styled-components";


export const PauseStyled = styled.button`
    display: flex;
    position: absolute;
    top: 52rem;
    right: 52rem;
    width: 52rem;
    height: 52rem;
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: .1s ease-in-out;
    
    &:active {
        transform: scale(.9);
    }
    
    img {
        position: absolute;
        top: 0;
        left: 0;
    }
`

export const PauseImg = styled.img<{$isPause: boolean}>`
    position: absolute;
    top: 0;
    left: 0;
`

export const PauseImgPlay = styled(PauseImg)<{$isPause: boolean}>`
    opacity: ${({$isPause})=> $isPause ? 1 : 0};
`

export const PauseImgPause = styled(PauseImg)<{$isPause: boolean}>`
    opacity: ${({$isPause})=> $isPause ? 0 : 1};
`