
interface propsInterface {
    saludo:string;
    subtitulo:string;
}

export const SaludoApp = (props:propsInterface) => {
    return (
        <>
        <div className="container">
            <h1>{props.saludo}</h1>
            <p>{props.subtitulo}</p>
        </div>
        </>
    )
}
