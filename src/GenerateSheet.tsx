import { PrimaryButton } from "@fluentui/react";
import { jsPDF } from "jspdf";
import { IExpense } from "./App";
import autoTable  from 'jspdf-autotable';

interface GenerateSheetProps {
    expenses: IExpense[];
    unallocated: number;
};

export const GenerateSheet = (props: GenerateSheetProps) => {
    const body: any[] = [];
    const head = props.expenses.map((expense) => {
        return `${expense.label} (${expense.amount} INR)`;
    });
    if(props.unallocated > 0) {
        head.push(`Others (${props.unallocated} INR)`);
    }
    for(let i=0;i<20;i++) body.push([]);
    return (
        <PrimaryButton text="Generate PDF" onClick={() => {
            const doc = new jsPDF({
                orientation: "landscape",
                unit: "mm",
                format: [297,210]
              });
              autoTable(doc, {
                  headStyles: {fillColor:'#d3d3d3', textColor:'#000000' },
                  head:[head],
                  body: body,
                  theme:'grid'
                });
              doc.save("budget-sheet.pdf");
        }}/>
    );
}