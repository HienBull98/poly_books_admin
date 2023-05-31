import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Layout, Menu, Avatar, Dropdown, Row, Col } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DownOutlined,
} from "@ant-design/icons";
import "./index.scss";
const { Header } = Layout;
let width = window.innerWidth - 200;
const HeaderLayoutAdmin = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const toggle = () => {
        setCollapsed(!collapsed);
    };
    useEffect(() => {
        const user = localStorage.getItem("user");
        //console.log(user);
    }, []);
    const onLogOut = async () => {
        await localStorage.removeItem("user");
        window.location.reload(false);
    };
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a onClick={onLogOut}>Đăng xuất</a>
            </Menu.Item>
        </Menu>
    );
    const renderPermission = (role) => {
        if (role === "admin") {
            return "(Admin)";
        }
        if (role === "nv") {
            return "(Nhân viên)";
        }
    };
    return (
        <Header
            className="site-layout-sub-header-background header-width"
            style={{
                position: "fixed",
                zIndex: 1,
                background: "#001529",
                width: "100%",
                flexWrap: "nowrap",
                //textAlign: "right",
            }}
        >
            <Row>
                <Col md={18}></Col>
                <Col md={6} style={{ textAlign: "right" }}>
                    {" "}
                    <Dropdown overlay={menu} trigger={["click"]}>
                        <div style={{ color: "white" }}>
                            {user?.name + renderPermission(user?.roles)}
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        </div>
                    </Dropdown>
                </Col>
            </Row>
        </Header>
    );
};

HeaderLayoutAdmin.propTypes = {};

export default HeaderLayoutAdmin;
