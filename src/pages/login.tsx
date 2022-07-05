import React, { Component } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import { ColorConstants } from "../helpers/ColorConstants";
import { ValidationUtils } from "../utils/ValidationUtils";
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  SxProps,
  Theme,
} from "@mui/material";
import TextComponent from "../components/TextComponent";
import { hideHeader, showHeader } from "../store/slices/header";
import { connect } from "react-redux";
import { setErrorMessage } from "../store/slices/message";
import { StringConstants } from "../helpers/StringConstants";
import { LoginDTO } from "../dtos/LoginDTO";
import { ResponseDTO } from "../dtos/ResponseDTO";
import { StatusConstants } from "../helpers/StatusConstants";
import { AuthService } from "../service/AuthService";
import { UserDTO } from "../dtos/UserDTO";
import { setUser } from "../store/slices/user";




import {
  IDialogDisptachState,
  IRoutingParams,
  IShowMessageState,
  IToolbarHeaderState,
  
} from "../typings";
import { hideDialog, showDialog } from "../store/slices/dialog";
import { ViewIdentifiers } from "../helpers/ViewIdentifier";

interface ILoginComponentProps  {
}
interface ILoginStateProps {
  currentUser?: UserDTO;
}
interface ILoginDispatchProps
  extends IDialogDisptachState,
    IShowMessageState,
    IToolbarHeaderState {
  setCurrentUser: (user: UserDTO) => Promise<any>;
}
type LoginProps = ILoginComponentProps & ILoginDispatchProps & ILoginStateProps;
interface LoginState {
  selectedBrand: string;
  models: string[];
  selectModel: string;
  email: string;
  firstName: string;
  lastName: string;
  routeParams : IRoutingParams;
}

const styleLoginCardParent: SxProps<Theme> = {
  backgroundColor: ColorConstants.colorWhite,
  margin: 2,
  borderRadius: 4,
  justifySelf: "center",
};

