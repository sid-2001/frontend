/*
This file consist the Sidebar Component.
It consist of two components :-
1) Side bar large :- For wider screen
2) Sidebar small :- collapseable
*/

// All the dependecies and components
import React from 'react'
import SideBarLarge from './SideBarLarge'
import SideBarSmall from './SideBarSmall'

function SideBar( {selected , sidebarHide} ) {

    return (
        <>
            {sidebarHide === false ? <SideBarLarge selected={selected}/> : <SideBarSmall selected={selected}/>}
        </>
    )
}

export default SideBar
