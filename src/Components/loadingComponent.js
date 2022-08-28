
import React from 'react'
import styled, { keyframes } from 'styled-components'

const Loading = () => {
    return (
        <Heading data-text="...">...</Heading>
    )
}

export default Loading

const keyframe = keyframes`
0% {
    max-width: 0;
}
`;

const Heading = styled.h1`
    color: rgba(0, 0, 0, .3);
    font-size: 5em;
    margin:auto;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
        &:before{
        content: attr(data-text);
        position: absolute;
        overflow: hidden;
        max-width: 7em;
        white-space: nowrap;
        color: #FFF;
        animation: ${keyframe} 2s linear;
    }
`;


