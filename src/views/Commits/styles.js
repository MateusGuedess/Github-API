import styled from 'styled-components'

export const StyledBar = styled.div`
    display: flex;
    align-items: center;
    background: white;
    width: 100%;
    justify-content: start;
    box-shadow: 0px -7px 7px 5px;
    margin-bottom: 1%;
` 

export const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    background: #a29bfeb8;
`

export const StyledItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 0px;
    height: 70px;
    background: #6c5ce7;
    border: 1px solid #00000021;
    border-radius: 3px;
    align-items: center;
    width: 70%;
    margin-top: 0.5%
`