export async function getPersonajes() {
    const CHARACTERES = 'https://rickandmortyapi.com/api/character';
    const rawData = await fetch(`${CHARACTERES}`);
    const json = await rawData.json();
    console.log("rawData", rawData);
    console.log("jsonData", json);
    const { results } = json;
    console.log("results", results);
    return results.map((item) => {
        const { id, name, image, status, species, gender,episode } = item;
        return {
            id,
            name,
            image,
            status,
            species,
            gender,
            episode};
        });

    }