export default function CustomerSubmitButton ({handleClick, title, style}){
    return(
        <button className={style} onClick={handleClick}>{title}</button>    
    )
}