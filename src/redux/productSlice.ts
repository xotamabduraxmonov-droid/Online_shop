import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',

  async (
    {
      skip = 0,
      sort = ''
    }: {
      skip?: number
      sort?: string
    }
  ) => {

    const response = await axios.get(
      `https://dummyjson.com/products?limit=12&skip=${skip}${sort}`
    )

    return response.data
  }
)


interface ProductState {

  items: any[]

  loading: boolean

  error: string | null

  total: number

}


const initialState: ProductState = {

  items: [],

  loading: false,

  error: null,

  total: 0

}


const productSlice = createSlice({

  name: 'products',

  initialState,

  reducers: {},

  extraReducers: builder => {

    builder

      .addCase(

        fetchProducts.pending,

        state => {

          state.loading = true

        }

      )


      .addCase(

        fetchProducts.fulfilled,

        (state, action) => {

          state.loading = false

          state.items =
            action.payload.products

          state.total =
            action.payload.total

        }

      )


      .addCase(

        fetchProducts.rejected,

        state => {

          state.loading = false

          state.error =
            'Ошибка'

        }

      )

  }

})


export default productSlice.reducer