
export function ResultsView(props) {
    return (
        <div className="flex-box">
            <h2 className="welcome">Test Results</h2>
            <ul>
                {props.stats.map(displayResultsCB)}
            </ul>
        </div>
    );
}

function displayResultsCB(test) {
    return (
        <li className="main-text" key={test.name}>
            <strong>{test.name}</strong>: {test.time} sec
        </li>
    );
}
