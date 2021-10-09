import { TextField } from "@fluentui/react";

export interface SalaryProps {
    income: number;
    setIncome: any;
}

export const IncomeInput = (props: SalaryProps) => {
    const checkIncome = (input: string) => {
        if (+input > 0) {
            props.setIncome(+input);
            return "";
        }
        return "Invalid income";
    }
    return (
        <div style={{ width: '12vw' }}>
            <TextField label={"Monthly income"}
                type="number"
                validateOnFocusOut={true}
                onGetErrorMessage={checkIncome}
                validateOnLoad={false}
                suffix="INR"
                defaultValue={props.income + ""} />
        </div>
    );
}