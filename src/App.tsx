import { initializeIcons } from '@fluentui/react';
import React, { useState } from 'react';
import './App.css';
import { CreateCategory } from './CreateCategory';
import { PieChartOfExpenses } from './PieChartOfExpenses';
import { IncomeInput } from './IncomeInput';
import { ShowCategories } from './ShowCategories';
import { Unallocated } from './Unallocated';
import { GenerateSheet } from './GenerateSheet';

export interface IExpense {
    id: number;
    amount: number;
    label: string;
};

function App() {
    initializeIcons();
    const [salary, setSalary] = useState(10000);
    // const [email, setEmail] = useState("");
    const [expenses, setExpenses] = useState<IExpense[]>([]);
    let unallocated = salary - expenses.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.amount;
    }, 0);
    return (
        <div className="App">
            <div className="form">
                <div className="form-elements">
                    {/* <EmailInput email={email} setEmail={setEmail} /> */}
                    <IncomeInput income={salary} setIncome={setSalary} />
                    <CreateCategory expenses={expenses} setExpenses={setExpenses} unallocated={unallocated} />
                    <ShowCategories expenses={expenses} setExpenses={setExpenses} unallocated={unallocated} />

                </div>
            </div>
            <div className="graph">
                <Unallocated unallocated={unallocated} />
                <PieChartOfExpenses salary={salary} expenses={expenses} unallocated={unallocated} />
                <div style={{display: 'flex', justifyContent:'right', marginRight: '2vw'}}>
                    <GenerateSheet expenses={expenses} unallocated={unallocated} />
                </div>
            </div>
        </div>
    );
}

export default App;
