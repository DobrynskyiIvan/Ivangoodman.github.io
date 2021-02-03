import React, {useContext} from "react"
import {AppContext} from "../App"

const Featured = ({featured, id}) => {
    const {toggleFeatured} = useContext(AppContext)
    const cls = featured ? "yellow" : "empty"
    return (
        <span className="ui right corner label" onClick={() => toggleFeatured(id)}>
      <i className={`star icon ${cls}`} />
    </span>
    )
}
export default Featured
