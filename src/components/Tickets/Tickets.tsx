import React, { useCallback, useState } from "react";

import Ticket from '../TicketCard/TicketCard';
import { LoadButton } from "../LoadButton/LoadButton";
import { ITicket } from "../../interfaces/interfaces";
import { sortTickets } from "../../utils/utils";
import { useAppSelector } from "../../hooks/hooks";
import { selectTickets } from "../../handlers/selectors/ticketSelector";
import { selectFilters } from "../../handlers/selectors/filterSelector";

import styles from './Tickets.module.scss';

const Tickets: React.FC = () => {
	const tickets = useAppSelector(selectTickets);
	const filters = useAppSelector(selectFilters);
	const [displayedTickets, setDisplayedTickets] = useState<number>(3);


	const sortedTickets: ITicket[] = sortTickets(tickets, filters);

	const handleLoadMore = useCallback(() => {
		setDisplayedTickets(displayedTickets + 3);
	}, [displayedTickets]);

	return (
		<div className={styles.tickets}>
			{sortedTickets.length > 0 ? (
				<>
					{sortedTickets.slice(0, displayedTickets).map((ticket) => (
						<Ticket key={ticket.id} ticket={ticket} />
					))}
					{displayedTickets < sortedTickets.length && <LoadButton onClick={handleLoadMore} />}
				</>
			) : (
				<p style={{ color: 'red', textAlign: 'center' }}>По вашему запросу билеты не найдены</p>
			)}
		</div>
	);
};

export default Tickets;
