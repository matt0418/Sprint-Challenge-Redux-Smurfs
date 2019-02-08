import axios from 'axios'

const FETCHING_SMURFS_START = "FETCHING_SMURFS_START"
const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS"
const FETCHING_SMURFS_ERROR = "FETCHING_SMURFS_ERROR"

export const getSmurfs = () => {
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
