import React from 'react';
import { useState } from 'react';
import AddPatientFile from "../components/Forms/addPtientFile";
import Modal from "../components/Modal/Modal";
import PatientTable from "../components/Tabels/PatientTable";
import {useNavigate} from "react-router-dom";
import FileHistoryTable from "../components/Tabels/FileHistoryTable";
interface ManagerDeliveriesProps {
    setIsOpen?: (val: boolean) => void;
    setIsError?: (val: boolean) => void;
}
const ManageDeliveries: React.FC<ManagerDeliveriesProps> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    return (
        <div className={"w-[90%] mx-auto"}>
            <div className="flex justify-between items-center ">
                <div className={"flex items-center gap-10"}>
                    <button
                        onClick={() => navigate("/")}
                        type="button"
                        className="h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        {"<"}
                    </button>
                    <h1 className="text-4xl font-black  py-14">File Patients</h1>
                </div>
            </div>
            <FileHistoryTable />
        </div>
    );
};

export default ManageDeliveries;