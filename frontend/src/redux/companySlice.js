import { createSlice } from "@reduxjs/toolkit";

//create company slice
const companySlice = createSlice({
    name:"company",
    initialState:{
        singleCompany:null,
        companies:[],
        searchCompanyByText:"",
    },
    
    reducers:{
      
        // set there actions

        setSingleCompany:(state,action) => {
            state.singleCompany = action.payload;
        },
        setCompanies:(state,action) => {
            state.companies = action.payload;
        },
        setSearchCompanyByText:(state,action) => {
            state.searchCompanyByText = action.payload;
        }
    }
});
export const {setSingleCompany,setCompanies,setSearchCompanyByText} = companySlice.actions;
export default companySlice.reducer;