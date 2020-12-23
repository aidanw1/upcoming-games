//individual game stored in game object
const initialState = { game: {}, screen: {}, isLoading: true };
//2 ways to map over async data that hasnt been fetched immediately as
//it takes half a second or so to get the data
// const initialState = { game: { platforms: []}, screen: { results: []} };

// or add && before mapping
// {game.platforms &&
//   game.platforms.map((data) => (
//     <h3 key={data.platform.id}> {data.platform.name} </h3>
//   ))}

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game, //.game is coming from the action payload
        screen: action.payload.screen,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
