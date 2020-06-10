import { configureStore } from '@reduxjs/toolkit'

import reducerData from './ducks/data'

export default configureStore({
    reducer: {
        datas: reducerData
    }
})