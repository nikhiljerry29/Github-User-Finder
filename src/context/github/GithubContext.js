import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
   const initialState = {
      users: [],
      isLoading: false,
   };
   const [state, dispatch] = useReducer(githubReducer, initialState);

   const setLoading = () => {
      dispatch({
         type: "SET_LOADING",
      });
   };

   // Get Search Users
   const searchUsers = async (text) => {
      setLoading();

      const params = new URLSearchParams({
         q: text,
      });

      const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
         headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
         },
      });

      const { items } = await response.json();
      console.log(items);
      dispatch({
         type: "GET_USERS",
         payload: items,
      });
   };

   // Clear Users
   const clearUsers = () => {
      if (state.users.length > 0) {
         dispatch({
            type: "CLEAR_USERS",
         });
         console.log("Clearing users");
      }
   };

   return (
      <GithubContext.Provider
         value={{
            users: state.users,
            isLoading: state.isLoading,
            searchUsers,
            clearUsers,
         }}
      >
         {children}
      </GithubContext.Provider>
   );
};

export default GithubContext;
