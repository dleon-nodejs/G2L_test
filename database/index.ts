import Sequelize from "sequelize"

class Database {

    public connection: Sequelize.Sequelize

    constructor(){
        this.init()
    }

    init(): void {
        this.connection = new Sequelize.Sequelize(require("../config/database"))
    }
    
    async check() {
        try{
            await this.connection.authenticate()
            console.log("Connection to the database was successful!")
        }catch(e){
            console.log("Unable to connect to the database!", e.message)
        }
    }
}

const database: Database = new Database()
export default database