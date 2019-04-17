import { Routes } from '@angular/router';
import { RoutesService } from './routes.service';
export class Router {

    constructor(private routes: RoutesService) {}

    getRoutes() {
        this.routes.getRoutesChild().subscribe(res => {
            return res;
        });
    }
}
