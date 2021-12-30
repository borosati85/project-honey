import styled from "styled-components";

const FooterContainer = styled.div`
    display: flex;    
    flex-wrap: wrap;
    padding: 20px;
    background-color: #555;
    color: #DDC9BC;
    justify-content: space-around;
`

const FooterColumn = styled.div`
    margin: 15px;
    max-width: 350px;
`

const IconContainer = styled.div`
    display: flex;
    gap: 10px;
    font-size: 30px;
`

export { FooterContainer, FooterColumn, IconContainer }