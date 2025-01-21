import './App.css';
import { useFetchTransactions } from './hooks/useFetchTransactions';
import { useDeleteTransaction } from "./hooks/useDeleteTransaction.ts";
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

function App() {
    const { data: transactions, isLoading, isError, error  } = useFetchTransactions();
    const navigate = useNavigate();
    const { mutate: deleteTransaction } = useDeleteTransaction();

    return (
        <div className="w-full mt-2 items-center bg-gray-100 min-h-screen p-4">
            <h1 className="text-4xl font-bold mb-4">Lista de Transacciones</h1>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={() => navigate('/add-transaction')}>Nueva Transacción</button>
            <hr className="mb-4" />
            {isLoading ? (
                <h1>Loading...</h1>
            ) : isError ? (
                <h1>Error al obtener transacciones: {error.message}</h1>
            ) : (
                <div className="space-y-4">
                    {transactions?.map(transaction => {
                        const formattedDate = format(new Date(transaction.transactionDate), 'dd-MM-yyyy hh:mm:ss a');
                        return    (
                                <div key={transaction.id} className="bg-white shadow-md rounded p-4">
                                    <div className="flex justify-between">
                                        <div>
                                            <p className="text-sm font-bold">ID: <span
                                                className="font-normal">{transaction.id}</span></p>
                                            <p className="text-sm font-bold">Monto: <span
                                                className="font-normal">{transaction.amount}</span></p>
                                            <p className="text-sm font-bold">Comercio: <span
                                                className="font-normal">{transaction.merchant}</span></p>
                                            <p className="text-sm font-bold">Usuario: <span
                                                className="font-normal">{transaction.username}</span></p>
                                            <p className="text-sm font-bold">Fecha de Transacción: <span
                                                className="font-normal">{formattedDate}</span></p>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                                                onClick={() => navigate(`/edit-transaction/${transaction.id}`)}
                                            >
                                                Editar
                                            </button>
                                            <button
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                                onClick={() => deleteTransaction(transaction.id)}
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
            )}
        </div>
    );
}

export default App;
