import { TextField } from "@fluentui/react";

export interface EmailProps {
    email: string;
    setEmail: any;
}

export const EmailInput = (props: EmailProps) => {
    const checkEmail = (input: string) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(input).toLowerCase())) {
            props.setEmail(input);
            return "";
        }
        return "Invalid email";
    }

    return (
        <div style={{ marginBottom: 10 }}>
            <TextField label={"Email"}
                type="string"
                validateOnFocusOut={true}
                onGetErrorMessage={checkEmail}
                validateOnLoad={false}
                placeholder="abc@xyz.com" />
        </div>
    );
}
