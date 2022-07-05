import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { ColorConstants } from "../helpers/ColorConstants";
import { useSelector } from "react-redux";
import { AppState } from "../store";

interface HeaderProps {
 
}

export const Header = (props: HeaderProps) => {
    const header = useSelector((state: AppState) => state.header);
    let visibility = header.headerVisibility 
    ? header.headerVisibility
    : "collapse";
  return (
    <AppBar
      data-testid="toolbar-main"
      style={{
        backgroundColor: ColorConstants.colorPrimary,
        visibility: visibility,
      }}
      position="static"
    >
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          {header && header.headerText}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state: any) => {
  const { header } = state;
  return { header: header };
};


