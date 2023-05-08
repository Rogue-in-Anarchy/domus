import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, map, catchError } from "rxjs";
import { FakeDBService } from "../service/fake-db.service";

@Injectable({
    providedIn: 'root'
})

export class ProjectDetailResolver{
    constructor(private readonly project: FakeDBService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
        const id = route.params['id'];
        return this.project.find(id)
        .pipe(
            map(data => {
                return data
            }),
            catchError((error, caught) =>{
                return caught
            })
        )
    }
}