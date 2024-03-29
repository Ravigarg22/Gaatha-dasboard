import { lazy } from 'react';

const Chart = lazy(() => import('../pages/Dashboard'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Editsubscription = lazy(() => import('../pages/Form/Editsubscription'));
const Profile = lazy(() => import('../pages/Profile'));
const Changepassword = lazy(() => import('../pages/Authentication/Changepassword'));
const Tables = lazy(() => import('../pages/Tables'));
const PlansList = lazy(() => import('../pages/Subscriptions/List/PlansList'));
const TransactionHistory = lazy(
  () => import('../pages/Transactions/TransactionHistory'),
);

const coreRoutes = [
  // Dashboard
  {
    path: '/dashboard',
    title: 'Dashboard',
    component: Chart,
  },

  // Subscriptions
  {
    path: '/subscriptions',
    title: 'Subscription Plans',
    component: PlansList,
  },
  {
    path: '/add-subscription',
    title: 'Add New Plan',
    component: Chart,
  },

  // Transactions
  {
    path: '/transactions',
    title: 'Transactions',
    component: TransactionHistory,
  },

  //Profile
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/Changepassword',
    title: 'Changepassword',
    component: Changepassword,
  },
  {
    path: '/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/editsubscription',
    title: 'Edit Plan',
    component: Editsubscription,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
];

const routes = [...coreRoutes];
export default routes;
