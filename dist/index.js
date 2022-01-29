"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const constants_1 = require("./constants");
const main = async () => {
    const orm = await core_1.MikroORM.init({
        entities: [],
        dbName: 'anonversations',
        type: 'postgresql',
        debug: !constants_1.__prod__,
        user: 'postgres',
        password: '4216829902'
    });
};
main();
//# sourceMappingURL=index.js.map