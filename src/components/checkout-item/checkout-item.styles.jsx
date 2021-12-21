import styled, { css } from "styled-components";

const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`

const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
`

const CheckoutImage = styled.img`
    width: 100%;
    height: 100%;
`

const defaultTextContainerStyles = css`
    width: 23%;
`

const NameContainer = styled.span`
    ${defaultTextContainerStyles}
`

const QuantityContainer = styled.span`
    ${defaultTextContainerStyles}
    display: flex;
`

const Arrow = styled.div`
    cursor: pointer;
`

const ValueContainer = styled.span`
    margin: 0 10px;
`

const PriceContainer = styled.span`
    ${defaultTextContainerStyles}
`

const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`

export { CheckoutItemContainer, ImageContainer, CheckoutImage, NameContainer, QuantityContainer, PriceContainer, RemoveButton, Arrow, ValueContainer }