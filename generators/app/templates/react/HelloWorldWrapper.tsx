import React from 'react';
<% if (useContext) { -%>
import { AppContextProvider } from './context'
<% } -%>

import HelloWorld from './components/HelloWorld';

function HelloWorldWrapper(): JSX.Element {
  return (
    <%_ if (useContext) { _%>
    <AppContextProvider>
    <%_ } else { _%>
    <>
    <%_ } _%>
      <HelloWorld title="Welcome!" />
    <%_ if (useContext) { _%>
    </AppContextProvider>
    <%_ } else { _%>
    </>
    <%_ } _%>
  )
}

export default HelloWorldWrapper
