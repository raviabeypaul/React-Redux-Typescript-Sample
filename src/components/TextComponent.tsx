import React, { Component, CSSProperties } from "react";
import { SxProps, Theme, Typography } from "@mui/material";
import { SizeHelper } from "../helpers/SizeHelper";
import { ColorConstants } from "../helpers/ColorConstants";
interface NormalTextProps  {
  text: string;
  type: "normal" | "heading";
  style ?: SxProps<Theme>;
  id? : string;
}

const headingStyle : CSSProperties = {
  fontSize: SizeHelper.HEADING_SIZE , textAlign:'center' 
}
const normalTextStyle : CSSProperties = {
  fontSize: SizeHelper.TEXT_SIZE, padding: SizeHelper.PADDING, textAlign:'center' 
}

type TextComponentProps = NormalTextProps

class TextComponent extends Component<TextComponentProps, {}> {
  render() {
    let element;
    if (this.props.type === "heading") {
      let style = this.props.style? {...headingStyle, ...this.props.style} : headingStyle;
      
      element = (
        <Typography
          sx={style}
          fontWeight="bold"
          color={ColorConstants.colorBlack}
          id={this.props.id}
        >
          {this.props.text}
        </Typography>
      );
    } else {
      let style = this.props.style? {...normalTextStyle, ...this.props.style} : normalTextStyle;
      element = (
        <Typography
          sx={style}
          color={ColorConstants.colorBlack}
          gutterBottom
          id={this.props.id}
        >
          {this.props.text}
        </Typography>
      );
    }
    return (
      element
    );
  }
}

export default TextComponent;
