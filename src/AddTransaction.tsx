import React from 'react';
import { useAddTransaction } from './hooks/useAddTransaction';
import TransactionForm from './TransactionForm.tsx';
import {Transaction} from "./types/transaction.types.ts";

export default function AddTransaction() {
    const { mutate: addTransaction } = useAddTransaction();

    return (
        <div className="w-full mt-2 items-center bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-4">New Transaction</h1>
            <TransactionForm transaction={undefined} handleSubmit={addTransaction} action="Add Transaction" />
        </div>
    );
}
