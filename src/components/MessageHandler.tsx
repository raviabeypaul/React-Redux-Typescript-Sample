import React, { Component } from "react";
import { AppState } from "../store";
import { MessageDTO } from "../dtos/MessageDTO";
import { connect } from "react-redux";
import { Alert, AlertColor, Snackbar } from "@mui/material";
import { ViewIdentifiers } from "../helpers/ViewIdentifier";
import { Constants } from "../helpers/Constants";
import { clearMessage } from "../store/slices/message";


interface MessageHandlerProps extends MessageDTO {
  children?: React.ReactNode;
}

interface MessageHandlerState {
  message: string;
  type: string;
  open: boolean;
}

interface DispatchProps {
  clearMessages?: () => void;
}
type IMessageHandleProps = MessageHandlerProps & DispatchProps;
class MessageHandler extends Component<
  IMessageHandleProps,
  MessageHandlerState
> {
  timeOut: any;
  messageTime = Constants.MESSAGE_DURATION_MS;

  componentDidMount(){
    this.clearStoreMessage()
  }

  componentDidUpdate(
    prevProps: MessageHandlerProps,
    prevState: MessageHandlerState,
    snapshot: any
  ) {
    if (
      this.props.messageType !== prevProps.messageType &&
      this.props.message !== prevProps.message &&
      (this.props.messageType === "error" ||
        this.props.messageType === "message")
    ) {
      this.setMessage();
    }
  }

  render() {
    if (
      this.state &&
      (this.state.type === "error" || this.state.type === "message")
    ) {
      let severity: AlertColor = this.state.type === "error" ? "error" : "info";
      return (
        <div>
          <Snackbar id={ViewIdentifiers.MESSAGE_SNACKBAR_ID} data-test-id={ViewIdentifiers.MESSAGE_SNACKBAR_ID} open={this.state.open} message="Note archived">
            <Alert data-test-id={ViewIdentifiers.MESSAGE_ALERT_ID} id={ViewIdentifiers.MESSAGE_ALERT_ID} severity={severity}>{this.state.message}</Alert>
          </Snackbar>
          {this.props.children}
        </div>
      );
    }
    return this.props.children;
  }

  setMessage = () => {
    if (
      this.props.message !== undefined &&
      this.props.messageType !== undefined
    ) {
      this.setState({
        ...this.state,
        message: this.props.message,
        type: this.props.messageType,
        open: true,
      });

      this.clearMessage();
    }
  };

  clearMessage = () => {
    this.clearStoreMessage();
    this.clearTimer();
    this.timeBasedResetComponent();
  };

  clearStoreMessage = ()=>{
    if (this.props.clearMessages !== undefined) this.props.clearMessages();
  }

  private clearTimer = () => {
    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
  };

  private timeBasedResetComponent = () => {
    let self = this;
    this.timeOut = setTimeout(() => {
      self.setState({
        ...self.state,
        open: false,
      });
    }, this.messageTime);
  };
}

const mapStateToProps = (store: AppState) => {
  const { message } = store;
  if (message) {
    return message;
  } else {
    let messageDTO: MessageDTO = {
      message: "",
      messageType: "none",
    };
    return messageDTO;
  }
};

const mapDispatchToProps = (dispatch: any): DispatchProps => {
  return {
    clearMessages: () => {
      dispatch(clearMessage({}));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageHandler);
