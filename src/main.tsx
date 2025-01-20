import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddTransaction from "./AddTransaction.tsx";
import EditTransaction from "./EditTransaction.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/add-transaction',
        element: <AddTransaction/>
    },
    {
        path: '/edit-transaction/:id',
        element: <EditTransaction />
    },
    {
        path : '*',
        element : <h1>Page not found: 404</h1>
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
            <ReactQueryDevtools />
        </QueryClientProvider>
    </React.StrictMode>
);
