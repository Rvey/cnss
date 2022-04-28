import React from 'react';
import { useState } from 'react';


const PatientTable = () => {
    const [isOpen, setIsOpen] = useState(false);
    const data : any = [{
        firstName: "asdasdad"
    }]
    const [PatientId, setPatientId] = useState('');
    return (
        <div className="inline-block py-2 min-w-full ">
            <div className="overflow-hidden shadow-md sm:rounded-lg">
                <table className="min-w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            Name
                        </th>
                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            email
                        </th>
                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            phone
                        </th>
                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            city
                        </th>
                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            file
                        </th>
                        <th scope="col" className="relative py-3 px-6">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {data?.map(
                        (driver : any) =>
                            !driver.verified && (
                                <tr key={driver.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{driver.firstName} {driver.lastName} </td>
                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">{driver.email}</td>
                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">{driver.license}</td>
                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">{driver.createdAt}</td>
                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">{driver.file}</td>
                                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setIsOpen(!isOpen);
                                                setPatientId(driver._id);
                                            }}
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            recruit
                                        </button>
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

export default PatientTable;
