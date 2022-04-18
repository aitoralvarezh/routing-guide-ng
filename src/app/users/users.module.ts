import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersPage } from "./users.page";

import { 
    UserComponent,
} from "./pages";
import { UsersRoutingModule } from "./users-routing.module";

@NgModule( {
    declarations: [
        UsersPage,
        UserComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule
    ],
    exports: []
})
export class UsersModule { }