import React from 'react'
import PolaroidCard from 'thinktodo-polaroid'
import 'bootstrap/dist/css/bootstrap.min.css'
const arr = []
for (let index = 0; index < 10; index++) {
  arr.push(index)
}
const getRandomInt = ({ min, max }) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

const App = () => {
  return (
    <div className='container py-4'>
      <h4 className='mb-4'>Polaroid Card</h4>
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
        body={
          <blockquote class='text-center'>
            <q class='mb-0 font-italic'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </q>
            <footer class='blockquote-footer'>Thinktodo</footer>
          </blockquote>
        }
      />
      <hr className='w-100 my-5' />
      <h4 className='my-5'>Polaroid Grid</h4>
      <div className='d-flex flex-wrap'>
        {arr.map((item) => {
          //  Create random rotate for each PolaroidCard
          const randomRotateIndex = getRandomInt({ min: 10, max: 20 })
          const rotate =
            item % 2 === 1 ? `${randomRotateIndex}` : `-${randomRotateIndex}`
          return (
            <PolaroidCard
              containerClass='bg-white p-2 overflow-hidden'
              rotate={rotate}
              zoom={'1.2'}
              width='200px'
              height='fit-content'
              imgSrc='https://ik.imagekit.io/gsozk5bngn/12_uHbxld-PZ.jpg'
              imgWidth='100%'
              imgHeight={null}
              imgClass='img-thumbnail border-0'
              onClick={() => {
                console.log(`Item ${item + 1} is selected`)
              }}
              body={
                <blockquote class='text-center'>
                  <q class='mb-0 font-italic'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </q>
                  <footer class='blockquote-footer'>Thinktodo.net</footer>
                </blockquote>
              }
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
