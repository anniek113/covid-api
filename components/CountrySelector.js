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

    return (
        <div>
            <h2>Currently Showing {selectedCountry}</h2>
            <select style={{ width: "300px", height: "35px", margin: "15px" }}
                onChange={e => {
                    setSelectedCountry(e.target.value);
                }}
            >
                {Object.entries(countries.countries).map(([country, code]) => (
                    <option
                        //selected={selectedCountry === countries.iso3[code]}
                        selected={selectedCountry === code}
                        key={code}
                        //value={countries.iso3[code]}
                        value={countries.code}
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