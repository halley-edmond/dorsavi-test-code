export const SEARCH_QUERY_SUCCESS = "app/SEARCH_QUERY_SUCCESS"
export const SEARCH_QUERY_FAIL = "app/SEARCH_QUERY_FAIL"
export const SEARCH_QUERY_LOADING = "app/SEARCH_QUERY_LOADING"

export default function generateReducer(state,action){
  switch (action.type) {
    case SEARCH_QUERY_SUCCESS:
      return {
        status: "success",
        data: action.data,
        error: undefined
      };

    case SEARCH_QUERY_FAIL:
      return {
        status: "error",
        error: action.error,
        data: undefined
      };

    case SEARCH_QUERY_LOADING:
      return {
        ...state,
        status: "loading"
      };

    default:
      return state
  }
};