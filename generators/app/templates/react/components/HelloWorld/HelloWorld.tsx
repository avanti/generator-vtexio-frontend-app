<%_ if (useContext) { _%>
import React, { useContext } from 'react'
import { AppContext } from '../../context'
<%_ } else { _%>
import React from 'react'
<%_ } _%>
import SVG from 'react-inlinesvg'
import { useCssHandles } from 'vtex.css-handles'
<% if (useHelpers) { %>
import { formatPrice } from '../../helpers'
<% } %>
import wavingHand from './svg/waving-hand.svg'

import './HelloWorld.css'

const CSS_HANDLES = [
  'title',
  'content',
  'hello',
  'iconWavingHand'<%_ if (useContext) { %>,
  'secretMessage'<% } %>
]

interface IHelloWorld {
  title: string
}

function HelloWorld({ title }: IHelloWorld): JSX.Element {
  const handles = useCssHandles(CSS_HANDLES);
  <% if (useContext) { %>
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
        <div className={handles.hello}>
          Hello World<% if (useHelpers) { %> - { formatPrice(100) }<% } %>

          <span className={handles.iconWavingHand}>
            <SVG src={wavingHand} />
          </span>
        </div>
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
