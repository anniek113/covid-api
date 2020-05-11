import { useState, useEffect } from 'react';

export default function useStats(url) {
    const [stats, setStats] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    useEffect(() => {
        console.log('Updating Data');
        async function fetchData() {
            setLoading(true);
            setError();
            console.log('Fetching Data');
            const data = await fetch(url)
                .then(response => response.json())
                .catch(err => {
                    setError(err);
                });
            setStats(data);
            setLoading(false);
        }
        fetchData();
    }, [url]);
    return {
        stats,
        loading,
        error,
    };
}