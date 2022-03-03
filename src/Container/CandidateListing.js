import React from "react";
import {
    Row,
    Col,
    Select,
    Button, Table, Input,
    Modal
} from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CandidateForm from "./CandidateForm";
import {
    HolderOutlined
} from '@ant-design/icons';
import styled from "styled-components";

const ButtonContainerFilter = styled.div`
  .ant-btn-primary {
    background-color: #b985d1;
    border:none
  }
`;

class CandidateListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    onClickIcon = () => {
        this.setState({ showModal : true})
    }

    handleCancelModal = () => {
        this.setState( {showModal: false})
    }

    getModal = () => {
        return (
            <div>
                <Modal
                    visible={this.state.showModal}
                    onCancel={this.handleCancelModal}
                    footer={null}
                    maskClosable={false}
                >
                    <Row>
                        <Col xs={24}>
                            <div style={{display: "grid"}}>
                                <a>
                                    Email candidate
                                </a>
                                <a>
                                    Phone via Zoom Phone
                                </a>
                                <a>
                                    Open resume

                                </a>
                            </div>
                        </Col>
                    </Row>
                </Modal>
            </div>
        )
    }

    columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            align: "left",
        },
        {
            title: "Position",
            dataIndex: "position",
            key: "position",
            align: "left",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            align: "left",
        },
        {
            title: "Recruiter",
            dataIndex: "recruiter",
            key: "recruiter",
            align: "left",
        },
        {
            title: "Researcher",
            dataIndex: "researcher",
            key: "researcher",
            align: "left",
        },
        {
            title: "Source",
            dataIndex: "resource",
            key: "resource",
            align: "left",
            render: (text, record) => (
                <div style={{display: "flex"}}>
                    <p style={{marginRight:"16px", marginTop:"-4px"}}>{"Linkedin"}</p>
                    <HolderOutlined onClick={this.onClickIcon}/>
                </div>
            ),
        },
    ]

    data = [
        {
            key: '1',
            name: 'Jon',
            position:'Recruiter',
            status: 'Submitted',
            recruiter: 'Oliver',
            researcher: '',
            resource: 'Linkedin'
        },
        {
            key: '2',
            name: 'Harry',
            position:'Recruiter',
            status: 'Submitted',
            recruiter: 'Oliver',
            researcher: '',
            resource: 'Linkedin'
        },
        {
            key: '3',
            name: 'David',
            position:'Researcher',
            status: 'Submitted',
            recruiter: 'Oliver',
            researcher: '',
            resource: 'Facebook'
        },
        {
            key: '4',
            name: 'Ayid',
            position:'Researcher',
            status: 'Submitted',
            recruiter: 'Oliver',
            researcher: '',
            resource: 'Facebook'
        },
    ]

    render() {

        return (
            <div style={{height: "100vh"}}>
                <Row style={{  backgroundColor:"white", padding: "50px 70px"}}>
                    <Col xs={24} >
                       <CandidateForm/>
                    </Col>
                </Row>
                <Row  style={{ backgroundColor:"#f9f9f9"}}>
                    <Col xs={24} style={{padding: "50px 70px"}}>
                        <Row>
                            <Col xs={24} >
                                <Row>
                                    <Col xs={2} >
                                        <h2 style={{color:"#adadad", marginBottom: "-2px"}}>
                                            PIPELINE
                                        </h2>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={23} className={"border-submit"}/>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{marginTop: "19px", marginLeft: "8px"}}>
                            <Col xs={2} >
                                <Input style={{backgroundColor:"#f0f0f0"}} placeholder={"START DATE"}/>
                            </Col>
                            <Col xs={2} style={{marginLeft:"11px"}}>
                                <Input style={{backgroundColor:"#f0f0f0"}} placeholder={"END DATE"}/>
                            </Col>
                            <Col xs={2} style={{marginLeft:"11px"}}>
                                <ButtonContainerFilter>
                                    <Button style={{borderRadius: "5px"}} type="primary" className={"select"}>FILTER</Button>
                                </ButtonContainerFilter>
                            </Col>
                        </Row>
                        <Table
                            rowClassName={(record, index) =>
                                index % 2 === 0 ? "table-row-light" : "table-row-dark"
                            }
                            style={{marginTop:"15px", marginLeft:"8px"}}
                            columns={this.columns}
                            dataSource={this.data}
                            // pagination={{
                            //     defaultCurrent: 1,
                            //     total: pages,
                            //     showSizeChanger: true,
                            //     defaultPageSize: 5,
                            //     pageSizeOptions: ["5", "10", "15", "20", "50"],
                            // }}
                        />
                    </Col>
                </Row>
                {this.getModal()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

CandidateListing = connect(
    mapStateToProps,
    mapDispatchToProps
)(CandidateListing);

export default CandidateListing;
