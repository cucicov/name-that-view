import './App.css'
import HomePage from "./components/HomePage.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import RotateDeviceMessage from "./components/RotateDeviceMessage.tsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, // 5 minutes
            retry: 2,
        },
    },
});


function App() {
    return (
        <>
            <RotateDeviceMessage/>
            <QueryClientProvider client={queryClient}>
                <HomePage/>
            </QueryClientProvider>
        </>
    )
}

export default App
