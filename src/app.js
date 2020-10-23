import React from 'react';

import {Provider} from 'react-redux';
//import store from './redux/store';
import Dev from './components/axiosget';

/*function App() {
  return (
    <Provider store={store}>
    <div className='App'>
<Cake/>
    </div>
    </Provider>
  );
}*/

function App(){
  return(
    <Dev/>
  )
}

export default App;
