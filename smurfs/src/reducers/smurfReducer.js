import { 
  FETCHING_SMURFS_START, 
  FETCHING_SMURFS_SUCCESS, 
  FETCHING_SMURFS_ERROR, 
  ADDING_SMURF_START,
  ADDING_SMURF_ERROR,
  ADDING_SMURF_SUCCESS
} from '../actions'

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const intialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: ''
}

 export const smurfReducer = ( state = intialState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true
    }

    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      }

    case FETCHING_SMURFS_ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
      
    case ADDING_SMURF_START:
      return {
        ...state,
        addingSmurf: true
      } 
      
    case ADDING_SMURF_SUCCESS:
      const newSmurf = {
        value: action.payload
      }
      return {
        ...state,
        addingSmurf: false,
        smurfs: [...state.smurfs, newSmurf]
      }  

    case ADDING_SMURF_ERROR:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }  
    

    default:
      return state
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
