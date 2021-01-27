# enochchau.com
My personal portfolio.

## Making Reusable Components
This website has gone through numerous iterations. 
It started as a basic HTML website with bootstrap, eventually upgrading to React and custom CSS.

Something I've always struggled with is keeping a project clean.
It seems that I always fall into the trap of customizability at the cost of reusability.

The most recent iteration of this website aims to right my past wrongs.
The majority of the site is build out of a single component: `<PageFramework>`.
```javascript
export const PageFramework = (props) => {
  return(
    <Row className={props.className + " project"} onClick={props.onClick}>
      {props.media &&
        <MediaStage media={props.media}/>
      }

      <Column className="project-text">
        <h3>{props.title}</h3>
        <h6 className="courier">{props.subtitle}</h6>
        {props.children}
        <Row className="buttons">

          {props.buttons && 
            <Buttons buttons={props.buttons}/>
          }

          {props.icons}
        </Row>
      </Column>
    </Row>
  );
}
```

`<PageFrmework>` provides a simple framework to create a project post that can include
a title, text, buttons, links, and media.
Media is built using the robust `<MediaStage>` component which can handle images, videos, and embedded youtube videos.

```javascript
// Media stage is like a theatre with a stage and an audience.
// Everyone gets a turn to be on stage.
/* props.media = [
  {img: "/path/to/image, text:"caption"},
  {video: "/path/to/video", text: "caption", thumbnail: "path/to/thumbnail"},
  {ytvideo: "link", text: "caption", thumbnail: "link to thumbnail"}
]*/
export const MediaStage = (props) => {
  const [stage, setStage] = useState(props.media[0]);
  const [zoom, setZoom] = useState(false);

  const handleClick = (event) => {
    setStage(props.media[event.target.name]);
    setZoom(false);
  }

  const handleZoom = (event) => {
    setZoom(!zoom);
  }

  const audience = props.media.map((m, i) => {
    return(
      <Column key={i}>
        {m.img &&
        <img onClick={handleClick} className="gallery-audience" src={m.img} alt={m.img} name={i}/>}
        {m.thumbnail &&
        <img onClick={handleClick} className="gallery-audience" src={m.thumbnail} alt={m.text} name={i}/>}
      </Column>
    );
  });


  return(
    <Column className="gallery">
      <div className="stage-frame">
        <MultiMediaItem
          media={stage}
          className={zoom ? "stage-zoom" : "stage"}
          onClick={handleZoom}
        />
      </div>
      <p className="caption">{stage.text}</p>
      <Row>
        {props.media.length > 1 && audience}
      </Row>
    </Column>
  );
}
```

`<PageFramework>` is also extensible enabling, other frameworks to be created on top of it. 
One such example is `<ExpandingBlogFramework>` which allows longer blog style posts which fit seamlessly alongside other `<PageFramework>` components.

```javascript
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
```

There's always room to improve but I hope this iteration prooves to be more easily maintained than the last.