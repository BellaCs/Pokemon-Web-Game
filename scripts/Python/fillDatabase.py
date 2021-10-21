from getPokemons import getPokemons
import mariadb

class fillDatabase:

    def __init__(self):
        self.conn = mariadb.connect(
            user = "root",
            password = "marc1324",
            host = "localhost",
            database = "pokemonDB"
        )

    
    def savePokemonsDB(self, gen):
        pokemonList = getPokemons.getPokemonList(getPokemons, str(gen))
        movesList = getPokemons.getMovesList(getPokemons, str(gen))
        typeList = getPokemons.getTypesList(getPokemons, str(gen))
        if not typeList == None:
            for typep in typeList:
                typeSource = getPokemons.getTypeSource(getPokemons, typep["url"])
                self.saveTypeInDataBase(typeSource)
        if not movesList == None:
            for move in movesList:
                moveSource = getPokemons.getMoveSource(getPokemons, move["url"])
                self.saveMoveInDataBase(moveSource)
        if not pokemonList == None:
            for pokemon in pokemonList:
                pokemonSpecie = getPokemons.getPokemonSpecie(getPokemons, pokemon["url"])
                pokemonSource = getPokemons.getPokemonSource(getPokemons, pokemonSpecie["name"])
                self.savePokemonInDataBase(pokemonSource)
                pokemonMoveList = pokemonSource["moves"]
                for move in pokemonMoveList:
                    moveSource = move["move"]
                    self.savePokeMoveInDataBase(moveSource, pokemonSource["id"])


    def savePokeMoveInDataBase(self,pokeMove,pokemonID):
        cur = self.conn.cursor(dictionary=True)
        name = pokeMove["name"]
        movementID = None
        cur.execute("SELECT movement_id FROM movements WHERE movement_name = '%s'" % name)
        movementIDrow = cur.fetchall()
        if not len(movementIDrow) < 1:
            movementID = movementIDrow[0]
        if not movementID == None:
            print("Pokemon move: " + str(pokemonID) + " " + name)
            cur.execute("INSERT into pokemon_movement VALUES (?,?)", (pokemonID, movementID["movement_id"]))   
            self.conn.commit()         
        else:
            print("No es de la primera generació: " + name)

    def saveTypeInDataBase(self, type):
        cur = self.conn.cursor()
        id = type["id"]
        name = type["name"]
        print("Type: " + str(id) + " " + name)
        cur.execute("INSERT into type_table VALUES (?,?)",(id,name))
        self.conn.commit()    
        
    def saveMoveInDataBase(self, move):
        cur = self.conn.cursor(dictionary=True)
        id = move["id"]
        name = move["name"]
        print("Move: " + str(id) + " " + name)
        accuracy = move["accuracy"]
        power = move["power"]
        pp = move["pp"]
        t = move["type"]
        typeName = t["name"]
        cur.execute("SELECT type_id FROM type_table WHERE type_name = '%s'" % typeName)
        typeIDrow = cur.fetchall()
        if not len(typeIDrow) < 1: 
            typeID = typeIDrow[0]
            cur.execute("INSERT into movements VALUES (?,?,?,?,?,?)",(id,name,accuracy,power,pp,typeID["type_id"]))
            self.conn.commit()
    
    def savePokemonInDataBase(self, pokemon):
        cur = self.conn.cursor()
        id = pokemon["id"]
        name = pokemon["name"]
        print("Pokemon: " + str(id) + " " +name)
        stats =pokemon["stats"]
        hp = self.getBaseStat(stats[0])
        attack = self.getBaseStat(stats[1])
        defense = self.getBaseStat(stats[2])
        special_attack = self.getBaseStat(stats[3])
        special_defense = self.getBaseStat(stats[4])
        speed = self.getBaseStat(stats[5])
        sprites = pokemon["sprites"]
        sprite_front = sprites["front_default"]
        sprite_back = sprites["back_default"]
        cur.execute("INSERT into pokemon VALUES (?,?,?,?,?,?,?,?,?,?)",(id,name,hp,attack,defense,special_attack,special_defense,speed,sprite_front,sprite_back))
        self.conn.commit()

    def getBaseStat(self, stat):
        return stat["base_stat"]


c = fillDatabase()
c.savePokemonsDB(1)
