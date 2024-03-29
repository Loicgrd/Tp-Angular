import { Observable } from "rxjs"

/**
 * @interface IService
 * Define methods to be implemented in services crud class
 * @author Loic Gormand
 * @version 1.0
 *  -add method
 */
export interface IService <T> { //une interface est un contrat qui permet d'encadrer le nom spécialement pour le travail d'equipe
    /**
     * @param item T any type specialized in you implementation
     * @return void
     */
    add(item: T): void // <T> : accepter un item de type T générique (on peut passer qu'un type déclaré au préalable) 


    /**
     * Returns the whole list of T type
     */
    findAll(): Observable<Array <T>>

}

