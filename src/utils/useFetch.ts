import { useState, useEffect, useCallback } from 'react';
import { FetchOptions, Post, UseFetchReturn } from './types';

const useFetch = (url: string, options: FetchOptions = {}): UseFetchReturn => {
    const [manual, setManual] = useState<boolean>(options.manual ?? false);
    const [data, setData] = useState<Post[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [params, setParams] = useState<Record<string, string | number>>(
        options.params || {}
    );

    const fetchData = useCallback(
        async (fetchParams: Record<string, string | number>) => {
            setIsLoading(true);
            setError(null);

            try {
                const queryParams = new URLSearchParams(
                    fetchParams as Record<string, string>
                ).toString();
                const response = await fetch(`${url}?${queryParams}`);

                if (!response.ok) {
                    throw new Error('Ошибка при загрузке данных');
                }
                const result: Post[] = await response.json();
                setData(result);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError(String(err));
                }
            } finally {
                setIsLoading(false);
            }
        },
        [url]
    );

    useEffect(() => {
        if (!manual) {
            fetchData(params);
        }
    }, [fetchData, params, manual]);

    const refetch = (newParams: Record<string, string | number> = {}) => {
        setParams((prevParams) => {
            const updatedParams = { ...prevParams, ...newParams };
            return updatedParams;
        });
    };

    return { data, isLoading, error, refetch, manual, setManual };
};

export default useFetch;
