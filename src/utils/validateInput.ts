export const validateInput = (
    value: string
): { error: string; numericValue: number | null } => {
    if (value === '') {
        return { error: '', numericValue: null };
    }
    if (!/^\d+$/.test(value)) {
        return { error: 'Можно вводить только цифры', numericValue: null };
    }
    const numericValue = parseInt(value, 10);
    if (numericValue <= 0) {
        return { error: 'Значение должно быть больше 0', numericValue: null };
    }
    if (numericValue <= 100) {
        return { error: '', numericValue: numericValue };
    } else if (numericValue > 100) {
        return { error: 'Максимальное значение 100!', numericValue: 100 };
    }
    return { error: '', numericValue };
};
