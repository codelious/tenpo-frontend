export interface Transaction {
    id: number;
    amount: number;
    merchant: string;
    username: string;
    transactionDate: string;
}

export interface TransactionInput {
    amount: number;
    merchant: string;
    username: string;
    transactionDate: string;
}
