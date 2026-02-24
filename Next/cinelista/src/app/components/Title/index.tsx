import style from "./Title.module.css"

type Props = {
    title : string
}

export const Title = ({title} : Props) =>{
    return(
        <h2 className={style.title}>{ title }</h2>
    );
}