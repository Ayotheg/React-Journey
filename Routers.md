#ROUTERS 

I learnt about react routers, a fascinating way to get your pages load incredibly fast without loading or looking for the pages like HTML

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "Layout.jsx"

<BrowserRouter> 
{Elements you want to appear globally}
<Routes>
<Route path="/" element={<Layout />}>
<Route index element={<Home />}>
<Route path="blog" element={<Blog />}>
<Route path="*" element={<NoPage />}>
</Route>
</Routes>
</BrowserRouter>


import {Outlets,Link} from "react-router-dom"

function Layout () {
    return(
        {Elements you want to appear in all pages}
        <Outlets/>
    );
}