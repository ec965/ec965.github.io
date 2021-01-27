import React from 'react';
import {Page, Row, Column} from '../components/layout';
// import {Card} from '../components/card.js';
// import {Link, Switch, Route, useRouteMatch} from "react-router-dom";
import PageFramework from '../components/framework';
import Projects from './projects.js';


const Main = (props) => {
  return(
    <Page>
      <ProjectList/>
    </Page>
  );
}

const ProjectList = (props) => {
  const routes = Projects.map((p, i) => {
    return(
      <Row>
      {p.custom ? p.custom : 
      <PageFramework 
        title={p.title} 
        subtitle={p.subtitle} 
        media={p.media} 
        buttons={p.buttons}
      >
        {p.body}
      </PageFramework>}
      {i !== Projects.length-1 &&  // don't use a bottom border for the last item
        <div className="bottom-border"/> /* this is just a white line*/}
      </Row>
    );
  });

  return(
    <Column>
      {routes}
    </Column>
  );
}

// const CardMatrix = (props) => {
//   let {path,url} = useRouteMatch();
  
//   const cards = projects.map((p,i) => {
//     return(
//       <Link key={i} to={path + p.path}>
//         <Card
//           title={p.title}
//           img={p.img}
//         >
//           {p.text}
//         </Card>
//       </Link>
//     );
//   });

//   return(
//     <Row className="matrix">
//       {cards}
//     </Row>
//   );
// }

export default Main;