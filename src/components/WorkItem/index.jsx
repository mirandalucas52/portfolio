import "./WorkItem.css";

function WorkItem(props) {
    return (
        <article className="workItem">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <button>En savoir plus</button>
        </article>
    );
}

export default WorkItem;
