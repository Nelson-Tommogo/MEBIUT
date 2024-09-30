import Home from "../views/home";
import Service from "../views/services";
import ContactUs from '../views/contactUs';
import IndividualService from "../views/individualService";
import AboutUs from '../views/aboutUs';
import ProjectDetails from "../views/projectDetails";
import SMediaService from '../views/sMediaService';
import SignUp from '../components/Registration/SignUp';
import Login from '../components/Registration/Login';
import ForgotPassword from '../components/Registration/ForgotPassword';
import OurShop from '../components/Ourshop/OurShop';
import Payment from '../components/Ourshop/Payment';

const routes = [
  {
    component: Home,  // Pass the component reference (not JSX)
    to: '/'
  },
  {
    component: Service,
    to: '/services'
  },
  {
    component: ContactUs,
    to: '/contactUs'
  },
  {
    component: IndividualService,
    to: '/individualService'
  },
  {
    component: AboutUs,
    to: '/aboutUs'
  },
  {
    component: ProjectDetails,
    to: '/projectDetails'
  },
  {
    component: SMediaService,
    to: '/sMediaService'
  },
  {
    component: SignUp,
    to: '/signup'
  },
  {
    component: Login,
    to: '/login'
  },
  {
    component: ForgotPassword,
    to: '/forgot-password'
  },
  {
    component: OurShop,
    to: '/OurShop'
  },
{
      component: Payment, 
      to: '/Payment'
    }
];

export default routes;
