import React from 'react';
import { render } from 'react-dom';
//
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
//
import {
  Accordion,
  AccordionTab
} from 'primereact/components/accordion/Accordion';

const items = [
  { to: '/home', name: 'Redirect to home' },
  { to: '/', name: 'Home' },
  { to: '/404', name: 'Not found' },
];

const App = props => (
  <Router>
    <Root>
      <NavBar items={items}/>
      <Switch>
        <Redirect from='/home' to='/'/>
        <Route exact path='/' render={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </Root>
  </Router>
);

const Root = props => <div style={{
  padding: '2%',
}} {...props}/>;

const NavBar = ({ items }) => <div>
  {items && items.map(({ to, name }, index) =>
    <NavLink key={index} to={to} style={{ paddingRight: '2%' }}>{name}</NavLink>
  )}
</div>;

const Home = props => <div>
  <Accordion>
    <AccordionTab header='header 1'>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad alias cupiditate delectus, deleniti dicta
        doloremque dolorum ex id in ipsam laudantium modi nemo nihil numquam omnis perferendis qui quia quibusdam quidem
        quis quod saepe sint, sit veniam voluptates voluptatum?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dicta est hic illum maiores natus necessitatibus
        nemo nesciunt numquam officia, quae quibusdam, quo, ratione reiciendis repellat sit unde vel. Quia.</p>
    </AccordionTab>
    <AccordionTab header='header 2'>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur at dolore id impedit inventore
        iure nulla repellat soluta! A aliquam aspernatur assumenda at atque consectetur dicta distinctio, dolorem
        dolorum ducimus eaque earum eius eligendi et fugiat iusto laboriosam laborum mollitia nam necessitatibus non
        obcaecati placeat quae qui quia quisquam quos rem reprehenderit sapiente sequi temporibus vel veritatis
        voluptate! Consequuntur cumque, ea libero nostrum praesentium voluptas. Ad corporis dolor eaque eos quidem quis
        quos ratione reprehenderit soluta unde. Accusamus consequuntur dolorum ex excepturi id, impedit officia placeat
        quibusdam sed veniam! Aperiam architecto enim fugit harum minima nesciunt non provident? Non!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ex minus qui similique ut voluptatem?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis est et eum, eveniet id maxime molestias
        natus nesciunt odio quibusdam, quisquam sit ut voluptas. Dolores enim, error facilis harum itaque modi possimus
        quaerat quam qui reiciendis, ut veniam. Consequuntur dolor doloremque est facilis iure molestiae nulla odit
        quaerat veniam. Ex.</p>
    </AccordionTab>
  </Accordion>
</div>;

const NotFound = props => <div>
  <h1>=(</h1>
  <div>Sorry, but page with path <code>'{props.location.pathname}'</code> was not found...</div>
</div>;

render(
  <App />,
  document.querySelector('#app')
);
