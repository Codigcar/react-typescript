import { TextareaAutosize } from '@material-ui/core'

type Props = {
    name:string;
    value:string;
    onChange:any;
}

export const TextAreaC = ({name, value,onChange}:Props) => {
    return (
        <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Escribe tu consulta..."
            style={{ width: "100%" }}
            name={name}
            value={value}
            onChange={onChange}
        />
    )
}
