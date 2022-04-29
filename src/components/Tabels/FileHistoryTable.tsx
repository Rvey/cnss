import React from 'react';
import Modal from "../Modal/Modal";
import {FetchData} from "../../Hooks/query";

const FileHistoryTable = () => {
    const { query } = FetchData("patient")
    return (
        <div className="inline-block py-2 min-w-full ">
            {query.isLoading && <div>Loading ...</div>}
            <div className="overflow-hidden shadow-md sm:rounded-lg">
                <table className="min-w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            immatriculation
                        </th>
                        <th scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            refunded price
                        </th>
                        <th scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            Download File
                        </th>
                        <th scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 text-center">
                            status
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {query && query.data?.map(
                        (driver: any) =>
                            (
                                <tr key={driver._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{driver.immatriculation}</td>
                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">{driver.refundedPrice}</td>
                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                        <a href={driver.file} download={"file"} className={"text-blue-400 bg-gray-500 p-2 bg-opacity-20 rounded-md"}>
                                            Download file
                                        </a>
                                    </td>
                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap text-center dark:text-gray-400">
                                        <a href={driver.file} download={"file"} className={`text-white bg-gray-500 p-2 bg-opacity-70 rounded-md  ${driver.status == "pending" ? 'bg-yellow-400' : "bg-green-500"}`}>
                                            {driver.status}
                                        </a>
                                    </td>
                                </tr>
                            )
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FileHistoryTable;