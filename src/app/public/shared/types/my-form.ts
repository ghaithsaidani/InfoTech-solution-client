import {Card} from "./card";
import {FormGroup} from "@angular/forms";

export interface MyForm {
    title:string,
    formGroup: FormGroup;
    cards: Card[];
}
