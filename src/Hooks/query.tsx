import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useMutation, useQuery, useQueryClient} from "react-query";
import axios from "axios";

export const MutateData = ({user, setIsOpen, isOpen}: any) => {
    const queryClient = useQueryClient();

    const addMutation = useMutation(
        (values) => axios.post(`http://localhost:4000/api/${user}/store`, values),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(user);
                setIsOpen(!isOpen);
            },
        }
    );

    return {addMutation};
};

export const LoginMutation = ({user, url}: any) => {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const loginMutation = useMutation(
        (values) => axios.post(`http://localhost:4000/api/${user}/login`, values),
        {
            onSuccess: async (data) => {
                navigate(`/${url}`);
            },
            onError: () => {
                setError("wrong creds");
            },
        }
    );
    return {loginMutation, error};
};

export const FetchData = (user: any) => {
    const query = useQuery(`${user}`, async () => {
        const {data} = await axios.get(`http://localhost:5000/${user}/all`);
        return data;
    });
    return {query};
};


