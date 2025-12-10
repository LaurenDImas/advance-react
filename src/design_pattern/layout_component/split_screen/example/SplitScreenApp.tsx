import SplitScreen from "./components/SplitScreen.tsx";
import Left from "./components/Left.tsx";
import Right from "./components/Right.tsx";

const SplitScreenApp = () => {
    return (
        <>
            <SplitScreen
                leftWeight={15}
                rightWeight={80}
            >
                <Left />
                <Right />
            </SplitScreen>
        </>
    )
}
export default SplitScreenApp
