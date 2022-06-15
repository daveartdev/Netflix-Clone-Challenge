import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
});

export default instance;

/*
-Axios making http requests
-export default name inconsequential and can be changed in the import file (rows.js)
but can only have one default if you have multiple exports you need to remove default and 
export each variable individually. 
*/