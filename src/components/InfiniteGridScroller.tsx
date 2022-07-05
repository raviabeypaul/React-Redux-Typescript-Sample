import * as React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import AutoAdjustCard from "./AutoAdjustCard";

export interface IInfiniteGridScrollerProps {
  list: any[];
  fetchMoreData: () => void;
  hasMore: boolean;
  cardCount : number;
  element :(data : any, index : number)=> JSX.Element | JSX.Element[];
  loader: React.ReactNode;
}

interface IInfiniteGridScrollerState {
  screenUpdated: boolean;
}
export class InfiniteGridScroller extends React.Component<
  IInfiniteGridScrollerProps,
  IInfiniteGridScrollerState
> {
  divRef: any = React.createRef();
  constructor(props: IInfiniteGridScrollerProps) {
    super(props);
    this.state = {
      screenUpdated: false,
    };
  }

  async componentDidMount() {
    window.addEventListener("resize", this.updateSize);
  }

  getRenderData() {
    let list = this.props.list;
    let newTempArr: any[][] = [];
    
    let chunkSize = this.props.cardCount;
    if (list && list.length > 0) {
      for (let i = 0; i < list.length; i += chunkSize) {
        const chunk = list.slice(i, i + chunkSize);
        newTempArr.push(chunk);
      }
    }
    return {
      finalList: newTempArr,
      chunkSIze : chunkSize
    };
  }

  public render() {
    let renderData = this.getRenderData();
    return (
      <div ref={this.divRef}>
        <InfiniteScroll
          dataLength={renderData.finalList.length}
          next={this.props.fetchMoreData}
          hasMore={true}
          loader={this.props.loader}
        >
          {renderData.finalList.map((value, index, array) => (
          <AutoAdjustCard
              key={index}
              elements={value}
              element = {this.props.element}
              indexOffset = {index * renderData.chunkSIze}
            />
          ))}
        </InfiniteScroll>
      </div>
    );
  }

  updateSize = () => {
    this.setState({
      ...this.state,
      screenUpdated: true,
    });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSize);
  }
}
