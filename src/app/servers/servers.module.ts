import { NgModule } from "@angular/core";
import { ServersPage } from "./servers.page";

import { 
    EditServerComponent,
} from "./pages";
import { ServersRoutingModule } from "./servers-routing.module";
import { CommonModule } from "@angular/common";
import { ServerResolver } from "./service/server-resolver.service";
import { FormsModule } from "@angular/forms";


@NgModule( {
    declarations: [
        EditServerComponent,
        ServersPage
    ],
    imports: [
        CommonModule,
        FormsModule,
        ServersRoutingModule
    ],
    providers: [ServerResolver]
})
export class ServersModule { }