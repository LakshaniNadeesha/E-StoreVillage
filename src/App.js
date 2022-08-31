import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route, useLocation } from "react-router-dom";
import CustomerPage from "./pages/CustomerPage/CustomerPage";
import ShopPage from "./pages/CustomerPage/ShopPage/ShopPage";
import EventPage from "./pages/CustomerPage/EventsPage/EventPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import MyCart from "./pages/CustomerPage/MyCart/MyCart";
import MyOrders from "./pages/CustomerPage/MyOrders/MyOrders";
import SubNavbar from "./components/SubNavbar/SubNavbar";
import AddReviewPage from "./pages/CustomerPage/AddReviewPage/AddReviewPage";
import MyShop from "./pages/SellerPages/MyShop/MyShop";
import DiscountPage from "./pages/SellerPages/DiscountPage/DiscountPage";
import ShopProfile from "./pages/SellerPages/ShopProfile/ShopProfile";
import SalesHistory from "./pages/SellerPages/SalesHistory/SalesHistory";
import LoginPage from "./pages/Auth/LoginPage/LoginPage";
import CreateAccount from "./pages/Auth/CreateAccount/CreateAccount";
import ProductsAll from "./pages/Auth/ProductsAll/ProductsAll";
import ShopAll from "./pages/Auth/ShopAll/ShopAll";
import SellerEventPage from "./pages/CustomerPage/EventsPage/SellerEventPage";
import SellerSidebar from "./components/Sidebar/SellerSideBar";
import SellerOrder from "./pages/SellerPages/SellerOrder/SellerOrder";
import SellerProducts from "./pages/SellerPages/SellerProducts/SellerProducts";
import EditProfile from "./pages/ProfilePage/EditProfile";
import ManagerSideBar from "./components/Sidebar/ManagerSideBar";
import ManagerEvent from "./pages/ManagerPages/ManagerEvents/ManagerEvent";
import ManagerOrder from "./pages/ManagerPages/ManagerOrders/ManagerOrder";
import ManageComplaints from "./pages/ManagerPages/ManageComplaints/ManageComplaints";

function App() {
    // const isLogin = false;

    const router = useLocation();

    const isDashboard = router.pathname === "/" ? true : false;
    const isLogin = router.pathname.match(/login/);
    const isCreateAccount = router.pathname.match(/createAccount/);
    const isProductAll = router.pathname.match(/productAll/);
    const isShopAll = router.pathname.match(/shopAll/);


    const check = () => {
        if (isDashboard || isLogin !== null || isCreateAccount !== null || isProductAll !== null || isShopAll !== null) {
            return true;
        } else {
            return false;
        }
    };

    const styles = {
        flexDirection: "row",
        display: "flex",
    };
    return (
        <div>
            {true === check() ? <Navbar /> : <SubNavbar />}

            <div style={false === check() ? styles : null}>
                {false === check() && <ManagerSideBar/>}

                <Routes>
                    {/* default pages */}

                    <Route exact path="/" element={<LandingPage />} />
                    <Route exact path="/productAll" element={<ProductsAll />} />
                    <Route exact path="/shopAll" element={<ShopAll />} />
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/createAccount" element={<CreateAccount />} />

                    {/* customer pages */}
                    <Route exact path="/product" element={<CustomerPage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/event" element={<EventPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/profile/editprofile" element={<EditProfile/>} />
                    <Route path="/cart" element={<MyCart />} />
                    <Route path="/orders" element={<MyOrders />} />
                    <Route path="/orders/addreview" element={<AddReviewPage />} />

                    {/* seller pages */}
                    <Route exact path="/myshop" element={<MyShop />} />
                    <Route path="/seller_product" element={<SellerProducts/>}/>
                    <Route path="/seller_orders" element={<SellerOrder/>}/>
                    <Route path="/seller_event" element={<SellerEventPage/>} />
                    <Route path="/discounts" element={<DiscountPage />} />
                    <Route path="/salesHistory" element={<SalesHistory />} />
                    <Route path="/shopProfile" element={<ShopProfile />} />

                    {/* Manager pages */}
                    <Route exact path="/product" element={<CustomerPage/>} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/manager_events" element={<ManagerEvent/>} />
                    <Route path="/manager_orders" element={<ManagerOrder/>} />
                    <Route path="/complaints" element={<ManageComplaints/>}/>



                    {/*Admin pages */}


                </Routes>
            </div>
        </div>
    );
}

export default App;
