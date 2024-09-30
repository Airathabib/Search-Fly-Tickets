import React, { useEffect } from "react";

import { fetchTicketsAsync } from "../../handlers/ticketsHandlers/ticketsAsyncThunk";
import Header from "../Header/Header";
import Filter from "../Tariffs/Tariffs";
import Tickets from "../Tickets/Tickets";
import { useAppDispatch } from "../../hooks/hooks";
import { Sidebar } from "../SideBar/Sidebar";

import styles from './Main.module.scss'


const Home: React.FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchTicketsAsync())
	}, [dispatch]);
	return (
		<main className={styles.main}>
			<Header />
			<Sidebar />
			<Filter />
			<Tickets />
		</main>
	)
}

export default Home
