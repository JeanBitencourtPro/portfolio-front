import { useState, useEffect } from "react";

export const CurriculoFetch = () => {
    const url = "http://127.0.0.1:8000/api/listar-curriculo";
    const headerRequest = {
        'Access-Control-Allow-Headers': '*'
    };

    const [curriculo, setCurriculo] = useState(null);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await fetch(url, { method: 'GET', headers: headerRequest });
            const data = await res.json();
            setCurriculo(data.data);
        } catch (error) {
            setErro(error.message);
        }
    }

    return { curriculo, erro };
};