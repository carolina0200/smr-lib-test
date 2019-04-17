export interface RouteChild {
    name: string;
    path: string;
    loadChildren: any;
    select: boolean;
}
