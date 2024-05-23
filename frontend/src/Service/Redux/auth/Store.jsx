import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../Slice/Auth";
import usersReducer from "../Slice/Users";
import schedulesReducer from "../Slice/Schedules"; 
import appointmentReducer from "../Slice/Appointment"; 
import providerReducer from "../Slice/Provider"; 
import noteReducer from "../Slice/Note"; 
import providerIdReducer from "../Slice/ProviderId";
import reviewReducer from "../Slice/Review"; 
import reviewIdReducer from "../Slice/ReviewId"

export default configureStore({
  reducer: {

    auth: authReducer,
    users: usersReducer,
    appointment: appointmentReducer,
    provider: providerReducer,
    schedules: schedulesReducer,
    note: noteReducer,
    providerId: providerIdReducer,
    review:reviewReducer,
    reviewId:reviewIdReducer
  },
});
