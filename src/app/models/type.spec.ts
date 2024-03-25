import { Type } from './type';

describe('Type', () => {
  it('should create an instance', () => {
    expect(new Type()).toBeTruthy();
  });
  


  it ('should give an empty string for lastname', () => { //it prend 2 paramère, 1:la description du test, 2 : la fonction, séparé par une virgule
    const objet = new Type() //Instancie dans type la classe Type

    expect(objet.lastname).toEqual('') //expect veut dire qu'on attend quelque chose (ici on test lastname)
  })
  //pour tester le programme : ng test

  it ('Should give a date instance for birthdate and boolean', () => {
    const objet = new Type()
    expect(objet.isMale).toBeTrue()
    expect(objet.birthDate).toBeInstanceOf(Date)
    //possible de mettre tous les expect
    //toBeInstanceOg permet de vérifier si c'est la même classe
  })


});
