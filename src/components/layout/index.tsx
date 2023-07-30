import React from "react";

import "./layout.scss";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "./sidebar";
import Footer from "./footer";
import Header from './header/index';


interface LayoutInterface {
	children?: React.ReactNode;
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
	return (
		<div>
			<Header />
			<Container fluid>
				<Row>
					<Col md={3} className="d-none d-md-block">
						{/* Aquí se incluye el Sidebar */}
						<SideBar />
					</Col>
					<Col md={9}>
						<main>{children}</main>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Layout;
