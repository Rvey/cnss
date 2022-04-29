import React, {useState} from 'react';
import {FetchData} from "../../Hooks/query";
import axios from "axios";
import Modal from "../Modal/Modal";


const PatientTable = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {query} = FetchData("patient")

    const sendRefundPrice = (id) => {
        setIsOpen(!isOpen);
        console.log(id)
        axios.post(`http://localhost:5000/patient/checkFile/${id}`).then(() => {
            setIsOpen(!isOpen)
        })
    }
    return (
        <div className="inline-block py-2 min-w-full ">
            {query.isLoading && <div>Loading ...</div>}
            <div className="overflow-hidden shadow-md sm:rounded-lg">
                <table className="min-w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            Name
                        </th>
                        <th scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            email
                        </th>
                        <th scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            phone
                        </th>
                        <th scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            city
                        </th>
                        <th scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            file
                        </th>
                        <th scope="col" className="relative py-3 px-6">
                            <span className="sr-only">validate</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {query && query.data?.map(
                        (driver: any) =>
                            (
                                <tr key={driver._id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{driver.firstName} {driver.lastName} </td>
                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">{driver.email}</td>
                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">{driver.phone}</td>
                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">{driver.city}</td>
                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                        <a href={driver.file} download={"file"}
                                           className={"text-blue-400 bg-gray-500 p-2 bg-opacity-20 rounded-md"}>
                                            Download file
                                        </a>
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                        {
                                            driver.status == 'pending' ?

                                                <button
                                                    type="button"
                                                    onClick={() => sendRefundPrice(driver._id)}
                                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                >
                                                    validate
                                                </button>
                                                :
                                                <button
                                                    type="button"
                                                    onClick={() => sendRefundPrice(driver._id)}
                                                    className="text-white bg-gray-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                                    disabled
                                                >
                                                    validated
                                                </button>
                                        }
                                    </td>
                                </tr>
                            )
                    )}
                    </tbody>
                </table>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Refund Price has been sent successfully"}
                   component={""}/>
        </div>
    );
};

export default PatientTable;
