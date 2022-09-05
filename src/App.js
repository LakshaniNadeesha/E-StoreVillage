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
import PromotionRequest from "./pages/ManagerPages/PromotionRequest/PromotionRequest";
import ManagerProfile from "./pages/ManagerPages/ManagerProfile/ManagerProfile";
import ManagerEditProfile from "./pages/ManagerPages/ManagerProfile/ManagerEditProfile";
import PromotionRequestAccept from "./pages/ManagerPages/PromotionRequest/PromotionRequestAccept";
import PromotionRequestReject from "./pages/ManagerPages/PromotionRequest/PromotionRequestReject";
import ComplaintsRespond from "./pages/ManagerPages/ManageComplaints/ComplaintsRespond";
import ManagerEventRemove from "./pages/ManagerPages/ManagerEvents/ManagerEventRemove";
import ManagerEventEdit from "./pages/ManagerPages/ManagerEvents/ManagerEventEdit";
import ManagerProducts from "./pages/ManagerPages/ManagerProducts/ManagerProduct";
import VisitShopPage from "./pages/ShopPage/VisitShopPage";
import BuyNow from "./components/ProductCard/BuyNow";
import AddToCart from "./components/ProductCard/AddToCart";
import AddProduct from "./pages/SellerPages/SellerProducts/AddProduct";
import SellerBuyNow from "./pages/SellerPages/SellerProducts/SellerBuyNow";
import SellerAddToCart from "./pages/SellerPages/SellerProducts/SellerAddToCart";
import SellerOrderEdit from "./pages/SellerPages/SellerOrder/SellerOrderEdit";
import SellerOrderRemove from "./pages/SellerPages/SellerOrder/SellerOrderRemove";

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
                {false === check() && <SellerSidebar/>}

                <Routes>
                    {/* default pages */}

                    <Route exact path="/" element={<LandingPage />} />
                    <Route exact path="/productAll" element={<ProductsAll />} />
                    <Route exact path="/shopAll" element={<ShopAll />} />
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/createAccount" element={<CreateAccount />} />

                    {/* customer pages */}
                    <Route exact path="/product" element={<CustomerPage />} />
                    <Route exact path="/buy_now" element={<BuyNow/>}/>
                    <Route exact path="/add_to_cart" element={<AddToCart/>}/>
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/event" element={<EventPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/profile/editprofile" element={<EditProfile/>} />
                    <Route path="/cart" element={<MyCart />} />
                    <Route path="/orders" element={<MyOrders />} />
                    <Route path="/orders/addreview" element={<AddReviewPage />} />

                    {/* seller pages */}
                    <Route exact path="/myshop" element={<MyShop />} />
                    <Route exact path="/seller_product" element={<SellerProducts/>}/>
                    <Route exact path="/seller_buy_now" element={<SellerBuyNow/>}/>
                    <Route exact path="/seller_add_to_cart" element={<SellerAddToCart/>}/>
                    <Route exact path="/add_new_product" element={<AddProduct/>}/>
                    <Route exact path="/visit_shop" element={<VisitShopPage/>} />
                    <Route path="/seller_orders" element={<SellerOrder/>}/>
                    <Route path="/seller_order/edit_order" element={<SellerOrderEdit/>}/>
                    <Route path="/seller_order/remove_order" element={<SellerOrderRemove/>}/>
                    <Route path="/seller_event" element={<SellerEventPage/>} />
                    <Route path="/discounts" element={<DiscountPage />} />
                    <Route path="/salesHistory" element={<SalesHistory />} />
                    <Route path="/shopProfile" element={<ShopProfile />} />

                    {/* Manager pages */}
                    <Route exact path="/manager_products" element={<ManagerProducts/>} />
                    <Route exact path="/manager_products/visit_shop" element={<VisitShopPage/>} />
                    <Route exact path="/shop" element={<ShopPage />} />
                    <Route exact path="/shop/visit_shop" element={<VisitShopPage/>} />
                    <Route path="/manager_events" element={<ManagerEvent/>} />
                    <Route path="/manager_events/edit_event" element={<ManagerEventEdit/>} />
                    <Route path="/manager_events/remove_event" element={<ManagerEventRemove/>} />
                    <Route path="/manager_orders" element={<ManagerOrder/>} />
                    <Route path="/complaints" element={<ManageComplaints/>}/>
                    <Route path="/complaints/repond" element={<ComplaintsRespond/>}/>
                    <Route path="/promotion_request" element={<PromotionRequest/>}/>
                    <Route path="/promotion_request/accept" element={<PromotionRequestAccept/>}/>
                    <Route path="/promotion_request/reject" element={<PromotionRequestReject/>}/>
                    <Route path="/managerProfile" element={<ManagerProfile/>}/>
                    <Route path="/managerProfile/managereditprofile" element={<ManagerEditProfile/>}/>



                    {/*Admin pages */}


                </Routes>
            </div>
        </div>
    );
}

export default App;
