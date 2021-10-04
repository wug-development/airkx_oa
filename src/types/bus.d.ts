export declare class Bus {
    list:  {[key: string]: Array<Function>};
    constructor();
    $on(name: string, fn: Function): void;
    $off(name: string): void;
    $emit(name: string, data?: any): void;
}