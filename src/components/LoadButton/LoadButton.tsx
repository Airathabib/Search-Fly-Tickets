import { LoadButtonProps } from '../../interfaces/interfaces';

import styles from './LoadButton.module.scss'

export const LoadButton: React.FC<LoadButtonProps> = ({ onClick }) => {
	return (
		<button className={styles.loadbutton} type='button' onClick={onClick}>
			Загрузить еще билеты
		</button>
	)
}
