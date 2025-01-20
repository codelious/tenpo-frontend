import { UseBaseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { client } from '../api/client';
import { TransactionInput } from '../types/transaction.types';

const editTransaction = async (transactionId: number, transaction: TransactionInput): Promise<AxiosResponse<TransactionInput, any>> => {
    return await client.put(`/${transactionId}`, transaction);
};

export const useEditTransaction = (
    transactionId: number
): UseBaseMutationResult<AxiosResponse<TransactionInput, any>, unknown, TransactionInput, unknown> => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    return useMutation({
        mutationFn: (transaction: TransactionInput) => editTransaction(transactionId, transaction),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['transactions'] });
            navigate('/', { replace: true });
        },
        onError: (error) => {
            // console.error('Error saving transaction: ', error)
        }
    });
};
