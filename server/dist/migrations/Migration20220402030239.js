"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220402030239 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220402030239 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table "user" add column "email" text not null;');
        this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');
    }
}
exports.Migration20220402030239 = Migration20220402030239;
//# sourceMappingURL=Migration20220402030239.js.map