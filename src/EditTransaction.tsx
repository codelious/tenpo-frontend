
// import React from 'react';
import { useParams } from 'react-router-dom';

import { useFetchTransaction } from './hooks/useFetchTransaction';
import { useEditTransaction } from './hooks/useEditTransaction';
import TransactionForm from './TransactionForm';


export default function EditTransaction() {
    const { id } = useParams();
    const { data: transaction, isLoading, isError, error: fetchError } = useFetchTransaction(id ? parseInt(id) : 0);

    const { mutate: editTransaction, error: editError } = useEditTransaction(id ? parseInt(id) : 0);
    return (
        <div className="w-full mt-2 items-center bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-4">Editar Transacción</h1>
            {isLoading? (
                <h1>Obteniendo transacción...</h1>
                ) : isError ? (
                    <h1>Error al obtener transacciones: {fetchError.message}</h1>
                ) :
                (
                    <TransactionForm
                    transaction={transaction}
                    handleSubmit={editTransaction}
                    action="Guardar"
                    error={editError}
                />
                ) }
        </div>
    );
}
