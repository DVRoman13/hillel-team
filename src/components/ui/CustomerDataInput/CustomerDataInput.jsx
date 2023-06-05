export default function CustomerDataInput({type, value, placeholder, handleClick, title, style, required, itemID}) {
    return(
        <>
            <span>{title}</span>
            <input 
                type={type}
                value={value} 
                name={name} 
                itemID={itemID}
                placeholder={placeholder} 
                onClick={handleClick} 
                required={required} 
                className={style}/>
        </>    
    )
}