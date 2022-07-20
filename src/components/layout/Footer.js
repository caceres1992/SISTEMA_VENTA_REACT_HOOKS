

import { Layout, Row, Col } from "antd";

function Footer() {
  const { Footer: AntFooter } = Layout;

  return (
    <AntFooter style={{ background: "#fafafa" }}>
      <Row gutter={24}  className="just">
        <Col span={24}>
          <div className="copyright" style={{textAlign:'center'}}>
          Front-end 
            <a href="#pablo" className="font-weight-bold" target="_blank">
            JASSON CACERES VILLAR
            </a>
           año {new Date().getFullYear()}
          </div>
        </Col>
       
      </Row>
    </AntFooter>
  );
}

export default Footer;
