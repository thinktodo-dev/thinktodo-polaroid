# thinktodo-polaroid

> A polaroid component from ThinkToDo

[![NPM](https://img.shields.io/npm/v/thinktodo-polaroid.svg)](https://www.npmjs.com/package/thinktodo-polaroid) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save thinktodo-polaroid
```

## Usage

```jsx
import React from 'react'
import PolaroidCard from 'thinktodo-polaroid'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <PolaroidCard
      containerClass='bg-white p-2 overflow-hidden'
      rotate={'8'}
      zoom={'1.1'}
      width='200px'
      height='fit-content'
      imgSrc='https://ik.imagekit.io/gsozk5bngn/12_uHbxld-PZ.jpg'
      imgWidth='100%'
      imgHeight={null}
      imgClass='img-thumbnail border-0'
      onClick={() => {}}
      body={<q>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q>}
    />
  )
}

export default App
```

## Component Props

| Props          | Default       | Type     | Description                       | Example                                            |
| -------------- | ------------- | -------- | --------------------------------- | -------------------------------------------------- |
| containerClass | `''`          | string   | Class for card element            | bg-white                                           |
| rotate         | `''`          | string   | Rotation of card                  | 8                                                  |
| zoom           | `''`          | string   | Zoom aspect when hover on card    | 1.2                                                |
| width          | `''`          | string   | Width of card                     | 200px                                              |
| height         | `''`          | string   | Height of card                    | fit-content                                        |
| imgClass       | `''`          | string   | Class for image element           | img-thumbnail                                      |
| imgSrc         | `''`          | string   | Image url                         | https://ik.imagekit.io/gsozk5bngn/12_uHbxld-PZ.jpg |
| imgWidth       | `'100%'`      | string   | Width of image                    | 120px                                              |
| imgHeight      | `null`        | string   | Height of image                   | 120px                                              |
| onClick        | `()=>{}`      | function | Event triggers when click on card | `()=>{ console.log("item selected") }`             |
| body           | `<div></div>` | node     | Body component of card body       | `<p>Lorem ipsum dolor sit ametelit.</p>`           |

## Demo

![vino map gif](https://github.com/thinktodo-dev/thinktodo-polaroid/blob/master/polaroid.gif)
![vino map gif](https://github.com/thinktodo-dev/thinktodo-polaroid/blob/master/polaroid_list.gif)

## License

MIT © [thinktodo-dev](https://github.com/thinktodo-dev)
