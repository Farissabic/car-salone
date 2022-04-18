import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private afs:AngularFirestore) { }

  loadNewerPosts(){
    let d = new Date();
    let y = d.getFullYear();
    return this.afs.collection('Posts', ref=>{return ref.where('yare','>=',y).where('isFeatured','==',true)}).snapshotChanges().pipe(
      map(response=>{
        return response.map(res=>{
          const data = res.payload.doc.data();
          const id = res.payload.doc.id;
          return {id,data};
        })
      })
    )
    
  }


  loadArrivingPosts(){
    let d = new Date();
    let y = d.getFullYear();
    return this.afs.collection('Posts', ref=>ref.where('isFeatured','==',false)).snapshotChanges().pipe(
      map(response=>{
        return response.map(res=>{
          const data = res.payload.doc.data();
          const id = res.payload.doc.id;
          return {id,data};
        })
      })
    )
    
  }


  loadCategoryPosts(categoryID : string){
    return this.afs.collection('Posts', ref=>ref.where('category.categoryId','==',categoryID)).snapshotChanges().pipe(
      map(response=>{
        return response.map(res=>{
          const data = res.payload.doc.data();
          const id = res.payload.doc.id;
          return {id,data};
        })
      })
    )
  }

  loadOnePost(postID : string){
    return this.afs.collection('Posts').doc(postID).valueChanges();
  }

  loadSimilarPost(categoryID : string){
    return this.afs.collection('Posts',ref => ref.where('category.categoryId','==',categoryID).limit(8)).snapshotChanges().pipe(
      map(response=>{
        return response.map(res=>{
          const data = res.payload.doc.data();
          const id = res.payload.doc.id;
          return {id,data};
        })
      })
    )
  }
}
