import { useState, useEffect } from "react";

export const CurriculoFetch = () => {
    const url = "http://127.0.0.1:8000/api/listar-curriculo";
    const headerRequest = {
        'Access-Control-Allow-Headers': '*'
    };

    const [curriculo, setCurriculo] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await fetch(url, { method: 'GET', headers: headerRequest });
            const data = await res.json();
            setCurriculo(data.data);
            setLoading(false);
        }

        fetchData();
    }, []);


    return { curriculo, loading };
};