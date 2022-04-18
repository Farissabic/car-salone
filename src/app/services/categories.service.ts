import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private afs : AngularFirestore) { }

  loadCategories(){
    return this.afs.collection('categories').snapshotChanges().pipe(
      map(response=>{
        return response.map(res=>{
          const data = res.payload.doc.data();
          const id = res.payload.doc.id;
          return {id, data};
        })
      })
    )
  }
}
