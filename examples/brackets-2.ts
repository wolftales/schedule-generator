export const brackets = <X>(tVal: X) => [
    [
        [
            {
                BracketColors: [
                    {
                        brackets<T>(value: T) {
                            return value as T;
                        },
                    },
                    [
                        {
                            brackets<T>(value: T) {
                                return value as T;
                            },
                        },
                        [
                            {
                                brackets<T>(value: T) {
                                    return value as T;
                                },
                            },
                        ],
                    ],
                ],
            },
        ],
    ],
    void tVal,
];