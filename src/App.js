import Layout from './components/Layout/Layout';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import Feedback from './components/Feedback/Feedback';

import user from './DATA/user.json';
import stats from './DATA/statistics.json';
import friendsList from './DATA/friends-list.json';
import transactions from './DATA/transactions.json';

import './App.css';

function App() {
  return (
    <Layout>
      <Feedback />
      <Profile user={user} />
      <Statistics stats={stats} title="Upload stats" />
      <FriendList friends={friendsList} />
      <TransactionHistory transactions={transactions} />
    </Layout>
  );
}

export default App;
