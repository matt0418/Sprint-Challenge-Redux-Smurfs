import axios from 'axios'

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START"
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS"
export const FETCHING_SMURFS_ERROR = "FETCHING_SMURFS_ERROR"
export const ADDING_SMURF_START = "ADDING_SMURF_START"
export const ADDING_SMURF_SUCCESS = "ADDING_SMURF_SUCCESS"
export const ADDING_SMURF_ERROR = "ADDING_SMURF_ERROR"

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS_START })
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FETCHING_SMURFS_ERROR, payload: err.data.Error })
    })
}

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADDING_SMURF_START })
  axios
    .post(`http://localhost:3333/smurfs`, newSmurf)
    .then(res => {
      dispatch({ type: ADDING_SMURF_SUCCESS, payload: res })
    })
    .catch(err => {
      dispatch({ type: ADDING_SMURF_ERROR, payload: err })
    })
}
