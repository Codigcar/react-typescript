import { TextareaAutosize } from '@material-ui/core'

type Props = {
    name:string;
    value:string;
    onChange:any;
    error:any;
}

export const TextAreaC = ({name, value,onChange, error=""}:Props) => {
    return (
        <TextareaAutosize
            aria-label="minimum height"
            minRows={5}
            placeholder="Escribe tu consulta..."
            style={{ width: "100%" }}
            name={name}
            value={value}
            onChange={onChange}
            // {...(error && { error: true, helpertext: error })}
            
        />
    )
}
