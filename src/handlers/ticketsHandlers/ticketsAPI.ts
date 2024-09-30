import axios from 'axios';
import { ITicket } from '../../interfaces/interfaces';


export const fetchTickets = async (): Promise<{
	data: ITicket[];
}> => {
	const apiUrl = './src/data/dataBase.json';

	try {
		const response = await axios.get(apiUrl);

		if (response.status !== 200) {
			throw new Error(`Error: ${response.status}`);
		}

		const data: ITicket[] = response.data.tickets;

		return { data };
	} catch (error) {
		throw new Error('Ошибка загрузки билетов');
	}
};
