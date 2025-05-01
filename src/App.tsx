import './App.css'
import HomePage from "./components/HomePage.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import RotateDeviceMessage from "./components/RotateDeviceMessage.tsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Question from "./components/Question.tsx";


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
        <BrowserRouter>
            <RotateDeviceMessage/>
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/question" element={<Question />} />
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    )
}

export default App
