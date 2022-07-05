import { ProjectDTO } from "../dtos/ProjectDTO"

export class ProjectService {
    getProjectLisiting() : ProjectDTO[]{
        let projectDTO : ProjectDTO = { 
            projectBenefits : 8,
            projectCurrency : '$',
            projectBudget : 15000,
            projectName : 'Project 1' 
        }
        let projectDTO2 : ProjectDTO = { 
            projectBenefits : 8,
            projectCurrency : '$',
            projectBudget : 15000,
            projectName : 'Project 1' 
        }
        let projectDTO3 : ProjectDTO = { 
            projectBenefits : 8,
            projectCurrency : '$',
            projectBudget : 15000,
            projectName : 'Project 1' 
        }
        let projects : ProjectDTO[] = [projectDTO, projectDTO2, projectDTO3]
        return  projects;
    }
}