import { MikroORM } from "@mikro-orm/core"
import { __prod__ } from "./constants"

const main = async () => {
    const orm = await MikroORM.init({
        entities: [],
        dbName: 'anonversations',
        type: 'postgresql',
        debug: !__prod__,
        user: 'postgres',
        password:  '4216829902'
    });
};

main();