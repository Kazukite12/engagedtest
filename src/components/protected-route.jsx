import { useState } from "react";

import { Navigate } from "react-router-dom";




const ProtectedRoute =(props)=> {



    if (!props.auth) {
        return <Navigate to="/login" />;
      } 

    return props.children;
}


export default ProtectedRoute