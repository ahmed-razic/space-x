import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import Rocket from '../../components/Rocket';

function RocketPage() {
    const params = useParams();
    const rocketId = params.id;
    const GET_ROCKET_INFO = gql`
        query GET_ROCKET_INFO($rocketId: ID!) {
            rocket(id: $rocketId) {
                cost_per_launch
                diameter {
                    feet
                    meters
                }
                engines {
                    number
                    propellant_1
                    propellant_2
                    thrust_to_weight
                    type
                }
                height {
                    feet
                    meters
                }
                name
                stages
            }
        }
    `;

    const { data, error, loading } = useQuery(GET_ROCKET_INFO, {
        variables: { rocketId },
    });
    if (loading) return <Loader />;
    if (error) return <Error />;

    return <Rocket rocket={{ ...data.rocket, id: rocketId }} />;
}

export default RocketPage;
