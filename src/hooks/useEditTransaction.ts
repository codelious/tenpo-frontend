import { UseBaseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { client } from '../api/client';
import { TransactionInput } from '../types/transaction.types';

const editTodo = async (transactionId: number, todo: TransactionInput): Promise<AxiosResponse<TransactionInput, any>> => {
    return await client.put(`/${transactionId}`, todo);
};

export const useEditTransaction = (
    todoId: number
): UseBaseMutationResult<AxiosResponse<TransactionInput, any>, unknown, TransactionInput, unknown> => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    return useMutation({
        mutationFn: (todo: TransactionInput) => editTodo(todoId, todo),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['transactions'] });
            navigate('/', { replace: true });
        }
    });
};
