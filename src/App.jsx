import "./visuals/css/style.css";
import NavIcon from "./visuals/svg/Black_Burger.svg";
import SearchIcon from "./visuals/svg/Search.svg";
import AuthIcon from "./visuals/svg/Sign_in.svg";
import CartIcon from "./visuals/svg/Cart.svg";
import CatalogIcon from "./visuals/svg/Main_burger.svg";
import DropdownIcon from "./visuals/svg/Arrow_Dropdown.svg";

function App() {
	return (
		<div className="App">
			<header className="header">
				<div className="header__topline">
					<div className="header__container header__container--top">
						<nav className="header__topline-info">
							<div className="header__nav-xs">
								<img src={NavIcon} alt="Навигация" />
							</div>
							<span className="header__logo-xs">autoparts.ru</span>
						</nav>
						<div className="header__topline-toolbar">
							<div className="header__authorisation">
								<img src={AuthIcon} alt="Авторизация" />
							</div>
							<div className="header__cart">
								<img src={CartIcon} alt="Корзина" />
							</div>
						</div>
					</div>
				</div>

				<div className="header__botline">
					<div className="header__container header__container--bot">
						<div className="header__botline-search-xs">
							<img src={SearchIcon} alt="" />
							<input
								type="text"
								placeholder="Поиск товаров и артикулов"
								class="fake-mobile-search"
							/>
						</div>
						<div className="header__botline-pickpoint">
							<span>Чернышевского, 12</span>
							<img src={DropdownIcon} alt="" />
						</div>
						<div className="header__botline-phone">8-800-555-35-35</div>
						<button className="header__botline-catalog-btn">
							<img src={CatalogIcon} alt="Каталог" />
							<span>Каталог</span>
						</button>
					</div>
				</div>

				{/* <div className="header__container"></div> */}
			</header>
			<main className="main"></main>
			<footer></footer>
		</div>
	);
}

export default App;
