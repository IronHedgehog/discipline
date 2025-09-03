import Container from "../container/Container";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <a className="header-link" href="">
          Картинка логотипу
        </a>
        <button className="header-button">
          <svg className="header-login-svg">
            <use href=""></use>
          </svg>
        </button>
      </Container>
    </header>
  );
};

export default Header;
