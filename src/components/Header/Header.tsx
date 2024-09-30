import logo from '../../assets/images/logo.png';
import styles from './Header.module.scss';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__logo}>
				<img src={logo} alt="logo" width={100} height={80} />
			</div>
			<h1 className={styles.header__title}>Поиск авиабилетов</h1>
		</header>
	)
}

export default Header;
