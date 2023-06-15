import { configureStore } from '@reduxjs/toolkit';
import PostSelfReducer from './features/postSelfSlice';
import PostMysteryReducer from './features/postMysterySlice';
import PostPhilosophyReducer from './features/postPhilosophy';
import PostHistoryReducer from './features/postHistorySlice';
import GenreReducer from './features/featuresGenre//listGenre';
import PostProgrammingReducer from './features/postProgramming';
import PostBiographyReducer from './features/postBiography';

export default configureStore({
  reducer: {
    postSelf: PostSelfReducer,
    postMystery: PostMysteryReducer,
    postPhilosophy: PostPhilosophyReducer,
    postHistory: PostHistoryReducer,
    genre: GenreReducer,
    postProgramming: PostProgrammingReducer,
    postBiography: PostBiographyReducer,
  },
});
