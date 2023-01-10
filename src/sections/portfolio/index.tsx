import * as S from './style';
import { ProjectList } from './projects';
import SectionType from '../../shared/sections-type';

const Index = ({...props}) => {
    const handleStrings = (items: string[]) => {
        return items.length === 2 
            ? items.join(" & ")
            : items.join(", ")
    }

    return (
        <S.PortfolioSection id={SectionType.portfolio}>
            <h1>Portfólio</h1>
    
            {
                ProjectList.map((project, index) => (
                    <S.Project key={index}>
                        <div className="image" style={{backgroundImage: project.image}}></div>
                        <div className="description">
                            <div className="title-container">
                                <p className="label">Projeto:</p>
                                <p className="title">{project.costumer}</p>
                            </div>
                            {/* <div className="stack-container">
                                <p className="label">Tecnologias:</p>
                            </div> */}
                            <div className="description-container">
                                <p className="label">Serviço:</p>
                                <p className="servico-title">{handleStrings(project.service_type)}</p>
                                <p className="description-content">{project.description}</p>
                            </div>
                            <div className="technologies-container">
                                <p className="label">Tecnologias:</p>
                                <p className="technology-title">{handleStrings(project.stack)}</p>
                            </div>
                            { project.external_link && (
                                <div className="external-link">
                                    Acesse: <a className="link" href={project.external_link}>{project.external_link}</a>
                                </div>
                            )}
                        </div>
                    </S.Project>
                ))
            }
        </S.PortfolioSection>
    );
}

export default Index;