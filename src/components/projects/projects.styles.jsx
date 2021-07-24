import styled from "styled-components"

export const ProjectsContainerDiv = styled.div`
  padding: 15vh 2vw 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 750px) {
    padding: 10vh 5vw 0;
  }

  @media screen and (min-width: 1250px) {
    padding: 15vh 10vw 0;
  }
`

export const ProjectsTitleContainer = styled.div`
  font-size: 26px;
  margin-bottom: 5vh;
  color: #bb86fc;

  @media screen and (min-width: 750px) {
    font-size: 35px;
  }
`

export const DecorationLine = styled.hr`
  width: 40%;
  height: 3px;
  background-color: #1f1f1f;
  margin: 0 auto 30px;
`
export const ProjectsTextContainer = styled.p`
  font-size: 16px;
  color: gray;
  padding: 0 8%;
  text-align: center;

  @media screen and (min-width: 750px) {
    line-height: 30px;
    padding: 0 15%;
    font-size: 18px;
  }

  @media screen and (min-width: 1250px) {
    padding: 0 28%;
  }
`

export const ProjectsFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8vh 0 5vh;
  align-items: center;
  gap: 100px;
  text-align: center;
  color: white;

  @media screen and (min-width: 750px) {
    gap: 150px;
  }
`
