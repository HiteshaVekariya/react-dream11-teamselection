import React from 'react'
import { BrowserRouter,Routes,Route} from "react-dom"
const routing = () => {
    return (
        <BrowserRouter>
    <Routes>
    <Route path="/next" elemenet= {<finalTeam/>} />
    </Routes>
    </BrowserRouter>
    )
}

export default routing;