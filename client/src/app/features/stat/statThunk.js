import { customAxios } from "../../api/api";

export const statThunk = async (_, thunkAPI) => {
    try {
        const response = await customAxios.get('job/stats');
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}