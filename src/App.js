import CBMain from '@/pages/main'
import { Provider } from 'react-redux'
import store from './store'
function App() {
  return (
    <Provider store={store}>
      <CBMain></CBMain>
    </Provider>
  )
}

export default App
