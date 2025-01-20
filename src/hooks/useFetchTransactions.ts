import { QueryObserverResult, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { client } from '../api/client';
import { Transaction } from '../types/transaction.types';

const fetchTransactions = async (): Promise<AxiosResponse<Transaction[], any>> => {
    return await client.get('');
};

export const useFetchTransactions = (): QueryObserverResult<Transaction[], any> => {
    return useQuery({
        queryFn: async () => {
            const { data } = await fetchTransactions();
            return data;
        },
        queryKey: [ 'transactions' ]
    });
};
