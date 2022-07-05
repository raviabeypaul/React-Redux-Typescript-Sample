import React, { Component } from "react";
import PropTypes from "prop-types";
import { InfiniteGridScroller } from "../components/InfiniteGridScroller";
import { ProjectDTO } from "../dtos/ProjectDTO";
import { ProjectService } from "../service/ProjectService";
import ProjectCard from "../components/ProjectCard";

interface LandingPageProps {}
interface LandingPageState {
  projects: ProjectDTO[];
  selectedIndex: number[];
}
class LandingPage extends Component<LandingPageProps, LandingPageState> {
  constructor(props: LandingPageProps) {
    super(props);
    this.state = {
      projects: [],
      selectedIndex: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    let projectService = new ProjectService();
    let projects = projectService.getProjectLisiting();
    this.setState({
      ...this.state,
      projects: projects,
    });
  };

  setSelectedIndex = (data: any, index: number) => {
    console.log("Selected index = " + index);
    let arr = this.updateSelectedIndex(index)
    this.setState( {
        ...this.state,
        selectedIndex : arr
    })
  };

  updateSelectedIndex =(index : number)=> {
    let finalArr : number []
     for(let i=0;i < this.state.selectedIndex.length; i++){
       if(this.state.selectedIndex[i] === index){
        return [...this.state.selectedIndex.slice(0, i), ...this.state.selectedIndex.slice(i + 1)]
       }
     }
     finalArr =  [...this.state.selectedIndex, index]
     return finalArr;
  }

  render() {
    let cardCount = 1;
    console.log(this.state)
    return (
      <div>
        <InfiniteGridScroller
          cardCount={cardCount}
          hasMore={false}
          list={this.state.projects}
          fetchMoreData={this.fetchData}
          key={"PlanList"}
          loader={<h4></h4>}
          element={(data, _index) => {
            let selected = this.checkIndexMatch(_index)
            return (
              <ProjectCard
                project={data}
                selected={selected}
                indexNumber={_index}
                onItemSelected={this.setSelectedIndex}
              />
            );
          }}
        ></InfiniteGridScroller>
      </div>
    );
  }

  checkIndexMatch = (index : number) =>{
     for(let i=0; i< this.state.selectedIndex.length; i++){
        if(this.state.selectedIndex[i] === index){
            return true;
        }
     }
     return false;
  }
}

export default LandingPage;
