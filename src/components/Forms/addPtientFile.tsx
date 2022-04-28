import {Field, Form, Formik} from 'formik';
import React from 'react';

import {useNavigate} from 'react-router-dom';
import CustomSelect from './CustomSelect';

const AddPatientFile = (setIsOpen: any) => {
    let navigate = useNavigate();

    const languageOptions = [
        {
            label: "Chinese",
            value: "zh-CN"
        },
        {
            label: "English (US)",
            value: "en-US"
        },
        {
            label: "English (GB)",
            value: "en-GB"
        },
        {
            label: "French",
            value: "fr-FR"
        },
        {
            label: "Spanish",
            value: "es-ES"
        }
    ];
    // @ts-ignore
    // @ts-ignore
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                password: "",
                phone: '',
                address: '',
                city: '',
                medicine: [],
                email: '',
                file: '',
                multiLanguages: []
            }}
            onSubmit={(values: any) => {
                // let data = new FormData();
                // data.append('firstName', values.firstName);
                // data.append('lastName', values.lastName);
                // data.append('password', values.password);
                // data.append('medicine', values.medicine);
                // data.append('email', values.email);
                // data.append('file', values.file);
                // @ts-ignore
                console.log(values)

            }}
        >
            {({errors, touched, setFieldValue, values}: any) => (
                <Form>
                    {/* {error && (
                        <div className="py-2 px-3 bg-red-500 w-full text-white rounded-md flex justify-between">
                            {error} <button onClick={() => setError('')}>X</button>
                        </div>
                    )} */}

                    <div className="mt-4">
                        <label htmlFor="firstName"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            FirstName
                        </label>
                        <Field
                            type="text"
                            id="firstName"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="firstName"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="lastName"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            LastName
                        </label>
                        <Field
                            type="text"
                            id="lastName"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="lastName"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Email
                        </label>
                        <Field
                            type="text"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="email"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Phone
                        </label>
                        <Field
                            type="text"
                            id="phone"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="phone"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            medicine
                        </label>
                        {/*<Field*/}
                        {/*    type="text"*/}
                        {/*    id="medicine"*/}
                        {/*    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
                        {/*    name="medicine"*/}
                        {/*/>*/}

                        <Field
                            className="custom-select"
                            name="multiLanguages"
                            options={languageOptions}
                            component={CustomSelect}
                            placeholder="Select Medicine"
                            isMulti={true}
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            city
                        </label>
                        <Field
                            type="text"
                            id="city"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="city"
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="file"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Upload patient file
                        </label>
                        <input
                            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            id="file"
                            name="file"
                            type="file"
                            onChange={(e) => {
                                e.target.files && setFieldValue('file', e.target.files[0]);
                            }}
                        />
                    </div>

                    <div className="mt-8 flex justify-between">
                        <button
                            type="submit"
                            className="w-[12em] text-green-900 bg-white border border-green-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-500 dark:text-white dark:border-green-600 dark:hover:bg-green-700 dark:hover:border-gray-700 dark:focus:ring-green-800"
                        >
                            add Patient File
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
export default AddPatientFile;
