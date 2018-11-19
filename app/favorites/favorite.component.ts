import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'bs-favorite',
    templateUrl: 'favorite.component.html'
})

export class FavoriteComponent {
    @Input() favorite:string;
    @Input() reviews: number;
    fave: boolean = false;
    //@Output() notify: EventEmitter<string> = new EventEmitter<string>();
    @Output() favoriteClicked: EventEmitter<string> = new EventEmitter<string>();
    onClick(): void {
        this.favoriteClicked.emit(`Сонирхсон ${this.favorite} мэдээлэл хадгалагдсан`);
        this.fave = !this.fave;
    }
    isSelected(fave: boolean) : boolean {
        if(!fave || !this.fave) {
            return false;
        }
        if(fave) {
            return true;
        }
    }
}