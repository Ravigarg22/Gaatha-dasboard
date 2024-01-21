import { lazy } from 'react';

const Chart = lazy(() => import('../pages/Chart'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));
const PlansList = lazy(() => import('../pages/Subscriptions/List/PlansList'));

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
  {
    path: '/edit-subscription',
    title: 'Edit Plan',
    component: Chart,
  },

  // Transactions
  {
    path: '/transactions',
    title: 'Transactions',
    component: Chart,
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
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
];

const routes = [...coreRoutes];
export default routes;
