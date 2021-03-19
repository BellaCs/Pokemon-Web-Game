import requests
import json
import mariadb

class getPokemons:

    def getMovesList(gen):
        
        try:
            response = requests.get("https://pokeapi.co/api/v2/generation/" + gen)
            firstGenMoves = json.loads(response.text)["moves"]
            return firstGenMoves
        except ValueError:
            print(response.status_code)
            print(gen)
            return None

    def getPokemonList(gen):
        
        try:
            response = requests.get("https://pokeapi.co/api/v2/generation/" + gen)
            firstGenPokemon = json.loads(response.text)["pokemon_species"]
            return firstGenPokemon
        except ValueError:
            print(response.status_code)
            print(gen)
            return None

    def getTypesList(gen):
        
        try:
            response = requests.get("https://pokeapi.co/api/v2/generation/" + gen)
            firstGenTypes = json.loads(response.text)["types"]
            return firstGenTypes
        except ValueError:
            print(response.status_code)
            print(gen)
            return None

    def getPokemonSpecie(url):
        try:
            response = requests.get(url)
            pokemonSpecie = json.loads(response.text)
            return pokemonSpecie
        except ValueError:
            print(response.status_code)
            print(url)


    def getPokemonSource(name):
        try:
            response = requests.get("https://pokeapi.co/api/v2/pokemon/" + name)
            pokemonSource = json.loads(response.text)
            return pokemonSource
        except ValueError:
            print(response.status_code)
            print(name)
            return None

    def getMoveSource(url):
        try:
            response = requests.get(url)
            moveSource = json.loads(response.text)
            return moveSource
        except ValueError:
            print(response.status_code)
            print(url)
            return None

    def getTypeSource(url):
        try:
            response = requests.get(url)
            typeSource = json.loads(response.text)
            return typeSource
        except ValueError:
            print(response.status_code)
            print(url)
            return None