const styleLoginBoxParent: SxProps<Theme> = {
  marginTop: 3,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
class login extends Component<LoginProps, LoginState> {
  emailTextRef = React.createRef();
  firstNameRef = React.createRef();
  lastNameRef = React.createRef();
  brandSelected = "";
  modelSelected = "";

  constructor(props: any) {
    super(props);
    this.state = {
      selectedBrand: "",
      models: [],
      selectModel: "",
      email: "",
      firstName: "",
      lastName: "",
      routeParams : {
        routeUrl :'/',
        shouldRoute : false
      }
    };
  }

  componentDidMount() {
    this.props.hideHeader();
    this.isLoggeIn();
    this.handleBrandChange('Apple');
  }

  isLoggeIn = () => {
    if (this.props.currentUser) {
      let email = this.props.currentUser.email;
      if (ValidationUtils.isValidEmail(email)) {
        // reroute to apt location
        
        
      }
    }
  };

  generateBrandItems = () => {
    let brandName = ['Apple', 'Samsung', 'Motorola']
    let brands = [];
    for (let i = 0; i < brandName.length; i++) {
      let brand = brandName[i];
      brands.push(
        <MenuItem key={i} value={brand}>
          {brand}
        </MenuItem>
      );
    }
    let defaultBrandValue =
      this.state.selectedBrand === ""
        ? brandName[0]
        : this.state.selectedBrand;
    return { brands: brands, defaultBrandValue: defaultBrandValue };
  };

  generateModelItems = () => {
    let models = [];
    for (let i = 0; i < this.state.models.length; i++) {
      let model = this.state.models[i];
      models.push(
        <MenuItem data-test-id={ViewIdentifiers.MODEL_ITEMS + i} key={i} value={model}>
          {model}
        </MenuItem>
      );
    }
    let defaultModelBrand =
      this.state.selectModel === "" ? "" : this.state.selectModel;
    return { models: models, defaultModelBrand: defaultModelBrand };
  };

  render() {
    
    let brandItems = this.generateBrandItems();
    let defaultBrandValue = brandItems.defaultBrandValue;
    let brands = brandItems.brands;
    let modelItems = this.generateModelItems();
    let defaultModelValue = modelItems.defaultModelBrand;
    let models = modelItems.models;
    let self = this;
    return (
      <div
        data-test-id={ViewIdentifiers.LOGIN_PAGE_ID}
        id={ViewIdentifiers.LOGIN_PAGE_ID}
        className="column"
        
      >
        {/* <img src={boltechlogo} width={200} height={112} /> */}
        <TextComponent type="heading" text="Login Demo Page" />
        <div
          className="bgGradient"
          style={{ flex: 1, flexDirection: "column" }}
        >
          <div className="row">
            <Card className="login" sx={styleLoginCardParent}>
              <CardContent>
                <Container component="main">
                  <CssBaseline />
                  <Box sx={styleLoginBoxParent}>
                    <TextComponent
                      type="heading"
                      text="Tell us about yourself"
                    />
                    <Box
                      onSubmit={(e: any) => {
                        e.preventDefault();
                      }}
                      sx={{ mt: 3 }}
                    >
                      <Grid container spacing={1}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id={ViewIdentifiers.FIRST_NAME_ID}
                            data-test-id={ViewIdentifiers.FIRST_NAME_ID}
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            label="First Name"
                            onChange={(e) => {
                              this.handleInputFieldChange(
                                "firstName",
                                e.target.value
                              );
                            }}
                            autoFocus
                            inputRef={this.firstNameRef}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id={ViewIdentifiers.LAST_NAME_ID}
                            data-test-id={ViewIdentifiers.LAST_NAME_ID}
                            required
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                            onChange={(e) => {
                              this.handleInputFieldChange(
                                "lastName",
                                e.target.value
                              );
                            }}
                            inputRef={this.lastNameRef}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            id={ViewIdentifiers.EMAIL_NAME_ID}
                            data-test-id={ViewIdentifiers.EMAIL_NAME_ID}
                            required
                            fullWidth
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={(e) => {
                              this.handleInputFieldChange(
                                "email",
                                e.target.value
                              );
                            }}
                            inputRef={this.emailTextRef}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormControl fullWidth>
                            <InputLabel id="model-label">
                              Select Brand
                            </InputLabel>
                            <Select
                              data-test-id={ViewIdentifiers.BRAND_NAME_ID}
                              labelId="brand-select"
                              id={ViewIdentifiers.BRAND_NAME_ID}
                              value={defaultBrandValue}
                              label="Select Brand"
                              onChange={ (e)=>{this.handleBrandChange(e.target.value)}}
                            >
                              {brands}
                            </Select>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                          <FormControl
                            data-test-id={ViewIdentifiers.MODEL_NAME_ID}
                            id={ViewIdentifiers.MODEL_NAME_ID}
                            fullWidth
                          >
                            {/* <InputLabel id="model-label">
                              Select Model
                            </InputLabel> */}
                            <TextField
                              id={ViewIdentifiers.MODEL_NAME_ID}
                              value={defaultModelValue}
                              label= {"Select Model"}
                              onChange={this.handleModelChange}
                              
                              select
                            >
                              {models}
                            </TextField>
                          </FormControl>
                        </Grid>
                      </Grid>
                      <Button
                        id={ViewIdentifiers.SUBMIT_ID}
                        data-test-id={ViewIdentifiers.SUBMIT_ID}
                        type="button"
                        fullWidth
                        variant="contained"
                        onClick={(e) => {
                          self.handleSubmit(e);
                        }}
                        sx={{
                          mt: 3,
                          mb: 2,
                          backgroundColor: ColorConstants.colorPrimary,
                        }}
                      >
                        Sign Up
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  handleInputFieldChange=(key: string, value: string)=> {
    this.setState({
      ...this.state,
      [key]: value,
    });
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    
    let response = this.getLoginData();
    if (response.statusCode === StatusConstants.STATUS_CODE_SUCCESS) {
      let loginDTO: LoginDTO = response.data;
      this.registerUser(loginDTO);
    } else {
      console.error(response);
      this.props.showError(response.data);
    }
  };

  registerUser = async (loginDTO: LoginDTO) => {
    let authService = new AuthService();
    const apiResponse = await authService.registerUser(loginDTO);
    if (apiResponse._status.code === StatusConstants.API_STATUS_CODE_SUCCESS) {
      this.props.showMessageDialog("Please wait");
      this.props.setCurrentUser(loginDTO);
      this.setState({
        ...this.state,
        routeParams : {
          routeUrl : '/dashboard',
          shouldRoute : true
        }
      })

    } else {
      this.props.showError(apiResponse._status.message);
    }
    
  };

  getLoginData = () => {
    let message = "";
    if (ValidationUtils.isStringEmpty(this.state.firstName)) {
      message = StringConstants.FIRST_NAME_IS_NECESSARY;
    } else if (ValidationUtils.isStringEmpty(this.state.lastName)) {
      message = StringConstants.LAST_NAME_IS_NECESSARY;
    } else if (ValidationUtils.isStringEmpty(this.state.email)) {
      message = StringConstants.EMAIL_ID_IS_NECESSARY;
    } else if (!ValidationUtils.isValidEmail(this.state.email)) {
      message = StringConstants.EMAIL_ID_FORMAT_IS_WRONG;
    } else if (ValidationUtils.isStringEmpty(this.state.selectedBrand)) {
      message = StringConstants.BRAND_IS_NECESSARY;
    } else if (ValidationUtils.isStringEmpty(this.state.selectModel)) {
      message = StringConstants.MODEL_IS_NECESSARY;
    }

    if (message.length > 0) {
      let statusCode = StatusConstants.STATUS_CODE_INVALID_LOGIN_PARAMTERS;
      let statusMessage = StatusConstants.getStatusMessages(statusCode);
      let responseDTO: ResponseDTO = {
        data: message,
        statusCode: statusCode,
        message: statusMessage,
      };
      return responseDTO;
    } else {
      let loginDTO: LoginDTO = {
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
      };
      let statusCode = StatusConstants.STATUS_CODE_SUCCESS;
      let statusMessage = StatusConstants.getStatusMessages(statusCode);
      let responseDTO: ResponseDTO = {
        data: loginDTO,
        statusCode: statusCode,
        message: statusMessage,
      };
      return responseDTO;
    }
  };

  handleBrandChange = async (value: any) => {
    let brand = value;
    if (brand !== this.state.selectedBrand) {
      this.setState({
        ...this.state,
        selectModel: "",
        models: [],
      });
      this.updateModelAndBrand(brand);
    }
  };

  updateModelAndBrand = async (brand: any) => {
    
    let models = ['iPhone 5', 'iPhone 7', 'iPhone 8', 'MotoG'];

    this.setState({
      ...this.state,
      selectedBrand: brand,
      models: models,
      selectModel: "",
    });
  };

  handleModelChange = (value: any) => {
    let model = value.target.value;
    this.setState({
      ...this.state,
      selectModel: model,
    });
  };
  
}



const mapDispatchToProps = (dispatch: any): ILoginDispatchProps => {
  return {
    hideHeader: () => dispatch(hideHeader({})),
    showError: (message: string) => dispatch(setErrorMessage(message)),
    setCurrentUser: (user: UserDTO) => dispatch(setUser(user)),
    showMessageDialog: (message: string) =>
      dispatch(showDialog({ message: message })),
    hideMessageDialog: () => dispatch(hideDialog({})),
    showHeader: (header: string) => dispatch(showHeader(header))
  };
};

const mapStateToProps = (state: any) => {
  const { user } = state;
  return { currentUser: user.currentUser };
};

export default connect(mapStateToProps, mapDispatchToProps)(login);
