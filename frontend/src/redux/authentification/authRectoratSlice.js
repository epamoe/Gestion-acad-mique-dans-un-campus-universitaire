import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// recuperer un etudiant dans le local storage
const acteur = localStorage.getItem("actor");

const initialState = {
  rectorat: acteur === 'rectorat' ? JSON.parse(localStorage.getItem('user')) : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  isRejected: false,
  message: "",
};

// Login etudiant
export const loginRectorat = createAsyncThunk(
  "auth/loginRectorat",
  async (data, { rejectWithValue }) => {
    try {
      const value = await axios.post(
        "/rectorat/login-rectorat",
        {
          email: data.email,
          code: data.code,
        }
      );
      localStorage.setItem("user", JSON.stringify(value.data));
      localStorage.setItem('actor', 'rectorat');
      // console.log(data);
      alert(JSON.stringify(value.data));
      console.log(JSON.stringify(value.data));
      return JSON.stringify(value.data.data);
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

export const authRectoratSlice = createSlice({
  name: "authRectorat",
  initialState,
  reducers: {
    resetRectorat: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.isRejected = false;
    },
    logoutRectorat: (state) => {
      localStorage.removeItem("rectoratInfos");
      state.etudiant = null;
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.isRejected = false;

      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginRectorat.pending, (state, action) => {
        console.log("login pending");
        state.isLoading = true;
      })
      .addCase(loginRectorat.fulfilled, (state, action) => {
        // console.log("login fulfilled");
        state.isSuccess = true;
        state.etudiant = action.payload;
        state.isLoading = false;

        console.log("je suis dans le isloading");

        state.isRejected = true;
        // state.message = action.payload.data.message;
        return state;
      })
      .addCase(loginRectorat.rejected, (state, action) => {
        // console.log("login rejected");
        state.isLoading = false;
        state.etudiant = null;
        state.isRejected = true;

        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { resetRectorat, logoutRectorat } = authRectoratSlice.actions;
export default authRectoratSlice.reducer;
