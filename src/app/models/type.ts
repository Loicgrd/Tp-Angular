/**
 * Type testing
 * @author Loic Gormand <loic.grd@gmail.com>
 * @version 1.0.0
 * - string, number, boolean, array, and data type
 * @version 1.0.1
 * - Map, Set
 */

export class Type {
    
    /**
     * Liste des primitifs (sans majuscule)
     * Zone de commentaire (ici on définit un commentaire sur la variable lastname)
     * @var {string} lastname of any guy or gal
     */
    public lastname : string = ''


    /**
     * @var { number } age of the captain
     */
    public age: number = 0


    /**
     * @var {boolean} isMale est-ce un homme ?
     * isxxx va souvent être un booleen
     * Un booleen si différent de 0 est vrai
     */
    public isMale: boolean = true

    /**
     * @var {Array} skills est un tableau de caractère (souvent fini par un s car tableau)
     */
    public skills: Array<string> = []

    /**
     * @var {Array} madSkills une autre facon de créer un tableau de caractère
     * la majuscule de Array fait référence à une classe
     */
    public madSkills: string[] = []

    /**
     * Mot clé 'new' pour créer l'objet à partir de la classe Date
     */
    public birthDate : Date = new Date()


}

