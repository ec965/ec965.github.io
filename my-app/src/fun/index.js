import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TabTop from './tab';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row';
import Pagination from 'react-bootstrap/Pagination';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';


//input, pageSize which is the amount of pages
//output is (active: the active page) & (pageItems: list for pagination)
//FYI: index starts at 1 not 0 because not everyone is a programmer
function usePagination(pageSize){
  const [active, setActive] = useState(1);

  let pageItems=[];

  for( let i=1; i<=pageSize; i++ ){
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
  
  return [pageItems, active];
}


function Paintings(props){
  const [pageItems, active] = usePagination(props.pageSize);

  return(
    <Container >
      <Row className="d-flex justify-content-center">
        {props.paintings.map((painting, index)=>(
          active==(index+1) && (
          <Figure key={index}>
            <Figure.Image
              alt={painting.alt}
              src={painting.src}
              style={{height:'80vh'}}
            />
            <Figure.Caption>
              {painting.caption}
            </Figure.Caption>
          </Figure>)
        ))}
      </Row>
      <Row className="d-flex justify-content-center">
        <Pagination>{pageItems}</Pagination>
      </Row>
    </Container>
  );
}

Paintings.propTypes={
  pageSize: PropTypes.number,
  paintings: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string,
      src: PropTypes.string,
      caption: PropTypes.string,
    })  
  ),
}

function Videos(props){
  const [pageItems, active] = usePagination(props.pageSize);

  return(
    <Container>
      <Row className="d-flex justify-content-center">
        {props.videos.map((video, index)=>(
          active==(index+1) && (
            <ResponsiveEmbed key={index} aspectRatio="16by9" style={{marginBottom: '20px'}}>
              <iframe 
                title={video.title}
                src={video.src}
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
            </ResponsiveEmbed>
          )
        ))}
      </Row>
      <Row className="d-flex justify-content-center">
        <Pagination>{pageItems}</Pagination>
      </Row>
    </Container>
  );
}

Videos.propTypes={
  pageSize: PropTypes.number,
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      src: PropTypes.string,
    }
  )),
}

const paintings = [
  {alt: "face", src: "/pics/art/face.JPG", caption: "2018"},
  {alt: "pot", src: 'pics/art/pot.JPG', caption: '2018'},
  {alt: "averii", src: '/pics/art/averii.JPG', caption: '2017'},
];

const videos= [
  {title: 'ep1', src:"https://www.youtube.com/embed/JGY2peNQ_Q4"},
  {title: 'ep2', src:"https://www.youtube.com/embed/Ij89wI493EU"},
  {title: "ep4", src:"https://www.youtube.com/embed/kT8Op8jmf_M"},
  {title: "ep3", src:"https://www.youtube.com/embed/8HvNjPW5TXY"},
];

const tabs = [
  {
    eventKey: 'paintings', 
    title: 'Paintings', 
    content: <Paintings paintings={paintings} pageSize={paintings.length}/> 
  },
  {
    eventKey: 'videos', 
    title: 'Videos',
    content: <Videos videos={videos.reverse()} pageSize={videos.length}/>
  }
];



export default function Fun(){
  return(
    <Container>
      <TabTop
        activeKey='paintings'
        tabsId="tabtop"
        tabs={tabs}
      />
    </Container>
  );
}
