
import { Employee } from "../types";



export const employersData: Employee = {
    name: 'Alice',
    position: 'CEO',
    salary: 100,
    genType: 'female',
    subordinates: [
        {
            name: 'Bob',
            position: 'CTO',
            salary: 90,
            genType: 'male',
            subordinates: [
                {
                    name: 'Carol',
                    position: 'QA',
                    salary: 50,
                    genType: 'female',
                    subordinates: []
                },
                {
                    name: 'John',
                    genType: 'male',
                    position: 'Frontend Developer',
                    salary: 60,
                    subordinates: []
                },
                {
                    name: 'Emy',
                    genType: 'female',
                    position: 'Backend Developer',
                    salary: 70,
                    subordinates: []
                }
            ],
        },
        {
            name: 'George',
            genType: 'male',
            position: 'Support Manager',
            salary: 80,
            subordinates: [
            ]
        }
    ]
};