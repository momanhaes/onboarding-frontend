import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class HelperLib {
    /**
    * Redireciona para uma url externa
    * @param {string} value url
    */
    public goTo(url: string): void {
        let URL: string = '';
        if (!/^http[s]?:\/\//.test(url)) { URL += 'http://'; }
        URL += url;
        window.open(URL, '_blank');
    }
}