interface AutoAdjustCardProps {
  elements: any[];
  element: (data: any, index: number) => JSX.Element | JSX.Element[];
  indexOffset: number;
}
const divStyle = {
  display: "flex",
  alignItems: "center",
};

export const AutoAdjustCard = (props: AutoAdjustCardProps): JSX.Element => {
  let elements = [];
  if (props.elements) {
    for (let i = 0; i < props.elements.length; i++) {
      let data = props.elements[i];
      let index = props.indexOffset + i + 1;
      elements.push(props.element(data, index));
    }
  }

  return (
    <div key={"cardParent"} style={divStyle}>
      {elements}
    </div>
  );
};

export default AutoAdjustCard;
