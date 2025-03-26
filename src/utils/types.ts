export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface UseFetchReturn {
    data: Post[] | null;
    isLoading: boolean;
    error: string | null;
    refetch: (newParams?: Record<string, string | number>) => void;
    manual: boolean;
    setManual: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FetchOptions {
    manual?: boolean;
    params?: Record<string, string | number>;
}
