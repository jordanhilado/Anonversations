"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220130042239 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220130042239 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "post" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" text not null);');
    }
}
exports.Migration20220130042239 = Migration20220130042239;
//# sourceMappingURL=Migration20220130042239.js.map