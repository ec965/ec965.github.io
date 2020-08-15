import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

export default function TabTop(props){
  return(
    <Tabs className="d-flex justify-content-center" defaultActiveKey={props.activeKey} id={props.id}>
      {props.tabs.map((tab,index)=>(
        <Tab key={index} eventKey={tab.eventKey} title={tab.title}>
          {tab.content}
        </Tab>
      ))}
    </Tabs>
  );
}

TabTop.propTypes = {
  activeKey: PropTypes.string,
  tabsId: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      eventKey: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.node,
    })
  ),
}

function TabLeft(props){
  return(
    <Tab.Container defaultActiveKey={props.activeKey} id={props.tabsId}>
      <Row>
        <Col sm={1}>
          <Nav variant="pills" className="flex-column">
            {props.tabs.map((tab, index)=>(
              <Nav.Item key={index}>
                <Nav.Link eventKey={tab.eventKey}>{tab.title}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col>
          <Tab.Content>
            {props.tabs.map((tab, index)=>(
              <Tab.Pane key={index} eventKey={tab.eventKey}>
                {tab.content}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

TabLeft.propTypes = {
  activeKey: PropTypes.string,
  tabsId: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      eventKey: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.node,
    })
  ),
}
