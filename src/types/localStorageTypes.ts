type LocalStorageSetValue = string;

type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
    value: LocalStorageReturnValue,
    {
        setItem: (value: LocalStorageSetValue) => void;
        removeItem: () => void;
    }
];

export type { LocalStorageSetValue, LocalStorageReturnValue, UseLocalStorage };
