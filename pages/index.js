import { createGlobalStyle } from 'styled-components';
import useStats from '../utils/useStats';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';


export default function IndexPage() {
    return (
        <div>
            <header style={{ margin: "15px", fontSize: "30px", padding: "15px" }}>Total World Stats:</header>
            <Stats url="https://covid19.mathdro.id/api"></Stats>
            <CountrySelector></CountrySelector>
        </div>
    );
}