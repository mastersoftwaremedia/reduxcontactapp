import React from 'react'
import {render}from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import App from './app'
import './index.css'
render(
<Provider store={store}>
	<BrowserRouter>
		<App />
	</BrowserRouter>
</Provider>	,document.getElementById("root")
)














