

export interface IDialogDisptachState{
    showMessageDialog : (message : string)=> Promise<any>;
    hideMessageDialog : ()=> Promise<any>
}

export interface IShowMessageState{
  showError : (message: string)=>Promise<any>;
}

export interface IToolbarHeaderState{
  hideHeader: () => Promise<any>;
  showHeader: (header: string) => Promise<any>;
}
export interface IRoutingParams {
  shouldRoute : boolean;
  routeUrl : string;
}