import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HelloPage } from "./pages/hello/hello.page";
import { AuthGuard } from "src/app/core/auth.guard";

const routes: Routes = [
    {
        path:'',
        component: HelloPage,
        canActivate: [AuthGuard]}
    
]

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class InicioRoutingModule { }