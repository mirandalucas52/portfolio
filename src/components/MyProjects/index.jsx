import "./MyProjects.css";
import WorkItem from "../WorkItem/index";
import { useEffect, useState } from "react";

function MyProjects() {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("works.json");
            const data = await response.json();
            setDatas(data);
        };
        fetchData();
    }, []);

    return (
        <section className="myProjects" id="myProjects">
            <h1>
                <span>02. </span>Mes projets
            </h1>
            <div className="workItems">
                {datas.map((data) => (
                    <WorkItem key={data.id} {...data} />
                ))}
            </div>
        </section>
    );
}

export default MyProjects;
