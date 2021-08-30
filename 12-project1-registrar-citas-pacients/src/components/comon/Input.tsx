import TextField from '@material-ui/core/TextField';

type Props = {
    name: string;
    label?: string;
    value: any;
    onChange: any;
    type?: any;
    error:any;
}

export const InputC = ({name, label, value, onChange, type, error=""}:Props) => {
    
    return (
            <TextField
                id="outlined-basic"
                label={label}
                variant="outlined"
                className="text-field"
                autoComplete="off"
                style={{ marginBottom: 20 }}
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                {...(error && { error: true, helperText: error })}
            />
    )
}
