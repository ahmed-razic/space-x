import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import PastLaunches from './pages/PastLaunches/PastLaunches';
import RocketPage from './pages/RocketPage/RocketPage';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';

function App() {
    const client = new ApolloClient({
        uri: 'https://api.spacex.land/graphql',
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/launches" element={<PastLaunches />} />
                    <Route path="/rocket/:id" element={<RocketPage />} />
                </Routes>
            </Router>
        </ApolloProvider>
    );
}

export default App;
