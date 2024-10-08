import "./visuals/css/style.css";
import NavIcon from "./visuals/svg/Black_Burger.svg";
import SearchIcon from "./visuals/svg/Search.svg";
import AuthIcon from "./visuals/svg/Sign_in.svg";
import CartIcon from "./visuals/svg/Cart.svg";
import CatalogIcon from "./visuals/svg/Main_burger.svg";
import DropdownIcon from "./visuals/svg/Arrow_Dropdown.svg";
import ArrowRightBlue from "./visuals/svg/Arrow_Right_Blue.svg";
import ArrowRightWhite from "./visuals/svg/Arrow_Right_White.svg";
import WhatsAppGreenIcon from "./visuals/svg/WhatsApp.svg";

function App() {
	return (
		<div className="App">
			<header className="header">
				<div className="header__topline">
					<div className="frame header__container-top">
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
					<div className="frame header__container-bot">
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
			</header>
			<main className="main">
				<section className="promoslider">
					<picture className="promoslider__bg">
						<source srcSet="/img/promoslider/1600+.jpg" media="(min-width: 1600px)" />
						<source srcSet="/img/promoslider/1280-1600.jpg" media="(min-width: 1280px)" />
						<source srcSet="/img/promoslider/640-1280.jpg" media="(min-width: 640px)" />
						<img src="/img/promoslider/320-640.jpg" alt="." />
					</picture>

					<div className="promoslider__container">
						<div className="promoslider__description">
							<img className="promoslider__logo" src="/img/promoslider/logo.jpg" alt="Лого" />

							<div className="promoslider__maintext">
								Фильтр масла <br />в подарок
							</div>

							<button className="promoslider__moredetails button_reset">
								<span>Подробнее</span>
								<img src={ArrowRightBlue} alt="" />
							</button>
						</div>

						<picture className="promoslider__product">
							<source srcSet="/img/promoslider/oil_640+.png" media="(min-width: 640px)" />
							<img src="/img/promoslider/oil_320-640.png" alt="Масло New Energy 5W30" />
						</picture>

						<div className="promoslider__controlbtns">
							<button className="button_reset promoslider__btn promoslider__btn--left">
								<img src={ArrowRightWhite} alt="" />
							</button>
							<button className="button_reset promoslider__btn promoslider__btn--right promoslider__btn--active">
								<img src={ArrowRightWhite} alt="" />
							</button>
						</div>
					</div>
				</section>
				<section className="services">
					<div className="services__card frame">
						<div className="services__container">
							<h2 className="services__card-header">Бесплатный звонок</h2>
							<p className="services__card-text">На любые номера РФ</p>
							<p className="services__card-phone">8 800 555-35-35</p>
							<button className="button_reset services__button services__button--WhatsApp">
								<img src={WhatsAppGreenIcon} alt="" />
								<span className="services__button-text services__button-text--WhatsApp">WhatsApp</span>
							</button>
						</div>
					</div>
					<div className="services__card frame">
						<div className="services__container">
							<h2 className="services__card-header">Бесплатный подбор</h2>
							<p className="services__card-text">
								Мы найдем самую низкую цену на оригинальную запчасть, достойную альтернативу или
								самый дешевый аналог.
							</p>
							<button className="button_reset services__button">
								<span className="services__button-text">Заявка на подбор</span>
							</button>
						</div>
					</div>
					<div className="services__card frame">
						<div className="services__container">
							<h2 className="services__card-header">Бесплатная доставка</h2>
							<p className="services__card-text">
								Согласуем и привезём запчасти в офис или домой в удобное для Вас время.
							</p>
							<button className="button_reset services__button">
								<span className="services__button-text ">Пункты выдачи</span>
							</button>
						</div>
					</div>
				</section>
				<section className="showcase">
					<div className="showcase__card frame showcase__card--awmbrushes">
						<picture>
							<img src="/img/showcase/awm_brushes.png" alt="Щётки фирмы AWM" />
						</picture>
						<div className="showcase__card-textwrapper">
							<h2 className="showcase__card-header">Щетки AWM</h2>							
							<a className="showcase__card-link" href="#">ПОДРОБНЕЕ</a>							
						</div>
					</div>
					<div className="showcase__card frame showcase__card--dot4discount">
						<picture>
							<img src="/img/showcase/dot4discount.png" alt="ROSDOT DOT 4" />
						</picture>
						<div className="showcase__card-textwrapper">
							<p className="showcase__card-text">Весь январь</p>
							<h2 className="showcase__card-header">
								Скидка 20% <br/>
								на весь <br/>
								DOT4							
							</h2>
							<a className="showcase__card-link" href="#">ПОДРОБНЕЕ</a>							
						</div>
					</div>					
				</section>
			</main>
			<footer className="footer"></footer>
		</div>
	);
}

export default App;
