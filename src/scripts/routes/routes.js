import home from '../views/pages/home';
import favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const restaurantRoutes = {
  '/': home, // default page
  '/home': home,
  '/detail/:id': Detail,
  '/favorite': favorite,
};

export default restaurantRoutes;
