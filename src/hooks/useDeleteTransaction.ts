import { UseBaseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { client } from '../api/client';

const deleteTransaction = async (transactionId: number): Promise<AxiosResponse<any, any>> => {
    return await client.delete(`/${transactionId}`);
};

export const useDeleteTransaction = (): UseBaseMutationResult<AxiosResponse<any, any>, unknown, number, unknown> => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (transactionId: number) => deleteTransaction(transactionId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['transactions'] });
        },
        onError: (error) => {
            console.error('Error deleting transaction: ', error)
        }
    });
};
