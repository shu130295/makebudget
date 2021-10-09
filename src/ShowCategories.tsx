import { DetailsList, IColumn, IconButton, SelectionMode } from "@fluentui/react";
import { IExpense } from "./App";

interface ShowCategoriesProps {
    expenses: IExpense[];
    setExpenses: any;
    unallocated: number;
}

export const ShowCategories = (props: ShowCategoriesProps) => {
    const columns: IColumn[] = [
        {
            key: 'Delete',
            name: 'Remove',
            minWidth: 70,
            maxWidth: 70,
            fieldName: '',
            onRender: (item) => {
                return (
                    <IconButton
                        title="Remove"
                        iconProps={{ iconName: 'Delete' }}
                        styles={{ root: { height: 'auto' } }}
                        onClick={(ev) => {
                            props.setExpenses(props.expenses.filter(exp => exp.id !== item.id));
                        }} 
                        disabled={item.id===-1}
                    />);
            }
        },
        {
            key: 'Category',
            name: 'Category',
            minWidth: 50,
            maxWidth: 150,
            fieldName: 'label',
        },
        {
            key: 'Amount',
            name: 'Amount',
            minWidth: 50,
            fieldName: 'amount',
        }];
        const items = [...props.expenses];
        if(props.unallocated > 0) {
            items.push({ "label": "Others", amount: props.unallocated, id:-1 } as IExpense);
        }
    return (
        <div>
            <DetailsList items={items} columns={columns} selectionMode={SelectionMode.none} />
        </div>
    );
}