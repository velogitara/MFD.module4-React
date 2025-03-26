import useFetch from './utils/useFetch';
import { useState } from 'react';

import './App.css';
import { UseFetchReturn } from './utils/types';
import { validateInput } from './utils/validateInput';

function App() {
    const [limit, setLimit] = useState<string | number>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const { data, isLoading, error, refetch, setManual }: UseFetchReturn =
        useFetch('https://jsonplaceholder.typicode.com/posts', {
            params: { _limit: 1 },
            manual: true,
        });

    const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        const { error, numericValue } = validateInput(value);
        setErrorMessage(error);
        if (value === '') {
            setLimit('');
        } else if (numericValue !== null) {
            setLimit(numericValue);
        }
    };
    const handleFetchData = () => {
        refetch({ _limit: limit });
        setManual(false);
    };
    const handleReFetchData = () => {
        refetch({ _limit: 3 });
        setManual(false);
    };

    return (
        <div>
            <input
                type='text'
                style={{ marginLeft: '10px' }}
                onChange={handleLimitChange}
                value={limit}
                min={1}
                max={100}
                placeholder='значение лимита 1 - 100'
                pattern='\d*'
                title='Можно вводить только цифры'
            />
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            <div className='card'>
                <button className='button' onClick={handleFetchData}>
                    {limit === ''
                        ? 'запросить все посты'
                        : `запросить посты с лимитом ${limit}`}
                </button>

                <button className='button' onClick={handleReFetchData}>
                    Перезапросить только 3 поста
                </button>
            </div>
            <div className='posts'>
                {!isLoading && !data && !error && (
                    <div>Нажмите кнопку, чтобы загрузить данные</div>
                )}
                {isLoading && <div>'Загрузка...'</div>}
                {error && <div>'Произошла ошибка'</div>}
                {data &&
                    !isLoading &&
                    data.map((item) => <div key={item.id}>{item.title}</div>)}
            </div>
        </div>
    );
}

export default App;
