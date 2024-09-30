import React, { useEffect, useState, useRef } from "react";
import { useOnClickOutside } from 'usehooks-ts'

import { ITicket } from "../../interfaces/interfaces";
import CustomList from "../FilterList/FilterList";
import { useAppSelector } from "../../hooks/hooks";
import { selectTickets } from "../../handlers/selectors/ticketSelector";
import { selectFilters } from "../../handlers/selectors/filterSelector";
import { propsList } from "../../interfaces/interfaces";
import Arrow from '../../assets/images/arrow.png'

import styles from './SideBar.module.scss'


export const Sidebar: React.FC = () => {
	const tickets = useAppSelector(selectTickets);
	const filters = useAppSelector(selectFilters);

	const [stops, setStops] = useState<string[]>([]);
	const [companies, setCompanies] = useState<string[]>([]);

	const [dataLoaded, setDataLoaded] = useState<boolean>(false);

	const [isFilterActive, setIsFilterActive] = useState<boolean>(false);
	const refSidebar = useRef(null);
	const handleUserClick = (): void => {
		setIsFilterActive(!isFilterActive);
	};
	const handleClickOutside = (): void => {
		setIsFilterActive(false);
	};
	useOnClickOutside(refSidebar, handleClickOutside);


	useEffect(() => {
		if (!dataLoaded && tickets.length > 0) {
			const companiesSet = new Set<string>();
			const stopsSet = new Set<string>();

			const sortedTickets: ITicket[] = [...tickets].sort((a, b) => a.stops - b.stops);

			sortedTickets.forEach((ticket) => {
				companiesSet.add(ticket.company);

				switch (ticket.stops) {
					case 0:
						stopsSet.add('Без пересадок');
						break;
					case 1:
						stopsSet.add('1 пересадка');
						break;
					case 2:
						stopsSet.add('2 пересадки');
						break;
					default:
						stopsSet.add('3 пересадки');
						break;
				}
			});

			setCompanies(Array.from(companiesSet));
			setStops(Array.from(stopsSet));
			setDataLoaded(true);
		}
	}, [tickets, dataLoaded]);

	const initialPropsListStops: propsList = {
		label: 'stops',
		title: 'Количество пересадок',
		list: stops,
		type: 'checkbox',
		random: Math.random(),
	};

	const initialPropsListCompany: propsList = {
		label: 'company',
		title: 'Компании',
		list: companies,
		type: 'checkbox',
		random: Math.random(),
	};

	return (
		<aside
			className={`${styles.sidebar} ${isFilterActive ? styles.sidebar_active : ''}`}
			ref={refSidebar}
		>
			<div className={styles.sidebar__header} onClick={handleUserClick}>
				<div className={styles.sidebar__filterresult}>
					<span>
						{filters.airlines.length > 0
							? filters.airlines.map((company: string) => company).join(', ')
							: 'Любая авиакомпания'}
					</span>
					,
					<span>
						{filters.stops.length > 0
							? `пересадок: ${filters.stops.join(', ')}`
							: 'любое кол-во пересадок'}
					</span>
				</div>
				<div className={styles.sidebar__settings} onClick={handleUserClick}>
					<span>Открыть настройки</span>
					<img src={Arrow} alt='open_settings' width={20} height={12} />
				</div>
			</div>
			<CustomList {...initialPropsListStops} />
			<CustomList {...initialPropsListCompany} />
		</aside>
	);
};
