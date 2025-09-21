import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Async thunk to fetch robots
export const fetchRobots = createAsyncThunk('robots/fetchRobots', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return await res.json()
})

const robotsSlice = createSlice({
    name: 'robots',
    initialState: {
        items: [],
        searchfield: '',
        status: 'idle', // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {
        setSearchField: (state, action) => {
            state.searchfield = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRobots.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchRobots.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(fetchRobots.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})

export const { setSearchField } = robotsSlice.actions
export default robotsSlice.reducer
