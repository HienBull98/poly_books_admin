import React from "react";
import PropTypes from "prop-types";
import { Layout, Menu, Anchor } from "antd";
import {
    SnippetsOutlined,
    HomeOutlined,
    CloudOutlined,
    UsergroupAddOutlined,
    AreaChartOutlined,
    ShoppingCartOutlined,
    TagOutlined,
    AppstoreOutlined,
    ShopOutlined,
    BankOutlined,
    TeamOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { NavLink, useLocation } from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";
const { Sider } = Layout;
const height = window.innerHeight;
const SliderLayoutAdmin = (props) => {
    let user = JSON.parse(localStorage.getItem("user"));
    const location = useLocation();
    return (
        <Anchor>
            <Sider
                style={{
                    height: height,
                    // position: "fixed",
                }}
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logoantd">
                    <img
                        width="100%"
                        src={process.env.PUBLIC_URL + "/assets/images/logo2.PNG"}
                    />
                </div>

                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[location.pathname]}
                >
                    <Menu.Item key="/admin/home" icon={<TeamOutlined />}>
                        <NavLink to="/admin/users">Users</NavLink>
                    </Menu.Item>
                    <Menu.Item key="/admin/rank-room" icon={<SnippetsOutlined />}>
                        <NavLink to="/admin/post">Bài đăng</NavLink>
                    </Menu.Item>
                    <Menu.Item key="/admin/rooms" icon={<BankOutlined />}>
                        <NavLink to="/admin/category">Thể loại</NavLink>
                    </Menu.Item>
                    <Menu.Item key="/admin/customers" icon={<TeamOutlined />}>
                        <NavLink to="/admin/store">Cửa hàng</NavLink>
                    </Menu.Item>

                    <Menu.Item key="/admin/service" icon={<CloudOutlined />}>
                        <NavLink to="/admin/author">Tác giả</NavLink>
                    </Menu.Item>
                    <Menu.Item key="/admin/order-room" icon={<ShoppingCartOutlined />}>
                        <NavLink to="/admin/order-room">Đặt phòng</NavLink>
                    </Menu.Item>
                    <Menu.Item key="/admin/order-ticket" icon={<TagOutlined />}>
                        <NavLink to="/admin/order-ticket">Phiếu đặt</NavLink>
                    </Menu.Item>
                    {user?.roles === "admin" && (
                        <Menu.Item key="/admin/staff" icon={<UsergroupAddOutlined />}>
                            <NavLink to="/admin/staff">Nhân viên</NavLink>
                        </Menu.Item>
                    )}
                    {user?.roles === "admin" && (
                        <SubMenu key="sub2" icon={<AreaChartOutlined />} title="Thống kê">
                            <Menu.Item key="/admin/report/bills">
                                <NavLink to="/admin/report/bills">Hóa đơn</NavLink>
                            </Menu.Item>
                            <Menu.Item key="/admin/dashboard">
                                <NavLink to="/admin/dashboard">Biểu đồ</NavLink>
                            </Menu.Item>
                            <Menu.Item key="/admin/report/rank-room">
                                <NavLink to="/admin/report/rank-room">Hạng phòng</NavLink>
                            </Menu.Item>
                        </SubMenu>
                    )}
                </Menu>
            </Sider>
        </Anchor>
    );
};

SliderLayoutAdmin.propTypes = {};

export default SliderLayoutAdmin;
