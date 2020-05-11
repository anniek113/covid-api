import { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';

export default function CountrySelector() {
    const { stats: countries, loading, error } = useStats(
        'https://covid19.mathdro.id/api/countries'
    );
    const [selectedCountry, setSelectedCountry] = useState('USA');
    if (loading) return <p>Loading...</p>;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    let newStructure = {
        countries: {},
        iso3: {}
    };
    for (let country of countries.countries) {

        newStructure.countries[country.name] = country.iso2;
        newStructure.iso3[country.iso2] = country.iso3;
    }

    return (
        <div>
            <h2>Currently Showing {selectedCountry}</h2>
            <select style={{ width: "300px", height: "36px", margin: "15px" }}
                onChange={el => {
                    setSelectedCountry(el.target.value);
                }}
            >
                {Object.entries(newStructure.countries).map(([country, code]) => (
                    <option
                        selected={selectedCountry === newStructure.iso3[code]}
                        key={code}
                        value={newStructure.iso3[code]}
                    >
                        {country}
                    </option>
                ))}
            </select>
            <Stats
                url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
            ></Stats>
        </div>
    );
}