interface ISet<T> {
    add(value: T): ISet<T>;
    remove(value: T): ISet<T>;
    has(value: T): boolean;
    clear(): void;
    forEach(callbackfn: (value: T, key: T, set: ISet<T>) => void, thisArg?: any): void;
    size: number;
}
/**
 * Notice: I am still investigating why Firefox shows SyntaxError: unexpected token: identifier for this interface.
 */


class Set<T extends string | number> implements ISet<T>{
    
    _store : { [key:string]:boolean; } | { [key:number]:boolean; } = {};
    
    add(value: string | number): ISet<T> {    
        this._store[value] = true;
        this.size++;
        return this;
    }

    remove(value: string | number): ISet<T> {        
        if (delete this._store[value]){
            this.size--;
        };
        return this;
    }

    has(value: string | number): boolean {
        return (this._store[value]);
    }

    clear(): void {
        this.size = 0;
        this._store = {};
    }

    forEach(callbackfn: (value: T, key: T, set: ISet<T>) => void, thisArg?: any): void {
        for (var key in this._store){
            callbackfn.call(this._store[key], key, this);
        }
    }

    size: number = 0;

}

export { Set as default };