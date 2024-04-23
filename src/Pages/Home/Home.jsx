import DealOfTheDay from "../DealOfTheDay/DealOfTheDay";
import DealOfTheDay2 from "../DealOfTheDay/DealOfTheDay2";
import MostViewedItem from "../MostViewedItems/MostViewedItems";
import OnSellingProduct from "../OnSellingProduct/OnSellingProduct";
import OnSellingProduct2 from "../OnSellingProduct/OnSellingProduct2";
import ShopAllCategories from "../ShopAllCategories/ShopALlCategories";
import ShopByDepartment from "../ShopByDEpartment/ShopByDepartment";
import TopBrand from "../TopBrand/TopBrand";
import WeeklyVendor from "../WeeklyVendor/WeeklyVendor";
import BottomBar from "./BottomBar/BottomBar";
import LeftSideBar from "./LeftSideBar/LeftSideBAr";
import MiddleBar from "./MiddleBar/MiddleBar";
import RightSideBar from "./RightSideBar/RightSideBar";

const Home = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row mb-60 md:mb-4 mt-2 ">
                {/* <div className="flex mb-4 mt-2 "> */}
                <LeftSideBar className="order-2 md:order-1"></LeftSideBar>
                <MiddleBar className="order-1 md:order-2"></MiddleBar>
                <RightSideBar className="order-3"></RightSideBar>
            </div>
            <BottomBar></BottomBar>
            <ShopByDepartment></ShopByDepartment>
            <DealOfTheDay></DealOfTheDay>
            <DealOfTheDay2></DealOfTheDay2>
            <OnSellingProduct></OnSellingProduct>
            <OnSellingProduct2></OnSellingProduct2>
            <ShopAllCategories></ShopAllCategories>
            <MostViewedItem></MostViewedItem>
            <TopBrand></TopBrand>
            <WeeklyVendor></WeeklyVendor>
            <></>
        </div>
    );
};

export default Home;