export type DummyGeneric<T> = 
    Promise<T>;

export const brackets = {
    BracketColors: [
        {
            brackets<T>(value: T){
                return value as T;
            },
        },
        [
            {
                brackets<T>(value: T){
                    return value as T;
                },
            },
            [
                {
                    brackets<T>(value: T){
                        return value as T;
                    },
                },
            ],
        ],
    ],
};