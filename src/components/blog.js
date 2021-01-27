import React, {useState} from 'react';
import PageFramework from './framework';
import {Column} from './layout';

const ExpandingBlogFramework = (props) => {
  const [showBody, setShowBody] = useState(false);

  const handleClick = (event) => {
    setShowBody(!showBody);
  }

  return(
    <Column>
      <PageFramework
        title={props.title}
        subtitle={props.subtitle}
        media={props.media}
        icons={
          showBody ? 
          <i class="link footer-logo fas fa-arrow-circle-up" onClick={handleClick}/>
          :
          <i className="link footer-logo fas fa-arrow-circle-down" onClick={handleClick}/>
        }
      >
        {props.abstract}
      </PageFramework>
      {showBody && 
        <BlogPost> 
          {props.children}
        </BlogPost>
      }
    </Column>
  )
}

const BlogPost = (props) => {
  return(
    <Column className="blog" onClick={props.onClick}>
      {props.children}
    </Column>
  );
}


export default ExpandingBlogFramework;