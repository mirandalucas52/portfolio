import { Link } from "react-router-dom";
import "./WorkItem.css";

function WorkItem(props) {
    return (
        <Link className="link" to={`/work/${props.id}`}>
            <article className="workItem">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <button>En savoir plus</button>
                <ul>
                    {props.tags.map((tags, index) => (
                        <li key={{ index }}>{tags}</li>
                    ))}
                </ul>
            </article>
        </Link>
    );
}

export default WorkItem;
