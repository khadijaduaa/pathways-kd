import React from "react";
import {
    Row,
    Col,
    Button, Input,Checkbox
} from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from 'styled-components';
import image from "../Images/Background.jpg";
import "./candidateListing.css";



const InputContainer = styled.div`
  .ant-input {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: 'tnum', "tnum";
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    color: #b6b6bf;
    font-size: 14px;
    line-height: 1.5715;
    background-color: transparent;
    background-image: none;
    border-bottom: 1px solid #b6b6bf;
    border-top: 0px solid #b6b6bf;
    border-right: 0px solid #b6b6bf;
    border-left: 0px solid #b6b6bf;
    border-radius: unset;
    transition: all 0.3s;
  },
 .ant-input:hover {
  border-color: grey;
  border-right-width: 1px !important;
}

  .ant-input:focus, .ant-input-focused {
    border-bottom: 1px solid #b6b6bf !important;
    border-right-width: 0px !important;
    outline: 0 !important;
    box-shadow: 0 0 0 0px rgb(1 123 222 / 20%) !important;
  },
`;


const InputPassword = styled.div`
  .ant-input {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: 'tnum', "tnum";
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    color: #b6b6bf;
    font-size: 14px;
    line-height: 1.5715;
    background-color: transparent;
    background-image: none;
    border-bottom: 1px solid #b6b6bf;
    border-top: 0px solid #b6b6bf;
    border-right: 0px solid #b6b6bf;
    border-left: 0px solid #b6b6bf;
    border-radius: unset;
    transition: all 0.3s;
  },
.ant-input:hover {
  border-color: grey;
  border-right-width: 1px !important;
}

  .ant-input:focus, .ant-input-focused {
    border-bottom: 0px solid #b6b6bf !important;
    border-right-width: 0px !important;
    outline: 0 !important;
    box-shadow: 0 0 0 0px rgb(1 123 222 / 20%) !important;
  },
  .ant-input-affix-wrapper {
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding:0;
    background-color: transparent;
    color: #d9d9d9;
    font-size: 14px;
    line-height: 1.5715;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-bottom: 1px solid #b6b6bf;
    border-top: 0px solid #b6b6bf;
    border-right: 0px solid #b6b6bf;
    border-left: 0px solid #b6b6bf;
    border-radius: unset;
    transition: all 0.3s;
    display: inline-flex;
  }


  .ant-input-affix-wrapper-focused {
    border-bottom: 1px solid transparent !important;
    outline: 0 !important;
    box-shadow: 0 0 0 0px rgb(1 123 222 / 20%) !important;
  }

  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
    border-right-width: 0px !important;
  }
`;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div >
                <Row >
                    <Col xs={7} offset={2} style={{opacity:"0.5", backgroundColor: "Black", height: "100vh"}}>
                        <Row>
                            <Col xs={22} offset={2} style={{marginTop:"30px"}}>
                              <p style={{color: "#b6b6bf", fontSize: "30px"}}>{"ClearCompany"}</p>
                            </Col>
                        </Row>
                        <Row  >
                            <Col xs={3} offset={2}>
                                <p style={{color: "#b6b6bf",fontSize: "16px"}}>{"Username"}</p>
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={20} offset={2} style={{marginTop:"-10px"}}>
                                <InputContainer>
                                    <Input
                                    />
                                </InputContainer>
                            </Col>
                        </Row>
                        <Row style={{marginTop:"6px"}}>
                            <Col xs={10} offset={2} >
                                <Checkbox ><p style={{color: "#b6b6bf", fontSize: "14px"}}>Remember username</p></Checkbox>
                            </Col>
                        </Row>
                        <Row  style={{marginTop:"20px"}}>
                            <Col xs={3} offset={2}>
                                <p style={{color: "#b6b6bf", fontSize: "16px"}}>{"Password"}</p>
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={20} offset={2} style={{marginTop:"-10px"}}>
                                <InputPassword>
                                <Input.Password
                                />
                                </InputPassword>
                            </Col>
                        </Row>
                        <Row style={{marginTop:"6px"}}>
                            <Col xs={8} offset={2}>
                                <p style={{color: "#b6b6bf", fontSize: "14px"}}>Forgot password?</p>
                            </Col>
                        </Row>
                        <Row style={{marginTop:"10px"}}>
                            <Col xs={3} offset={2}>
                                <Button>
                                    {"SIGN IN"}
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2} offset={1}>
                                <div
                                >
              <span
                  style={{
                      fontSize: "14px",
                      position: "fixed",
                      bottom: 0,
                      color: "#b6b6bf",
                      marginBottom: "17px"
                  }}
              >
                ClearCompany | Privacy Policy
              </span>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default Login;
