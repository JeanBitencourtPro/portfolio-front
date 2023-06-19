import { useState, useEffect } from "react";

export const CurriculoFetch = () => {
    const url = "/api/listar-curriculo";

    const [curriculo, setCurriculo] = useState(null);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await fetch(url, {
                method: 'GET',
                insecureHTTPParser: true
            });

            const data = await res.json();
            setCurriculo(data.data);

        } catch (error) {
            setErro(error.message);
        }
    }

    return { curriculo, erro };
};