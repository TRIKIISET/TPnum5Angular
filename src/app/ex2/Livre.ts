export class Livre
{
    public get prix(): number {
        return this._prix;
    }
    public set prix(value: number) {
        this._prix = value;
    }
    public get reduction(): number {
        return this._reduction;
    }
    public set reduction(value: number) {
        this._reduction = value;
    }
    public get auteur(): string {
        return this._auteur;
    }
    public set auteur(value: string) {
        this._auteur = value;
    }
    public get titre(): string {
        return this._titre;
    }
    public set titre(value: string) {
        this._titre = value;
    }
    constructor(private _titre: string,
                private _auteur: string,
                private _prix: number,
                private _reduction?: number
                )
                {
                   
                    this.reduction =0;
                }


}