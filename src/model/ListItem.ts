export interface Item {
    id: string,
    item: string,
    checked: Boolean
}

export default class ListItem implements Item{
    constructor(
        private _id: string = " ",
        private _item: string = " ",
        private _checked: Boolean = false,
    ) {}

    get id(): string {
        return this._id;
    }

    set id(id: string){
        this._id = id;
    }


    get item(): string{
        return this._item;
    }

    set item(item: string){
        this._item = item;
    }

    get checked(): Boolean{
        return this._checked;
    }

    set checked(checked: Boolean){
        this.checked = checked;
    }
}

