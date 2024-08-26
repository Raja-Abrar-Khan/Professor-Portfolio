// src/store.js
import { legacy_createStore as createStore } from "redux";
import { userReducer } from "./Reducer"; 

// Function to load state from localStorage
const loadState = () => {  
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined; // Return undefined to let reducers initialize state
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};

// Function to save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

// Load the persisted state from localStorage
const persistedState = loadState();

// Create the Redux store with the persisted state
const store = createStore(userReducer, persistedState);

// Subscribe to the store to save the state to localStorage whenever it changes
store.subscribe(() => {
  saveState(store.getState());
});

export default store;





// -----------------------------------------?????????????????>>>>>>>>>>>>>>>>>>>>
// src/store.js
// import { legacy_createStore as createStore} from 'redux'
// import { userReducer } from './Reducer';

// // Constants
// const EXPIRY_TIME_MS = 1000; // 30 days in milliseconds

// // Function to load state from localStorage
// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem('state');
//     const savedTime = localStorage.getItem('savedTime');

//     if (serializedState === null || savedTime === null) {
      // return undefined; // No saved state or timestamp
//     }

//     const currentTime = Date.now();
//     const timeElapsed = currentTime - parseInt(savedTime, 10);

//     if (timeElapsed > EXPIRY_TIME_MS) {
//       localStorage.removeItem('state');
//       localStorage.removeItem('savedTime');
//       return undefined; // State expired
//     }

//     return JSON.parse(serializedState);
//   } catch (err) {
//     console.error("Could not load state", err);
//     return undefined;
//   }
// };

// // Function to save state to localStorage
// const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     const currentTime = Date.now();

//     localStorage.setItem('state', serializedState);
//     localStorage.setItem('savedTime', currentTime.toString());
//   } catch (err) {
//     console.error("Could not save state", err);
//   }
// };

// // Load the persisted state from localStorage if available and not expired
// const persistedState = loadState();

// // Create the Redux store with the persisted state
// const store = createStore(
//    userReducer,
//   persistedState
// );

// // Subscribe to the store to save the state to localStorage whenever it changes
// store.subscribe(() => {
//   saveState(store.getState());
// });

// export default store;
