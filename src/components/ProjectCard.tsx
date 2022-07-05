import { ProjectDTO } from "../dtos/ProjectDTO";

interface ProjectCardProps {
  project: ProjectDTO;
  selected: Boolean;
  onItemSelected: (data: any, index: number) => void;
  indexNumber: number;
}

export const ProjectCard = (props : ProjectCardProps)=>{
    return (
      <div style={{
        padding : 8
      }}
        onClick={() => {
          props.onItemSelected(props.project, props.indexNumber);
        }}
      >
        Name = {props.project.projectName} budget ={" "}
        {props.project.projectBudget} Benefits ={" "}
        {props.project.projectBenefits}
        Selected = {props.selected ? " Yes " : " No"}
      </div>
    );
  
}

export default ProjectCard;
