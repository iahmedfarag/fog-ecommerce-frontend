import ReactDOM from 'react-dom'
import App from './App'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)