import { useState } from 'react';
import {
    LocalStorageSetValue,
    LocalStorageReturnValue,
    UseLocalStorage,
} from '../types/localStorageTypes';

const useLocalStorage: UseLocalStorage = (key: string) => {
    const storedValue = localStorage.getItem(key);

    const [value, setValue] = useState<LocalStorageReturnValue>(
        storedValue !== null ? storedValue : null
    );
    const setItem = (newValue: LocalStorageSetValue) => {
        localStorage.setItem(key, newValue);
        setValue(newValue);
    };
    const removeItem = () => {
        localStorage.removeItem(key);
        setValue(null);
    };

    return [value, { setItem, removeItem }];
};

export default useLocalStorage;
