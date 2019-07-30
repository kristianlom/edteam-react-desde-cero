import React from "react"

const Historial = ({match, location, history}) => (
<div>
   Match => {JSON.stringify(match)}<br></br>
    Location => {JSON.stringify(location)} <br></br>
    History => {JSON.stringify(history)}
</div>
)

export default Historial