import './style.scss';
import { gql, useQuery } from '@apollo/client';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import MainHeader from '../../components/MainHeader';

const GET_COMPANY_INFO = gql`
    {
        company {
            name
            summary
        }
    }
`;

function Home() {
    const { data, loading, error } = useQuery(GET_COMPANY_INFO);

    if (loading) return <Loader />;
    if (error) return <Error />;

    return (
        <div className="home__container d-flex align-items-center text-center">
            <MainHeader name={data.company.name} description={data.company.summary} />
        </div>
    );
}

export default Home;
