//DESARROLLA AQUI TUS SOLUCIONES

async function getImageAndName (pokemon){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {name, img}
    
}

async function getRandomPokemon() {
	let pokemonCount = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1")
		.then((res) => res.json())
		.then((json) => +json.count);
	let pokemonUrl = await fetch(
		`https://pokeapi.co/api/v2/pokemon/?offset=${Math.floor(Math.random() * pokemonCount)}&limit=1`
	)
		.then((res) => res.json())
		.then((json) => json.results[0].url);
	return await fetch(pokemonUrl).then((res) => res.json());
}

async function getImageAndName(name) {
	return await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
		.then((res) => res.json())
		.then((json) => ({ img: json.sprites.front_default, name: json.name }));
}

async function printImageAndName(name, url) {
	return `
	<section>
		<img src="${url}" alt="${name}">
		<h1>${name}</h1>
	</section>
	`;
}

async function getRandomDogImage() {
	return await fetch("https://dog.ceo/api/breeds/image/random")
		.then((res) => res.json())
		.then((json) => json.message);
}

async function getRandomPokemonImage() {
	let randomPokemon = await getRandomPokemon();
	return randomPokemon.sprites.front_default;
}

async function printPugVsPikachu() {}

async function getRandomCharacter() {
	return await fetch(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random() * 826)}`).then((res) =>
		res.json()
	);
}

async function getRandomCharacterInfo() {
	let character = await getRandomCharacter();
	const res = (({image:img,name,episode: episodes, episode: {0:firstEpisode}}) => ({img,name,episodes,firstEpisode}))(character);
	res.dateEpisode = await fetch(res.firstEpisode).then(res=>res.json()).then(json=>json.air_date);
	return res;
}