import React from "react";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { TransactionInput, Transaction } from './types/transaction.types';

type Props = {
    action: string;
    transaction: Transaction | undefined;
    handleSubmit: (values: TransactionInput) => void;
};

export default function TransactionForm({ transaction, handleSubmit, action }: Props) {
    return (
        <Formik
            initialValues={{
                amount: transaction? transaction.amount : 0,
                merchant: transaction ? transaction.merchant: '',
                username: transaction ? transaction.username: '',
                transactionDate: transaction? transaction.transactionDate : '',
            }}
            validationSchema={yup.object({
                amount: yup.number().required('Amount is required'),
                merchant: yup.string().required('Merchant is required'),
                username: yup.string().required('Username is required'),
                transactionDate: yup.string().required('Transaction Date is required'),
            })}
            onSubmit={(values: TransactionInput) => handleSubmit(values)}
        >
            <Form>
                <div className="mb-2">
                    <label htmlFor="amount" className="mr-2">
                        Amount
                    </label>
                    <Field
                        name="amount"
                        type="number"
                        id="amount"
                        className="shadow appearance-none border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <ErrorMessage name="amount" component="span" className="text-red-500" />
                </div>

                <div className="mb-2">
                    <label htmlFor="merchant" className="mr-2">
                        Merchant
                    </label>
                    <Field
                        name="merchant"
                        type="string"
                        id="merchant"
                        className="shadow appearance-none border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <ErrorMessage name="merchant" component="span" className="text-red-500" />
                </div>

                <div className="mb-2">
                    <label htmlFor="username" className="mr-2">
                        Tenpo User
                    </label>
                    <Field
                        name="username"
                        type="string"
                        id="username"
                        className="shadow appearance-none border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <ErrorMessage name="username" component="span" className="text-red-500" />
                </div>

                <div className="mb-2">
                    <label htmlFor="transactionDate" className="mr-2">
                        Transaction Date
                    </label>
                    <Field
                        name="transactionDate"
                        type="date"
                        id="transactionDate"
                        className="shadow appearance-none border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <ErrorMessage name="transactionDate" component="span" className="text-red-500" />
                </div>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 ml-2 rounded">
                    {action}
                </button>
            </Form>
        </Formik>
    );
}
