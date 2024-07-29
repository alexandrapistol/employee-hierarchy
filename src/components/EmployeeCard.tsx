import { FC } from 'react';
import { Employee } from '../types';
import Subordinates from './Subordinates';
import maleAvatar from '../assets/male-avatar.svg';
import femaleAvatar from '../assets/female-avatar.svg';

interface EmployeeProps {
    employee: Employee;
}

const EmployeeCard: FC<EmployeeProps> = (props) => {
    const { name, position, salary, genType, subordinates } = props?.employee;
    let currencySalary = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return (
        <div className='employee'>
            <div className='employee-card'>
                <div className='employee-card-header'>
                    {genType === 'male' ?
                        <img src={maleAvatar} className='avatar' alt='Male avatar icon' /> : <img src={femaleAvatar} className='avatar' alt='Female avatar icon' />}
                </div>
                <div className='employee-card-body'>
                    <div className='name'>
                        {name}
                    </div>
                    <div className='position'>
                        {position}
                    </div>
                    <div>
                        {currencySalary.format(salary)}
                    </div>
                    <div className='subordinates'>
                        <Subordinates subordinates={subordinates} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeCard
