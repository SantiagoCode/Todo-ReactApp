import React from 'react'
import NewItem from './NewItem'
import ListItems from './ListItems'

const RenderList = ({ view, addItem, keyWord }) => {
  return (
    <div className="column">
      <section className='px-2' style={{ paddingTop: '70px' }}>
        
        {(view === 'desktop') &&
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
          }

        {(view === 'mobile') &&
          <>
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
          </>}

      </section>
    </div>
  )
}

export default RenderList