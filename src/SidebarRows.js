import React from 'react'
import './SidebarRows.css';

function SidebarRows({Icon,title}) {
    return (
        <div className="SidebarRows">
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRows
