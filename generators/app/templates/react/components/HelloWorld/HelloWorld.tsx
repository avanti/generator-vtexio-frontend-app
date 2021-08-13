<%_ if (useContext) { _%>
import React, { useContext } from 'react'
import { AppContext } from '../../context'
<%_ } else { _%>
import React from 'react'
<%_ } _%>

import { useCssHandles } from 'vtex.css-handles'
<% if (useHelpers) { %>
import { formatPrice } from '../../helpers'
<% } %>
import './HelloWorld.css'

const CSS_HANDLES = [
  'title',
  'content',
  'secretMessage'
]

interface HelloWorldProps {
  title: string
}

function HelloWorld(props: HelloWorldProps): JSX.Element {
  const handles = useCssHandles(CSS_HANDLES);

  const { title } = props
  <%_ if (useContext) { %>
  const { showMessage, toggleMessage } = useContext(AppContext)

  const handleMessage = (): void => {
    toggleMessage()
  }
  <% } %>
  return (
    <>
      <div className={handles.title}>
        { title }
      </div>

      <div className={handles.content}>
        Hello World<% if (useHelpers) { %> - { formatPrice(100) }<% } _%>

        <%_ if (useContext) { %>
        <div className={handles.secretMessage}>
          <button onClick={handleMessage}>Click me!</button>

          {showMessage &&
            <span>Secret message!</span>
          }
        </div>
        <%_ } _%>
      </div>
    </>
  )
}

export default HelloWorld
