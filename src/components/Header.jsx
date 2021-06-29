import { useContext } from "react";
import styled from "styled-components";
import FilterContext from "../contexts/FilterContext";
import Menu from "./Menu";
import menuSVG from '../assets/img/menu.svg';
import closeSVG from '../assets/img/close.svg';
import rchloSVG from '../assets/img/rchlo.svg';
import riachueloSVG from '../assets/img/riachuelo.svg';
import searchSVG from '../assets/img/search.svg';

function Header() {
  // TODO importar icones como componenetes
  // TODO verificar onChange do button
  // TODO Verificar se existe uma forma de deixar mais enxuta a declaração dos styleds

  const { setFilter } = useContext(FilterContext);

  const HeaderStyled = styled.header`
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid #e0e0e0;
  `;

  const HeaderContainer = styled.div`
    margin: auto;
    width: 95%;
    max-width: 1200px;
  `;

  const HeaderDesk = styled.div`
    @media (max-width: 1200px) {
      display: none;
    }
  `;

  const HeaderDrawer = styled.div`
    width: 24px;
    opacity: 54%;
    display: none;
  `;

  const HeaderDrawerActive = styled(HeaderDrawer)`
    display: block;
  `;

  const MenuImg = styled.img``;

  const MenuTitle = styled.p`
    text-transform: lowercase;
    font-size: 0.5625rem;
    font-weight: 400;
    line-height: 0;
  `;

  const HeaderMobile = styled.div`
    display: none;
    margin-bottom: 25px;
    @media (max-width: 1200px) {
      display: flex;
      align-items: center;
    }
  `;

  const HeaderLogo = styled.h1`
    height: 70px;
    line-height: 70px;
    text-align: center;

    @media (max-width: 1200px) {
      .header__logo {
        flex-grow: 1;
      }
    }
  `;

  const HeaderImg = styled.img`
    height: 25px;
    transform: translateY(10px);
  `;

  const HeaderSearch = styled.div`
    position: relative;
  `;

  const HeaderIcon = styled.img`
    width: 24px;
    opacity: 26%;
    top: 8px;
    position: absolute;
    padding-left: 10px;
    color: rgba(0, 0, 0, 0.26);
    line-height: 40px;
  `;

  const Input = styled.input`
    height: 40px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.23);
    padding-left: 40px;

    &::hover {
      border-color: #000;
    }

    &::placeholder {
      font-size: 0.9375rem;
      font-weight: 600;
      font-family: "Open Sans";
      color: #9b9b9b;
    }
  `;

  return (
    <HeaderStyled>
      <HeaderContainer>
        <HeaderMobile>
          <HeaderDrawerActive>
            <MenuImg src={menuSVG} alt="menu" />
            <MenuTitle>menu</MenuTitle>
          </HeaderDrawerActive>
          <HeaderDrawer>
            <img src={closeSVG} alt="fechar menu" />
            <MenuTitle>fechar</MenuTitle>
          </HeaderDrawer>
          <HeaderLogo>
            <HeaderImg src={rchloSVG} alt="Logo" />
          </HeaderLogo>
        </HeaderMobile>
        <HeaderDesk>
          <HeaderLogo>
            <HeaderImg src={riachueloSVG} alt="Logo" />
          </HeaderLogo>
        </HeaderDesk>
        <HeaderSearch>
          <HeaderIcon src={searchSVG} alt="lupa" />
          <Input
            type="search"
            placeholder="O que você está procurando?"
            // onChange={(event) => setFilter(event.target.value)}
          />
        </HeaderSearch>

        <Menu />
      </HeaderContainer>
    </HeaderStyled>
  );
}

export default Header;
