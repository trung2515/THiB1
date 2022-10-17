import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { MainService } from '../main.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor( public apiService:MainService,public question:DataServiceService) { }

  ngOnInit(): void {

  this.dataQuestion = this.question.data

  
  }
  dataQuestion:any = []

  listAnswer:any =[]
  poin:number = 0
  showTrick: boolean = false
  answerQues(myId:number,myAnswer:any){
    console.log(myId,myAnswer);
    let check = this.listAnswer.filter((e:any) => e.id === myId) 
  
    if(check.length == 0){

      this.listAnswer = [...this.listAnswer,{id: myId , answer:myAnswer}]
    }else{
 
      let index = this.listAnswer.findIndex((e:any) => e.id == check[0].id)
      this.listAnswer.splice(index,1,{id: myId , answer: myAnswer})
    }
    console.log('list answer',this.listAnswer);
    
  }
  title:any = ''
  mark(){
    let countTrueAnswer = 0
    let data = [...this.dataQuestion]
    this.listAnswer.forEach((e:any) => {
      let creQues:any = data.filter((q:any) => q.id == e.id)
      e.answer == creQues[0].correctAnswer? countTrueAnswer ++ : ''
    });

    this.poin = (countTrueAnswer/this.dataQuestion.length)*10
    this.showTrick = true
    this.title = `${this.poin} điểm`
    
  }
  randomQues(){
    this.listAnswer = []
    this.showTrick = false
  
  
    this.dataQuestion.sort( (a:any, b:any) => {      
      return  0.5  - Math.random( )
    } )
  }


}
