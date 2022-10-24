import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
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

    this.selectQuesRange({value:'0,50'})

  
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

    this.poin = +((countTrueAnswer/this.dataQuestion.length)*10).toFixed(2)
    this.showTrick = true
    this.title = this.poin<5 ? ` ${this.poin} điểm rớt môn`: `${this.poin} điểm qua môn`
    window.document.getElementById('result')?.click()
  }
  // randomQues(){
  //   this.listAnswer = []

  //   this.dataQuestion = []
  //   setTimeout(() =>{
  //     this.dataQuestion = this.question.data.filter((e:any)=>e.id > 0)
  //     this.dataQuestion.sort( (a:any, b:any) => {      
  //       return  0.5  - Math.random( )
  //     } )
  //   },10)
    
  //   this.showTrick = false
  // }
  selectQuesRange(e:any){
    let range = e.value
    range = range.split(',')
    return this.dataQuestion = this.question.data.filter((e:any)=>{return e.id >= +range[0] && e.id<= +range[1]} )
  }
  async reMake(e:any){
    window.document.getElementById('isSelect')?.focus()
    let a = window.document.getElementById('isSelect')  as HTMLSelectElement;
    a.selectedIndex = 0
    this.listAnswer = []
    this.dataQuestion = []
    setTimeout(() =>{
      this.selectQuesRange({value:'0,50'})
    },50)
    this.showTrick = false
  }
}
