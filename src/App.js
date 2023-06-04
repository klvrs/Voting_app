import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import User from './components/User';
import Leader from './components/Leader';
import Admin from './components/Admin';
import UserVote from './components/UserVote';
import UserSignUp from './components/UserSignUp';
import LeaderVotes from './components/LeaderVotes';
import LeaderSignUp from './components/LeaderSignUp';
import AdminUser from './components/AdminUser';
import Footer from './components/Footer';
import AdminLeader from './components/AdminLeader';
function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='user' element={<User/>}/>
          <Route path='Leader' element={<Leader/>} />
          <Route path='Admin' element={<Admin/>} />
          <Route path='user/uservote' element={<UserVote/>} />
          <Route path='user/usersignup' element={<UserSignUp/>} />
          <Route path='leader/leadervotes' element={<LeaderVotes/>} />
          <Route path='leader/leadersignup' element={<LeaderSignUp/>} />
          <Route path='admin/adminuser' element={<AdminUser/>} />
          <Route path='admin/adminleader' element={<AdminLeader/>} />
          <Route path='admin/adminuser/adminusersignup' element={<UserSignUp/>}/>
          <Route path='admin/adminleader/adminleadersignup' element={<LeaderSignUp/>}/>
        </Routes>
       
      <Footer></Footer>
    
       </div>
  );
}

export default App;
