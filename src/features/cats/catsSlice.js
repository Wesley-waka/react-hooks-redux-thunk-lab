export function fetchCats() {
    return function (dispatch) {
        dispatch({ type: "cats/catsLoading" });
        fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")//the fetch function dipatches the action only if the promise is returned
            .then((r) => r.json())
            .then((data) =>
                dispatch({
                    type: "cats/catsLoaded",
                    payload: data.images
                })

                // { console.log(data.images); }
            )
    }
}

const initialState = {
    entities: [],
    status: "idle",
};

export default function catsReducer(state = initialState, action) {
    switch (action.type) {
        case "cats/catsLoaded":
            return {
                ...state,
                entities: action.payload,
                status: "idle",
            }
        case "cats/catsLoading":
            return {
                ...state,
                status: "loading"
            };

        default:
            return state;
    }
}
