import { useNavigate } from 'react-router-dom';
import './App.css';
import { useFetchTransactions } from './hooks/useFetchTransactions';
import {useDeleteTransaction} from "./hooks/useDeleteTransaction.ts";

function App() {
    const { data: transactions, isLoading, isError } = useFetchTransactions();
    const navigate = useNavigate();
    const {mutate : deleteTransaction} = useDeleteTransaction()

    return (
        <div className="w-full mt-2 items-center bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-4">Transaction List</h1>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 ml-2 rounded mb-4" onClick={() => navigate('/add-transaction')}>New Transaction</button>
            <hr className="mb-2"/>
            {
                isLoading? <h1>Loading...</h1> : isError ? <h1>Error fetching todos</h1> : (
                    <ul>
                        {transactions?.map(transaction => {
                            return <li className={`mb-2 text-xl`} key={transaction.id}>{transaction.transactionDate}
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 ml-2 rounded" onClick={() => navigate(`/edit-transaction/${transaction.id}`)}>Edit</button>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 ml-2 rounded" onClick={() => deleteTransaction(transaction.id)}>Delete</button>
                            </li>
                        })}
                    </ul>
                )
            }
        </div>
    );
}

export default App;
