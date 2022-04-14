const planets = {
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Earth: 31557600,
    Mars: 1.8808158,
    Jupiter: 11.862615
}

export function spaceAge(sec, planet) {
    const planetChoice = planets.get(planet)
return Number((sec / planetChoice / planets[Earth]).toFixed(2))
}

/* sec = you age in sec
planets = which planet you want to know your age for -> planets[yourplanet]
*/