import React from "react"
import { Provider } from "mobx-react"

import worldstate from "./src/containers/worldstate";

const store = new worldstate()

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => <Provider store={store}>{element}</Provider>