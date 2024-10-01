

interface Dataset {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderWidth: number;
}
export const dbData = {
    lables: ['grocries','Bill','Transport','luxuries','others'],
    dataSets: [
        {
            label: 'Expense',
            data: [1200,300,150,100,50],
            backgroundColor: [
                'red',
                'blue',
                'yrllow',
                'orange',
                'purple',
            ],
            borderColor: [
                'black',
                'black',
                'black',
                'black',

            ],
            borderWidth: 1,
        }
    ]
}