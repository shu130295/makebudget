import Chart from "react-google-charts";
import { IExpense } from "./App";

interface PieChartOfExpensesProps {
    salary: number
    expenses: IExpense[];
    unallocated: number;
}

export const PieChartOfExpenses = (props: PieChartOfExpensesProps) => {
    const data = props.expenses.map(expense => {
        return [expense.label, expense.amount];
    });
    data.push(['Others', props.unallocated]);
    data.unshift(['Expenses','Amount']);
    return (
        <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={data}
            options={{
                title: 'Budget allocation',
            }}
        />);
}