const inputValues = [
    [
        [13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]
    ],
    [
        [-500, -Infinity, -1, 0, -2000, 0]
    ],
    [
        [17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]
    ],
    [
        [13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1], [17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]
    ]
];
const expectedResults = [
    {
        resultArr: [27, 5, 39, 1001],
        inputArr: [
            [13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]
        ]
    },
    {
        resultArr: [0],
        inputArr: [
            [-500, -Infinity, -1, 0, -2000, 0]
        ]
    },
    {
        resultArr: [25, 48, 21, -3],
        inputArr: [
            [17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]
        ]
    },
    {
        resultArr: [27, 5, 39, 1001, 25, 48, 21, -3],
        inputArr: [
            [13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1], [17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]
        ]
    }
]

export { inputValues, expectedResults }