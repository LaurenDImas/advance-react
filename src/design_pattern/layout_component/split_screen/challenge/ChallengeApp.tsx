import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Sidebar from "./components/Sidebar.tsx";
import Content from "./components/Content.tsx";
import SplitScreen from "./components/SplitScreen.tsx";

const ChallengeApp = () => {
    return (
        <div
            className="flex flex-col h-screen"
        >
            <Header />
            <SplitScreen leftWeight={3} rightWeight={60}>
                <Sidebar />
                <Content />
            </SplitScreen>
            <Footer />
        </div>
    )
}
export default ChallengeApp
