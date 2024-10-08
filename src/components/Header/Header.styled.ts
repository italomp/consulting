import styled from 'styled-components'
import theme from '../../theme'

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 10px 40px 17px 10px;
    box-shadow: inset 0 10px 16px -10px rgb(206, 205, 209);
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    max-width: max-content;
`
export const NavOption = styled.a`
    padding: 0px 10px;
    line-height: 49px;
    color: ${theme.palette.primary[75]};
    cursor: pointer;
    &:hover {
        color: ${theme.palette.primary[25]}
    }
`