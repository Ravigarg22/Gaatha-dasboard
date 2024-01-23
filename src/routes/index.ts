import { lazy } from 'react';

const Chart = lazy(() => import('../pages/Dashboard'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Edit-subscription = lazy(() => import('../pages/Form/Edit-subscription'));
const Profile = lazy(() => import('../pages/Profile'));
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
    path: '/Forms/Edit-Subscription',
    title: 'Edit Plan',
    component: Form/Edit-subscription,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
];

const routes = [...coreRoutes];
export default routes;
