import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useSelector } from 'react-redux'
import { AppState } from "../store";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IAppDialog {
  children: JSX.Element;
}

type IAppDialogProps = IAppDialog;

export const AppDialog = (props: IAppDialogProps): JSX.Element => {
  const dialog = useSelector((state : AppState) => state.dialog)
  if (dialog.open) {
    return (
      <div>
        <Dialog
          open={dialog.open}
          TransitionComponent={Transition}
          keepMounted
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Loading.."}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {dialog.message}
            </DialogContentText>
          </DialogContent>
        </Dialog>

        {props.children}
      </div>
    );
  } else {
    return props.children;
  }
};
