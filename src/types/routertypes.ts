export interface CustomRouter {
    push(url: string): void;
    replace(url: string): void;
}