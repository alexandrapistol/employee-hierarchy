import { FC } from 'react'
import { Employee } from '../types';
import EmployeeCard from './EmployeeCard';

interface SubordinatesProps {
    subordinates?: Employee[] | [];
}

const Subordinates: FC<SubordinatesProps> = (props) => {
    const { subordinates } = props;
    return (
        <>
            {
                subordinates?.map((emp, index) => {
                    return <EmployeeCard key={index} employee={emp} />
                })
            }
        </>
    )
}

export default Subordinates
