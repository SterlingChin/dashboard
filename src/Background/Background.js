import React from 'react';
import styled from '@emotion/styled';

const BackgroundContainer = styled('div')`
    background-color: #000000;
    height: 100vh;
    width: 100vw;
    img{
        height: 100vh;
    }
`
BackgroundContainer.displayName = 'BackgroundContainer'

export const Background = () => {
    return (
        <BackgroundContainer>
            <img src={'https://images.unsplash.com/photo-1548246854-286599c9f59a?ixlib=rb-1.2.1&auto=format&fit=crop&w=3294&q=80'} alt={'moon'}/>
        </BackgroundContainer>
    );
};

export default Background
