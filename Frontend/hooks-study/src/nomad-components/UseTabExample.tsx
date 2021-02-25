import React from "react";

import { useTabs, Tabs } from "../nomad-hooks";


function Tab1() { return( <div> Hi there! I'm Tab1 Content </div> ) }
function Tab2() { return( <div> Hi there! I'm Tab2 Content </div> ) }

const tabs: Tabs[] = [
    {
        title: 'tab1',
        content: <Tab1 />
    },
    {
        title: 'tab2',
        content: <Tab2 />
    }
];


function UseTabExample () {

    const {CurrentContent, changeIndex} = useTabs(0, tabs);    

    return(
        <>
            {/* Tab Header */}
            {tabs.map((tab, idx) => 
                <button onClick={() => changeIndex(idx)}> 
                    {tab.title} 
                </button>
            )}

            {/* Tab Content */}
            {CurrentContent}
        </>
    )
}

export default UseTabExample;