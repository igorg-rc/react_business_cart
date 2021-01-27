import React, { useState } from 'react'
import { Containerm, Button, Fade, Container } from 'react-bootstrap'

export default function Technologies() {
  const [openLang, setOpenLang] = useState(true);
  const [openFrame, setOpenFrame] = useState(false);
  const [openDb, setOpenDb] = useState(false);

  return (
    <>
    <Button
      onClick={() => setOpenLang(!openLang)}
      aria-controls="example-fade-text"
      aria-expanded={openLang}
    >
      Toggle Languages
    </Button>
    <Fade in={openLang}>
      <div id="example-fade-text">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
        labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </Fade>

    <Button
      onClick={() => setOpenDb(!openDb)}
      aria-controls="example-fade-text"
      aria-expanded={openDb}
    >
      Toggle Frameworks
    </Button>
    <Fade in={openDb}>
      <div id="example-fade-text">
      If you're noticing choppy animations, and the component that's being 
      collapsed has non-zero margin or padding, try wrapping the contents of your 
      inside a node with no margin or padding, like the in the example below. 
      </div>
    </Fade>

  
  
    <Container>
      <h1 className="display-3">Technologies</h1>
      <p className="mt-2 lead text-justify">We are web development and IT consultancy company 
      which provides the process of development, testing and deployment of digital solutions for business. Our goal 
      is to clearly see the clients goals and to plan, build and deploy in real life application for their needs.</p>
      <p className="mt-2 lead text-justify">We are web development and IT consultancy company 
      which provides the process of development, testing and deployment of digital solutions for business. Our goal 
      is to clearly see the clients goals and to plan, build and deploy in real life application for their needs.</p>
      <p className="mt-2 lead text-justify">We are web development and IT consultancy company 
      which provides the process of development, testing and deployment of digital solutions for business. Our goal 
      is to clearly see the clients goals and to plan, build and deploy in real life application for their needs.</p>
      <p className="mt-2 lead text-justify">We are web development and IT consultancy company 
      which provides the process of development, testing and deployment of digital solutions for business. Our goal 
      is to clearly see the clients goals and to plan, build and deploy in real life application for their needs.</p>
      <p className="mt-2 lead text-justify">We are web development and IT consultancy company 
      which provides the process of development, testing and deployment of digital solutions for business. Our goal 
      is to clearly see the clients goals and to plan, build and deploy in real life application for their needs.</p>
      <p className="mt-2 lead text-justify">We are web development and IT consultancy company 
      which provides the process of development, testing and deployment of digital solutions for business. Our goal 
      is to clearly see the clients goals and to plan, build and deploy in real life application for their needs.</p>
      <p className="mt-2 lead text-justify">We are web development and IT consultancy company 
      which provides the process of development, testing and deployment of digital solutions for business. Our goal 
      is to clearly see the clients goals and to plan, build and deploy in real life application for their needs.</p>
    </Container>
    </>
  )
}
