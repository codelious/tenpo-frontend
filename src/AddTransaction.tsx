// import React from 'react';
import { useAddTransaction } from './hooks/useAddTransaction';
import TransactionForm from './TransactionForm.tsx';

export default function AddTransaction() {
    const { mutate: addTransaction, error } = useAddTransaction();

    return (
        <div className="w-full mt-2 items-center bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-4">Nueva Transacción</h1>
            <TransactionForm
                transaction={undefined}
                handleSubmit={addTransaction}
                action="Guardar"
                error={error}/>
        </div>
    );
}
