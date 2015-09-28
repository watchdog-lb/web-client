import { MenuItem } from 'material-ui';

let menuItems = [

  { type: MenuItem.Types.LINK , payload:'#/about', route: 'about', text: 'About' },
  { type: MenuItem.Types.LINK , payload:'#/map', route: 'map', text: 'Map' },
  { type: MenuItem.Types.LINK,  payload:'#/charts',route: 'components', text: 'Charts' },
  { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
  {
     type: MenuItem.Types.LINK,
     payload: 'https://github.com/watchdog-lb/web-client',
     text: 'GitHub'
  }
];

export default menuItems;