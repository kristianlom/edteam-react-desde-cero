import React from "react"

const History = ({match, location, history}) => (
    <div>
        Match => {JSON.stringify(match)}<br/>
        Location => {JSON.stringify(location)} <br/>
        History => {JSON.stringify(history)}
    </div>
)

export default History
