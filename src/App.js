import React from 'react';
import styled from '@emotion/styled'
import Background from './Background/Background'

const AppContainer = styled('div')`
  text-align: center;
`
AppContainer.displayName = 'AppContainer'

function App() {
  return (
    <AppContainer className="App">
      <Background />
    </AppContainer>
  );
}

export default App;
