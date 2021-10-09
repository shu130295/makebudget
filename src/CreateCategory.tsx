import { PrimaryButton, TextField } from "@fluentui/react";
import { useState } from "react";
import { IExpense } from "./App";

export interface CreateCategoryProps {
    unallocated: number
    expenses: IExpense[];
    setExpenses: any;
}

let expenseId = 0;

export const CreateCategory = (props: CreateCategoryProps) => {
    const maxCategoriesAllowed = 8;
    const [name, setName] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);
    const [amountTooLarge, setAmountTooLarge] = useState<boolean>(false);
    const checkAmount = (input: string) => {
        if (+input <= props.unallocated) {
            setAmountTooLarge(false);
            return "";
        } else {
            setAmountTooLarge(true);
        }
    }
    return (
        <div style={{ marginTop: '5vh' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginRight: '2vw' }}>
                    <TextField label={"Category"}
                        type="string"
                        placeholder={"Rent, Food, Investment, etc."}
                        value={name}
                        onChange={(event) => {
                            setName((event.target as HTMLInputElement).value);
                        }}
                        validateOnFocusOut={true}
                        validateOnLoad={false}
                        onGetErrorMessage={(input: string) => {
                            if (input != null && input !== "") {
                                return "";
                            }
                            if (input == null || input === "")
                                return "Category should not be empty";
                        }}
                    />
                </div>
                <div style={{ marginRight: '2vw' }}>
                    <TextField label={"Amount"}
                        type="number"
                        value={amount + ""}
                        onChange={(event) => {
                            checkAmount((event.target as HTMLInputElement).value);
                            setAmount(+(event.target as HTMLInputElement).value);
                        }}
                        onGetErrorMessage={(input: string) => {
                            if(+input <= 0)
                                return "Amount should be greater than 0."
                        }}
                        validateOnLoad={false}
                        validateOnFocusOut={true}
                    />
                </div>

            </div>
            <div>
                <PrimaryButton
                    style={{ marginTop: '2vh' }}
                    text="Add Category"
                    onClick={() => {
                        if (name === "" || name == null || amount <= 0)
                            return;
                        setName("");
                        setAmount(0);
                        props.setExpenses([...props.expenses, { id: expenseId++, label: name, amount: amount } as IExpense]);
                    }}
                    disabled={amountTooLarge || props.expenses.length > maxCategoriesAllowed} />
            </div>
            {amountTooLarge ? <div style={{ color: 'red' }}><p>Amount cannot be greated than remaining balance.</p></div> : <></>}
            {props.expenses.length > maxCategoriesAllowed ? <div style={{ color: 'red' }}><p>No more categories can be added.</p></div> : <></>}
        </div>
    );
}