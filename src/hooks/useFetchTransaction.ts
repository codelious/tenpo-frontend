import { QueryObserverResult, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { client } from '../api/client';
import { Transaction } from '../types/transaction.types';

const fetchTransaction = async (transactionId: number): Promise<AxiosResponse<Transaction, any>> => {
    return await client.get(`/${transactionId}`);
};

export const useFetchTransaction = (transactionId: number): QueryObserverResult<Transaction, any> => {
    return useQuery({
        queryFn: async () => {
            const { data } = await fetchTransaction(transactionId);
            return data;
        },
        queryKey: [ 'transaction', transactionId ]
    });
};
