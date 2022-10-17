import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor( public apiService:MainService) { }

  ngOnInit(): void {
   this.getData()
  }
  dataQuestion:any = []
  getData(){
    this.apiService.get('http://localhost:3000/question').subscribe((data:any) => {
      console.log(data);
      this.dataQuestion = data
    })
  }
  listAnswer:any =[]
  answerQues(id:number,answer:any){
    console.log(id,answer);
    this.listAnswer.reduce((pre:any , cur:any) => {
      // if(pre[id]){
      //   pre.id = 
      // }
    },{})
    
  }
}
