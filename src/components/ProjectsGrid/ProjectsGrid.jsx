import "../ProjectsGrid/ProjectsGrid.css"

//ASSETS
import ft1 from '../../assets/Photo (1).svg';
import ft2 from '../../assets/Photo (2).svg';
import ft3 from '../../assets/Photo (3).svg';
import ft4 from '../../assets/Photo (4).svg';
import ft5 from '../../assets/Photo (5).svg';
import ft6 from '../../assets/Photo (6).svg';
import ft7 from '../../assets/Photo (7).svg';
import ft8 from '../../assets/Photo (8).svg';


function ProjectsGrid(){
    return(
        <>
        <section className="projects-section">
            <div className="projects-intro">
                <h1 id='projects-title'>Projetos Desenvolvidos</h1>
                <p id="projects-p">Em minha caminhada, desde então venho realizando alguns projetos utilizando </p>
            </div>
            <div className="projects-grid d-flex jc-space-between container">
                <div className="card-projects">
                    <img className="img-projects" src={ ft1 } />
                    <h3 className="card-title">Levi Cohen</h3>
                    <p>New York, USA</p>
                    <button className="like-projects" type="submit" href="/"></button>
                </div>
                <div className="card-projects">
                    <img className="img-projects" src={ ft2 } />
                    <h3 className="card-title">Julia Souza</h3>
                    <p>São Paulo, Brasil</p>
                    <button className="like-projects" type="submit" href="/"></button>
                </div>
                <div className="card-projects">
                    <img className="img-projects" src={ ft3 } />
                    <h3 className="card-title">João Silva</h3>
                    <p>Belo Horizonte, Brasil</p>
                    <button className="like-projects" type="submit" href="/"></button>
                </div>
                <div className="card-projects">
                    <img className="img-projects" src={ ft4 } />
                    <h3 className="card-title">Nora Owen</h3>
                    <p>Melbourne, Australia</p>
                    <button className="like-projects" type="submit" href="/"></button>
                </div>
                
            </div>
            <br />
            <div className="projects-grid d-flex jc-space-between container">
                <div className="card-projects">
                    <img className="img-projects" src={ ft5 } />
                    <h3 className="card-title">Sofia Carter</h3>
                    <p>Los Angeles, USA</p>
                    <button className="like-projects" type="submit" href="/"></button>
                </div>
                <div className="card-projects">
                    <img className="img-projects" src={ ft6 } />
                    <h3 className="card-title">Pedro Alves</h3>
                    <p>São Paulo, Brasil</p>
                    <button className="like-projects" type="submit" href="/"></button>
                </div>
                <div className="card-projects">
                    <img className="img-projects" src={ ft7 } />
                    <h3 className="card-title">Luana Rodriguez</h3>
                    <p>Rio de Janeiro, Brasil</p>
                    <button className="like-projects" type="submit" href="/"></button>
                </div>
                <div className="card-projects">
                    <img className="img-projects" src={ ft8 } />
                    <h3 className="card-title">Gianna	Mateo</h3>
                    <p>New York, USA</p>
                    <button className="like-projects" type="submit" href="/"></button>
                </div>
                
            </div>
        </section>

        
        </>
    )
}

export default ProjectsGrid