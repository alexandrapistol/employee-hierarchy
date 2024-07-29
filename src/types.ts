type genType = 'male' | 'female';

export interface Employee {
    name: string;
    position: string;
    salary: number;
    genType: genType;
    subordinates?: Employee[] | [];
}
