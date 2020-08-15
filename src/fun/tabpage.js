import React , { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Pagination from 'react-bootstrap/Pagination';

export default function PageControl(props){
  const [active, setActive] = useState(1);
  let pageItems=[];

  for( let i=1; i<=props.pageSize; i++ ){
    pageItems.push(
      <Pagination.Item key={i} active={i===active} onClick={handleClick(i)}>
        {i}
      </Pagination.Item>
    );
  }

  function handleClick(value){
    return function(){
      setActive(value);
    }
  }
  
  console.log('active',active);
  return(
    <Pagination>{pageItems}</Pagination>
  );
}

PageControl.propTypes={
  pageSize: PropTypes.number,
};

