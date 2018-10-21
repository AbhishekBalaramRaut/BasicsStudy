import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoaderService {

    loaderStatus:boolean;
    loaderStatusChanged: Subject<boolean> = new Subject();

    startLoader() {
        this.loaderStatus = true;
        this.loaderStatusChanged.next(this.loaderStatus);
    }

    endLoader() {
        this.loaderStatus = false;
        this.loaderStatusChanged.next(this.loaderStatus);
    }

}