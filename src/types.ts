type GenType = 'male' | 'female';

export interface Employee {
    name: string;
    position: string;
    salary: number;
    genType: GenType;
    subordinates?: Employee[];
}
