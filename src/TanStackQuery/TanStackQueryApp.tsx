// import WithoutTanStackQuery from "./components/WithoutTanStackQuery.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import WithTanStakQuery from "./components/WithTanStakQuery.tsx";
// import Deduplication from "./components/Deduplication.tsx";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import RefatchInteval from "./components/RefatchInteval.tsx";
import FethMultipleQueries from "./components/FethMultipleQueries.tsx";
import MutatingData from "./components/MutatingData.tsx";
import Pagination from "./components/Pagination.tsx";
// import { StaleTime } from "./components/StaleTime.tsx";

const queryClient = new QueryClient()
const TanStackQueryApp = () => {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				{/* <Deduplication/>
				<Deduplication/> */}
				{/* <StaleTime/> */}
				{/* <RefatchInteval/> */}
				{/*<FethMultipleQueries />*/}
				{/*<MutatingData />*/}
				<Pagination />
				<ReactQueryDevtools initialIsOpen={false} />
				{/* <WithTanStakQuery/> */}
			</QueryClientProvider>
			{/* <WithoutTanStackQuery/> */}
		</>
	)
}
export default TanStackQueryApp
