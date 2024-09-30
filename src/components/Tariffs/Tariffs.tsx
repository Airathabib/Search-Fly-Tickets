import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setTariff } from '../../handlers/filters/filterSlice';
import { selectFilters } from '../../handlers/selectors/filterSelector';

import styles from './Tariffs.module.scss';



export default function Filter() {
	const dispatch = useAppDispatch();
	const filters = useAppSelector(selectFilters);

	const handleTariffChange = useCallback(
		(tariff: string) => {
			if (filters.tariff === tariff) {
				dispatch(setTariff(''));
			} else {
				dispatch(setTariff(tariff));
			}
		},
		[dispatch, filters.tariff],
	);

	return (
		<div className={styles.filter}>
			{[
				{ value: 'cheapest', label: 'Самый дешевый' },
				{ value: 'fastest', label: 'Самый быстрый' },
				{ value: 'optimal', label: 'Самый оптимальный' },
			].map(({ value, label }) => (
				<button
					key={value}
					className={`${styles.filter__btn} ${filters.tariff === value ? styles.filter__btn_active : ''
						}`}
					onClick={() => handleTariffChange(value)}
				>
					{label}
				</button>
			))}
		</div>
	);
}
