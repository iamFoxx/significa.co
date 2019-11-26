import styled from '@theme'

import { SmallTitle, Label as LabeBase } from '../../UI'

export const Article = styled.article`
  margin-top: 3.9em;

  a {
    color: inherit;
  }
`

export const Image = styled.div`
  position: relative;
  height: 0;
  overflow: hidden;
  padding-top: 33%;

  background-size: cover;
  background-position: center;
`

export const Content = styled.div`
  background: ${({ theme: { colors } }) => colors.background};
  padding-top: 2.5em;
  padding-right: 2.5em;
  max-width: 66%;

  transform: translateY(-50%);
`

export const Column = styled.div`
  display: flex;
  margin-bottom: 2.2em;

  > * {
    width: 50%;
  }
`

export const Title = styled(SmallTitle)``

export const Description = styled(LabeBase)`
  padding-top: 0.2em;
`

export const Detail = styled.div`
  display: flex;
  align-items: center;
`

export const Label = styled(LabeBase)`
  display: flex;

  span {
    margin: 0 0.3em;
  }

  a {
    color: inherit;
  }
`
