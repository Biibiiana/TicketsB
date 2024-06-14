import { concerts } from '../mocks/concerts.json'

export function ListOfCities() {
    const cities = concerts.map(function (concert) { return concert.city; });
    var sortedCities = cities.sort();

    var uniqueCities = sortedCities.filter(function (value, index) {
        return value !== sortedCities[index + 1];
    });

    return (
        uniqueCities
    )
}

export function ListOfArtists() {
    const cities = concerts.map(function (concert) { return concert.artist; });
    var sortedCities = cities.sort();

    var uniqueCities = sortedCities.filter(function (value, index) {
        return value !== sortedCities[index + 1];
    });

    return (
        uniqueCities
    )
}

export function ListOfGenders() {
    const artists = concerts.map(function (concert) { return concert.gender; });
    var sortedArtists = artists.sort();

    var uniqueArtists = sortedArtists.filter(function (value, index) {
        return value !== sortedArtists[index + 1];
    });

    return (
        uniqueArtists
    )
}