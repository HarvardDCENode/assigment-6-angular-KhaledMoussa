import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  photoList = [
      {_id: 1, title:'Achilles', description:'Fighting at Troy', imageurl:'https://upload.wikimedia.org/wikipedia/commons/b/ba/Achilles_fighting_against_Memnon_Leiden_Rijksmuseum_voor_Oudheden.jpg'},
      {_id: 2, title:'Odysseus', description:'Lost at sea', imageurl:'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL29keXNzZXVzLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fX19'},
      {_id: 3, title:'Agamemnon', description:'King of the Greek', imageurl:'https://media1.shmoop.com/images/mythology/characters/agamemnon/agamemnon-briseis.jpg'},
      {_id: 4, title:'Menelaus', description:'King of Sparta', imageurl:'https://www.greeklegendsandmyths.com/uploads/5/3/1/3/53133595/tischbein-menelaus_orig.jpg'},
    ];

  constructor() { }
  listPhoto(){
    return this.photoList;
  }

  getPhoto(id){
    return this.photoList.find((el) => {return el._id == id});
  }
}
