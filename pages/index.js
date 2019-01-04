import React from 'react'
import styled, { css } from 'styled-components'

const Title = styled.div`
  padding: 20px;
`

export default () => {
  return (
    <>
      <Title />
      <div css={css`padding: 20px;`} />
    </>
  );
};
