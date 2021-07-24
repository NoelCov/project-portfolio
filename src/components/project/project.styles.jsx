import styled from "styled-components"

export const ProjectContainer = styled.div`
  display: flex;
  padding: 2vh 5vw;
  align-items: center;
  text-align: center;
  flex-direction: column;
  text-decoration: none;
  max-width: 98vw;
  min-height: 400px;
  border: 1.8px solid white;
  border-radius: 3px;
  color: white;

  @media screen and (min-width: 1250px) {
    max-width: 50vw;
    padding: 5vh 2vw;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  max-height: 45vh;

  @media screen and (min-width: 1250px) {
    position: relative;
    width: auto;
    height: 100%;
  }
`

export const Image = styled.img`
  position: relative;
  height: 100%;
`

export const ProjectTitleContainer = styled.h2`
  margin-top: 5vh;
  font-size: 18px;
  color: #bb86fc;

  @media screen and (min-width: 750px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1250px) {
    margin-top: 5vh;
    font-size: 30px;
  }
`

export const TextContainer = styled.div`
  font-size: 14px;
  margin-bottom: 3vh;

  @media screen and (min-width: 750px) {
    font-size: 16px;
    padding: 0 5vw;
    margin-bottom: 5vh;
  }

  @media screen and (min-width: 1250px) {
    font-size: 20px;
    width: 80%;
  }
`
export const ViewProjectLink = styled.a`
  margin-top: auto;
  color: #bb86fc;

  &: hover {
    color: gray;
  }
`
