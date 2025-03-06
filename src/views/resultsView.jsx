
export function ResultsView(props) {
    return (
        <div>
            <h2>Test Results</h2>
            <ul>
                {props.stats.map(displayResultsCB)}
            </ul>
        </div>
    );
}

function displayResultsCB(test) {
    return (
        <li key={test.name}>
            <strong>{test.name}</strong>: {test.time} sec
        </li>
    );
}
