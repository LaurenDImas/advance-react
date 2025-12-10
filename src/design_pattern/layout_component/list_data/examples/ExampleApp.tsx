import RenderList from "./components/RenderList.tsx";
import {games, movies} from "./data/data.ts";
import GamesInfo from "./components/GamesInfo.tsx";
import MoviesInfo from "./components/MoviesInfo.tsx";

const ExampleApp = () => {
    return (
        <>
            <RenderList
                data={games}
                resourceName='games'
                dataToRender={GamesInfo}
            />
            <hr/>
            <br/>
            <br/>
            <RenderList
                data={movies}
                resourceName='movies'
                dataToRender={MoviesInfo}
            />
        </>
    )
}
export default ExampleApp
