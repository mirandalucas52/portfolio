import "./Introduction.css";

function Introduction() {
    return (
        <div className="introduction">
            <h1>Hello, je m’appelle</h1>
            <h2>Lucas Miranda.</h2>
            <h3>Je suis un développeur Frontend !</h3>
            <p>
                J'ai 21 ans et je suis spécialisé dans le frontend ainsi que le
                web design mais j'ai aussi des compétences en backend. En ce
                moment, je suis à la recherche d'un job en tant que développeur
                frontend junior !
            </p>
            <a href="https://github.com/mirandalucas52">
                <button class="monGithub">Voici mon GitHub!</button>
            </a>
        </div>
    );
}

export default Introduction;
