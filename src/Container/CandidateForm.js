import React from "react";
import {
    Row,
    Col,
    Select,
    Button, Table, Input, Space
} from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from 'styled-components';
import "./candidateListing.css";


const ButtonContainerSearch = styled.div`
  .ant-btn-primary {
    background-color: #30a407;
    border:none
  }
`;

const ButtonContainerSubmit = styled.div`
  .ant-btn-primary {
    background-color: #169be5;
    border:none
  }
`;

const ButtonContainerClear = styled.div`
  .ant-btn-primary {
    background-color: #ffb72d;
    border:none
  }
`;

const SelectContainer = styled.div`
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background-color: #f0f0f0;
  }
`;

class CandidateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs={24} >
                        <Row>
                            <Col xs={2} >
                              <h2 style={{color:"#adadad", marginBottom: "-2px"}}>
                                  SUBMITS
                              </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={23} className={"border-submit"}/>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} style={{marginTop:"30px"}}>
                        <Row style={{marginBottom:" 15px"}}>
                            <Col xs={16} >
                                <Row>
                                    <Col xs={8}>
                                        <Row>
                                            <Col xs={21} offset={1}>
                                                <Input style={{backgroundColor:"#f0f0f0"}} placeholder={"First Name"}/>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={8}>
                                        <Row>
                                            <Col xs={22}>
                                                <Input style={{backgroundColor:"#f0f0f0"}} placeholder={"Last Name"}/>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={8}>
                                        <Row>
                                            <Col xs={22} >
                                                <div style={{width:"100%"}}>
                                                    <SelectContainer>
                                                        <Select
                                                            className={"select"}
                                                            placeholder={"Status"}/>
                                                    </SelectContainer>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{marginBottom:" 15px"}}>
                            <Col xs={16} >
                                <Row>
                                    <Col xs={8}>
                                        <Row>
                                            <Col xs={21} offset={1}>
                                                <Input style={{backgroundColor:"#f0f0f0"}} placeholder={"Phone"}/>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={8}>
                                        <Row>
                                            <Col xs={22}>
                                                <Input style={{backgroundColor:"#f0f0f0"}} placeholder={"Email"}/>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={8}>
                                        <Row>
                                            <Col xs={22} >
                                                <div style={{width:"100%"}}>
                                                    <SelectContainer>
                                                        <Select
                                                            className={"select"}
                                                            placeholder={"Position"}/>
                                                    </SelectContainer>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{marginBottom:" 15px"}}>
                            <Col xs={16} >
                                <Row>
                                    <Col xs={8}>
                                        <Row>
                                            <Col xs={21} offset={1}>
                                                <SelectContainer>
                                                    <Select className={"select"} placeholder={"Client"}/>
                                                </SelectContainer>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={8}>
                                        <Row>
                                            <Col xs={22}>
                                                <SelectContainer>
                                                    <Select
                                                        className={"select"} placeholder={"Site"}/>
                                                </SelectContainer>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={8}>
                                        <Row>
                                            <Col xs={22} >
                                                <div style={{width:"100%"}}>
                                                    <SelectContainer>
                                                        <Select
                                                            className={"select"}
                                                            placeholder={"Source"}/>
                                                    </SelectContainer>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{marginBottom:" 15px"}}>
                            <Col xs={16} >
                                <Row>
                                    <Col xs={8}>
                                        <Row>
                                            <Col xs={21} offset={1}>
                                                <SelectContainer>
                                                    <Select className={"select"} placeholder={"Recruiter"}/>
                                                </SelectContainer>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={8}>
                                        <Row>
                                            <Col xs={22}>
                                                <SelectContainer>
                                                    <Select
                                                        className={"select"} placeholder={"Researcher"}/>
                                                </SelectContainer>

                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={8}>
                                        <Row>
                                            <Col xs={22} >
                                                <div style={{width:"100%"}}>
                                                    <Input
                                                        style={{backgroundColor:"#f0f0f0"}}
                                                        placeholder={"Resume"}/>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{marginBottom:" 15px"}}>
                            <Col xs={16} >
                                <Row>
                                        <Col xs={24}>
                                            <Space size={4}>
                                                <div style={{width:"85%", marginLeft:"13px"}} >
                                                    <Input  style={{backgroundColor:"#f0f0f0"}} placeholder={"Submit Date"}/>
                                                </div>
                                                <div style={{width:"90%"}}>

                                                    <Input style={{backgroundColor:"#f0f0f0"}}
                                                           placeholder={"Interview Date"}/>
                                                </div>
                                                    <div style={{width:"90%"}}>
                                                        <Input
                                                            style={{backgroundColor:"#f0f0f0"}}
                                                            placeholder={"Hire Date"}/>
                                                    </div>
                                                <div style={{width:"90%"}}>
                                                    <Input style={{backgroundColor:"#f0f0f0"}} placeholder={"Start Date"}/>
                                                </div>
                                                <div style={{width:"86%"}}>
                                                    <Input  style={{backgroundColor:"#f0f0f0"}} placeholder={"Termination Date"}/>
                                                </div>
                                            </Space>
                                        </Col>

                                </Row>
                            </Col>
                        </Row>
                        <Row style={{marginLeft:"16px", marginTop: "26px"}}>
                            <Col xs={16}>
                               <Row>
                                   <Col xs={7}>
                                       <ButtonContainerSearch>
                                           <Button style={{borderRadius: "5px"}} type="primary" className={"select"}>SEARCH</Button>
                                       </ButtonContainerSearch>
                                   </Col>
                                   <Col xs={7} offset={1}>
                                       <ButtonContainerSubmit>
                                           <Button style={{borderRadius: "5px"}} type="primary" className={"select"}>SUBMIT</Button>
                                       </ButtonContainerSubmit>
                                   </Col>
                                   <Col xs={8} offset={1}>
                                       <ButtonContainerClear style={{width: "90%"}}>
                                           <Button style={{borderRadius: "5px"}} type="primary" className={"select"}>CLEAR</Button>
                                       </ButtonContainerClear>
                                   </Col>
                               </Row>
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

CandidateForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(CandidateForm);

export default CandidateForm;
