import React, {useState} from "react"

const ListItem = ({q,a}) => {
    const [active, setActive] = useState(false)
    
    return (
        <div>
            <p className={`faqs-question ${active ? 'active': ''}`} onClick={()=>active ? setActive(false) : setActive(true)}>{q}</p>
            <p className={`faqs-answer ${active ? 'show': 'hide'}`}>{a}</p>
        </div>
    )

}

export default ListItem