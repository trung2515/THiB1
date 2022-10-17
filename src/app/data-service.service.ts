import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  data:any = [
    // {
    //   "id": 1,
    //   "question": 'He has been very interested in doing research on ............. since he was at high school.',
    //   "answer": [
    //     "biology ","biological","biologist","bjologically "
    //   ],
    //   "correctAnswer": "8",
    //   "inBook":"Câu 1",
    //   "trick":"vtv "
    // },
    {
      "id": 2,
      "question": 'Are you sure that boys are more ............ than girls?',
      "answer": [
        "act ","active","action","activity"
      ],
      "correctAnswer": "active",
      "inBook":"Câu 2",
      "trick":""
    },
    // {
    //   "id": 3,
    //   "question": 'it iS generally believed that “Men make ..... house and women make .... home',
    //   "answer": [
    //     "no article/ no article ","a/an","the/ the","an/ the"
    //   ],
    //   "correctAnswer": "",
    //   "inBook":"Câu 3",
    //   "trick":""
    // },
    {
      "id": 4,
      "question": 'Most doctors and nurses have to work on a ............ once or twice a week at the hospital.',
      "answer": [
        "solution  ","night shift","household chores","special dishes"
      ],
      "correctAnswer": "night shift",
      "inBook":"Câu 4",
      "trick":""
    }
    ,{
      "id": 5,
      "question": 'We enjoy....... time together in the evening when the family members gather in the living room After a day of working hard',
      "answer": [
        "spending","caring","taking","doing"
      ],
      "correctAnswer": "spending",
      "inBook":"Câu 5",
      "trick":" enjoy + V + ing"
    }
    ,{
      "id": 6,
      "question": "It is parents' duty and responsibility to..... hands to take care of their chỉldren and give them a happy home",
      "answer": [
        "shake","hold","join","take"
      ],
      "correctAnswer": "join",
      "inBook":"Câu 6",
      "trick":" jion hands = kết hợp chặt chẽ"
    }
    ,{
      "id": 7,
      "question": "He is a boy. He is often kind and helpful to every classmate.",
      "answer": [
        "frank","lovely","obedient","caring"
      ],
      "correctAnswer": "caring",
      "inBook":"Câu 7",
      "trick":" caring = Chu đáo"
    }
    ,{
      "id": 8,
      "question": "Doctors are supposed to ...... responsibility for human life",
      "answer": [
        "do","take","rush","join"
      ],
      "correctAnswer": "take",
      "inBook":"Câu 8",
      "trick":" take responsibility  = chiệu trách nhiệm"
    }
    ,{
      "id": 9,
      "question": "............ sure that you follow the instructions carefully.",
      "answer": [
        "Believe","Try","do","make"
      ],
      "correctAnswer": "make",
      "inBook":"Câu 9",
      "trick":""
    }
    ,{
      "id": 10,
      "question": "Sometimes Mr. Pike has to work very late....... night to do some important experiments.",
      "answer": [
        "in","at","for","on"
      ],
      "correctAnswer": "at",
      "inBook":"Câu 10",
      "trick":""
    }
    ,{
      "id": 11,
      "question": "Peter was....... a hurry to go so he did not stop to greet me.",
      "answer": [
        "in","on","with","over"
      ],
      "correctAnswer": "in",
      "inBook":"Câu 11",
      "trick":"in a hunry = đang vội"
    }
    ,{
      "id": 12,
      "question": "it... it is parents' responsibility to take good care of their children.",
      "answer": [
        "commonly says that","commonly to be said that","is commonly said that","is commonly saying"
      ],
      "correctAnswer": "is commonly said that",
      "inBook":"Câu 12",
      "trick":"is commonly said that = người ta thường nói rằng"
    }
  ]
      
    
    
    
  }

