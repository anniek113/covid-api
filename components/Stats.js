import styled from 'styled-components';
import useStats from '../utils/useStats';

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 3fr);
  grid-gap: 2rem;
  width: 500px;
`;
const StatBlock = styled.div`
  background: #DEF4FF;
  font-size: 1.75rem;
  padding: 1rem;
  border-radius: 3rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`;



export default function Stats({ url }) {
    const { stats, loading, error } = useStats(url);
    console.log(stats, loading, error);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;
    return (
        <>

            <StatGrid>
                <StatBlock>
                    <h3>Confirmed:</h3>
                    <span>{stats.confirmed.value}</span>
                </StatBlock>
                <StatBlock>
                    <h3>Deaths:</h3>
                    <span>{stats.deaths.value}</span>
                </StatBlock>
                <StatBlock>
                    <h3>Recovered:</h3>
                    <span>{stats.recovered.value}</span>
                </StatBlock>
            </StatGrid>
        </>
    );
}