import React from 'react'
import NewItem from './NewItem'
import ListItems from './ListItems'

const RenderList = ({ view, addItem, keyWord }) => {
  return (
    <div className="column">

      {(view === 'desktop') &&
        <section className='p-4'>
          <div className="columns is-marginless" style={{  width: '100%' }}>
            {view === 'desktop' &&
              <div className="column is-5">
                <NewItem /> 
              </div>
            }
            <div className="column">
              <ListItems keyWord={keyWord} />
            </div>
          </div>
        </section>
      }

      {(view === 'mobile') &&
        <section className='p-4'>
          <div>
            {addItem === true &&
              <div className="">
                <NewItem /> 
              </div>
            }
            {addItem === false &&
              <div>
                <ListItems keyWord={keyWord} />
              </div>
            }
          </div>
        </section>
      }
      
    </div>
  )
}

export default RenderList