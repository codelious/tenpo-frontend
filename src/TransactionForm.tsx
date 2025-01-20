// import React from "react";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { TransactionInput, Transaction } from './types/transaction.types';
import { useNavigate } from "react-router-dom";

type Props = {
    action: string;
    transaction: Transaction | undefined;
    handleSubmit: (values: TransactionInput) => void;
};

export default function TransactionForm({ transaction, handleSubmit, action }: Props) {
    const navigate = useNavigate();
    const handleCancel = () => {
        navigate("/");
    }

    return (
        <div className="flex justify-center items-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                <Formik
                    initialValues={{
                        amount: transaction ? transaction.amount : 0,
                        merchant: transaction ? transaction.merchant : '',
                        username: transaction ? transaction.username : '',
                        transactionDate: transaction ? transaction.transactionDate : '',
                    }}
                    validationSchema={yup.object({
                        amount: yup.number().required('El monto es requerido'),
                        merchant: yup.string().required('El comercio es requerido'),
                        username: yup.string().required('El usuario es requerido'),
                        transactionDate: yup.string().required('La fecha es requerida')
                    })}
                    onSubmit={(values: TransactionInput) => handleSubmit(values)}
                >
                    <Form>
                        <div className="mb-4">
                            <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2 text-left">
                                Monto
                            </label>
                            <Field
                                name="amount"
                                type="number"
                                id="amount"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage name="amount" component="span" className="text-red-500 text-xs italic" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="merchant" className="block text-gray-700 text-sm font-bold mb-2 text-left">
                                Comercio
                            </label>
                            <Field
                                name="merchant"
                                type="text"
                                id="merchant"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage name="merchant" component="span" className="text-red-500 text-xs italic" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2 text-left">
                                Tenpista (user)
                            </label>
                            <Field
                                name="username"
                                type="text"
                                id="username"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage name="username" component="span" className="text-red-500 text-xs italic" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="transactionDate" className="block text-gray-700 text-sm font-bold mb-2 text-left">
                                Fecha de Transacción
                            </label>
                            <Field
                                name="transactionDate"
                                type="datetime-local"
                                id="transactionDate"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage name="transactionDate" component="span" className="text-red-500 text-xs italic" />
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                {action}
                            </button>
                            <button
                                type="button"
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={handleCancel}
                            >
                                Cancelar
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}
