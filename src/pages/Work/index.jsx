import React from "react";
import { useParams } from "react-router-dom";
import "./Work.css";

import datas from "../../works.json";

function Work() {
    const { id } = useParams();
    const work = datas.find((data) => data.id === id);

    return (
        <React.Fragment>
            <main>
                <section>
                    <article>
                        <img src={work.cover} alt="" />
                        <h1>{work.title}</h1>
                    </article>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Work;
