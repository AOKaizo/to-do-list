import React from "react";

const Filter = (props) => {
let {filterStatus, setFilterStatus} = props;

return(<div key="filterButtons" className="controlPanel">
<button key="allButton" className="filterButton" onClick={() => filterStatus === 'all' ? null : setFilterStatus('all')}>All</button>
<button key="activeButton" className="filterButton" onClick={() => filterStatus === 'active' ? null : setFilterStatus('active')}>Active</button>
<button key="completedButton" className="filterButton" onClick={() => filterStatus === 'completed' ? null : setFilterStatus('completed')}>Completed</button>
</div>)
}

export default Filter