import styled from "styled-components";
import theme from "./theme";


export const Button = styled.button`
    height: 50px;
    width: 150px;
    background-color: ${theme.palette.primary[50]};
    border-radius: 100px;
    color: ${theme.palette.common.white};
    border: none;
    cursor: pointer;
`

export const StartSection = styled.div<{backgroundimage: string}>`
    background: url(${(props) => props.backgroundimage});
    background-size: cover;
    background-position: center;
    height: 100%;
    padding: 65px 135px;
    & .title {
        font-size: 90px;
        max-width: 690px;
        letter-spacing:-0.02em;
        line-height: 90px;
        color: ${theme.palette.secondary[50]};

    };
    & .subtitle {
        font-size: 24px;
        max-width: 380px;
        color: ${theme.palette.secondary[50]};
        margin-top: -30px;
        margin-bottom: 30px;
        font-weight: 350;
    };
    & .button {
        width: 154px
    }
`

export const ServicesSection = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 125px;
    & .title-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 30px;
        padding-top: 120px;
        & .title {
            color: ${theme.palette.primary[50]};
            text-transform: uppercase;
            font-weight: 600;
            margin: 0px;
        };
        & .cta-text {
            font-size: 36px;
            font-weight: 600;
            max-width: 350px;
            text-align: center;
            margin: 0px;
        }     
    };
    & .services-container {
        display: flex;
        justify-content: space-around;
    }
`

export const Service = styled.div`
    display: flex;
    flex-direction: column;
    color: ${theme.palette.secondary[50]};
    align-items: center;
    & .title {
        color: ${theme.palette.secondary[50]};
        font-weight: 600;
        font-size: 18px;
        margin: 0px;
        padding-top: 15px;
    };
    & .subtitle {
        font-weight: 400;
        max-width: 285px;
        text-align: center;
        margin: 0px;
        padding-top: 10px;
    }
`