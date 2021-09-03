import { Button } from "@material-ui/core"

type Props = {
    title: string;
}

export const ButtonC = ({title}:Props) => {
    return (
        <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ width: "100%", marginTop: 20 }}
        >{title}</Button>
    )
}
