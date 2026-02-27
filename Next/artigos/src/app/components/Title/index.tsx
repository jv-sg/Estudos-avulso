type PropsTitle = {
    title: string,
    subtitulo: string
}

const Title = ({ title, subtitulo } : PropsTitle) =>{
    return(
        <div>
            <h2>{ title }</h2>
            <p>{ subtitulo }</p>
        </div>
    )
}

export default Title