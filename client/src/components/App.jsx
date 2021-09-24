import React from 'react';
import DailyFood from './DailyFood.jsx';
import AllMeals from './AllMeals.jsx'
import Home from './Home.jsx'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import {Route} from "react-router-dom";
import Navbar from './Navbar.jsx'

export default function App() {



    return (
      <div>
        <div>

        </div>
        <Navbar />
        <h1>Through The Woods</h1>
        <Route exact path='/' component={Home} />

        <Route exact path="/dailyfood" component={DailyFood} />
        <Route exact path="/meals" component={AllMeals}/>

      </div>

//       <Router>
//         <div>

// <h1>Through The Woods</h1>
// </div>
//         <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/dailyfood">Daily Food</Link>
//             </li>
//             <li>
//               <Link to="/Meals">Meals</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route exact path="/dailyfood">
//             <DailyFood />
//           </Route>
//           <Route exact path="/Meals">
//             <AllMeals />
//           </Route>
//           <Route exact path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
    )
  }

// function Home() {
//   return (
//     <div>
//   <h2>Home</h2>
//   <p>In a single day of thru-hiking one can burn around 6,000 calories. A struggle for many is planning and making sure you have enough food avaialable for the enitre trip.</p>
//   <p>This simple web-app will let you plan meals and make sure you have adecuate caloires per day</p>
//   </div>
//   )
// }

// function dailyfood() {
//   return <DailyFood/>
// }

// function Users() {
//   return <h2>Meals</h2>;
// }

