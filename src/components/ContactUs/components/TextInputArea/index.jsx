export default function TextInputArea ({value, placeholder, onChange, title, style,required, itemID, rows, cols}) {
    return(
        <>
            <span>{title}</span>
            <textarea 
                value={value}
                name={name} 
                itemID={itemID}
                placeholder={placeholder} 
                onClick={onChange}
                required={required} 
                className={style}
                rows={rows}
                cols={cols}
                />
                
        </>    
    )
}