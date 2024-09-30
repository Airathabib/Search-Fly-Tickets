export interface CustomListProps {
	label: string;
	title: string;
	list: string[];
	type: string;
	random: number;
};

export interface LoadButtonProps {
	onClick: () => void;
};

export interface propsList {
	label: string;
	title: string;
	list: string[];
	type: string;
	random: number;
}

export interface ITicket {
	id: string;
	from: string;
	to: string;
	company: string;
	company_logo: string;
	price: number;
	currency: string;
	time: {
		startTime: string;
		endTime: string;
	};
	date: string;
	stops: number;
}

export interface Ticket {
	ticket: ITicket;
}

export interface TicketsState {
	tickets: ITicket[];
	loading: 'idle' | 'pending' | 'succeeded' | 'failed';
	error: string | null;
}

export interface TicketTime {
	startTime: string;
	endTime: string;
}

export interface Filters {
	stops: number[];
	airlines: string[];
	tariff: string;
}

export interface FiltersState {
	stops: number[];
	airlines: string[];
	tariff: string;
}
