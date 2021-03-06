import * as types from "./ActionTypes";

const initialState = {
    metaLoading: false,
    metaLoaingFailed: false,
    userCountry: null,
    userCity: null,
    input: "",
    semantic: {},
    isSemantic: false,
    showSearchResultsLayout: false,
    searchSuggestions: [],
    searchSuggestionsLoading: false,
    searchSuggestionsLoadingFailed: false,
    searchResults: [],
    searchResultsLoading: false,
    searchResultsLoadingFailed: false
};

export function search(state = initialState, action) {
    switch (action.type) {
        case types.TOGGLE_SEARCH_RESULTS_LAYOUT:
            return {
                ...state,
                showSearchResultsLayout: action.showSearchResultsLayout
            }
        case types.REQUEST_APP_META:
            return {
                ...state,
                metaLoading: true,
                metaLoaingFailed: false
            };
        case types.RECV_APP_META:
            return {
                ...state,
                metaLoading: false,
                userCountry: action.data.user_country,
                userCity: action.data.city
            };
        case types.RECV_APP_META_FAILED:
            return {
                ...state,
                metaLoading: false,
                metaLoaingFailed: true
            };
        case types.UPDATE_INPUT:
            return {
                ...state,
                input: action.input
            }
        case types.REQUEST_SEARCH_SUGGESTIONS:
            return {
                ...state,
                searchSuggestionsLoading: true
            };
        case types.RECV_SEARCH_SUGGESTIONS_FAILED:
            return {
                ...state,
                searchSuggestionsLoadingFailed: true,
                searchSuggestionsLoading: false
            };
        case types.RECV_SEARCH_SUGGESTIONS_SUCCESS:
            return {
                ...state,
                searchSuggestions: action.suggestions,
                searchSuggestionsLoadingFailed: false,
                searchSuggestionsLoading: false
            };
        case types.REQUEST_SEARCH_RESULTS:
            return {
                ...state,
                searchResultsLoading: true,
                searchResultsLoadingFailed: false
            };
        case types.RECV_SEARCH_RESULTS_SUCCESS:
            return {
                ...state,
                isSemantic: false,
                semantic: {},
                searchResults: action.res.results,
                searchResultsLoading: false,
                searchResultsLoadingFailed: false
            };
        case types.RECV_SEMANTIC_SEARCH_RESULTS:
            return {
                ...state,
                isSemantic: true,
                semantic: action.results,
                searchResultsLoading : false,
                searchResultsLoadingFailed : false
            };
        case types.RECV_SEARCH_RESULTS_FAILED:
            return {
                ...state,
                searchResultsLoadingFailed: true
            }
        default:
            return state;
    }
}
