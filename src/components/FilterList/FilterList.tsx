import React from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectFilters } from "../../handlers/selectors/filterSelector";
import { CustomListProps } from "../../interfaces/interfaces";
import checkMark from '../../assets/images/ok.png';
import { setAirlines, setStops } from "../../handlers/filters/filterSlice";

import styles from './FilterList.module.scss'

const CustomList: React.FC<CustomListProps> = ({ ...props }) => {
	const filters = useAppSelector(selectFilters);
	const dispatch = useAppDispatch();

	const handleFilterChange = (item: string | number) => {
		let normalizedItem: string | number = '';

		if (typeof item === 'string') {
			normalizedItem = item.normalize();
			if (props.label === 'company') {
				const updatedAirlines = filters.airlines.includes(normalizedItem)
					? filters.airlines.filter((airline: string) => airline !== normalizedItem)
					: [...filters.airlines, normalizedItem];

				dispatch(setAirlines(updatedAirlines));
			}
		} else {
			normalizedItem = item;
			const updatedStops = filters.stops.includes(normalizedItem)
				? filters.stops.filter((stop: number) => stop !== normalizedItem)
				: [...filters.stops, normalizedItem];

			dispatch(setStops(updatedStops));
		}
	};

	return (
		<div className={styles.sidelist}>
			<div className={styles.sidelist__title}>{props.title}</div>
			{props.list &&
				props.list.map((item, index) => (
					<div className={styles.sidelist__item} key={`${index}-${props.random}`}>
						<input
							type={props.type}
							id={`${index}-${props.random}`}
							name={`sidelist-${index}-${props.random}`}
							value={`${props.label === 'stops' ? index : item}`}
							onChange={() => handleFilterChange(props.label === 'stops' ? index : item)}
							checked={
								props.label === 'stops'
									? filters.stops.includes(index)
									: filters.airlines.includes(item)
							}
						/>
						<label htmlFor={`${index}-${props.random}`} className={styles.sidelist__item_label}>
							<div
								className={
									props.label === 'stops'
										? styles.sidelist__item_checkbox
										: styles.sidelist__item_radio
								}
							>
								<img src={checkMark} alt='ok' width={15} height={15} />
							</div>
							<span>{item}</span>
						</label>
					</div>
				))}
		</div>
	);
};

export default CustomList;
