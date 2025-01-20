// noinspection JSIgnoredPromiseFromCall

import { UseBaseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { client } from '../api/client';
import { TransactionInput } from '../types/transaction.types';

const addTransaction = async (transaction: TransactionInput): Promise<AxiosResponse<TransactionInput, any>> => {
    return await client.post('', transaction);
};

export const useAddTransaction = (): UseBaseMutationResult<AxiosResponse<TransactionInput, any>, unknown, TransactionInput, unknown> => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    return useMutation({
        mutationFn: (transaction: TransactionInput) => addTransaction(transaction),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['transactions'] });
            navigate('/', { replace: true });
        }
    });
};
