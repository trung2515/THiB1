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
      "question": "He is a......boy. He is often kind and helpful to every classmate.",
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
    ,{
      "id": 13,
      "question": "Most children enjoy......with their parents and siblings",
      "answer": [
        "play","to play","playing","played"
      ],
      "correctAnswer": "playing",
      "inBook":"Câu 13",
      "trick":"enjoy + V + ing"
    }
    ,{
      "id": 14,
      "question": "He studies............. his two brothers.",
      "answer": [
        "much better than","more better than","more good than","very better than"
      ],
      "correctAnswer": "much better than",
      "inBook":"Câu 14",
      "trick":""
    }
    ,{
      "id": 15,
      "question": "... the eldest child, he works hard to help his parents support the family.",
      "answer": [
        "be","is","to be","being"
      ],
      "correctAnswer": "being",
      "inBook":"Câu 15",
      "trick":""
    }
    ,{
      "id": 16,
      "question": "They............. for 3 hourS when the storm suddenly broke.",
      "answer": [
        "had been running","have been running","are running","will be running"
      ],
      "correctAnswer": "had been running",
      "inBook":"Câu 16",
      "trick":"trước when là 1 câu thì quá khứ hoàn thành"
    }
    ,{
      "id": 17,
      "question": "No matter what happens next, I .......help you",
      "answer": [
        "am","have","will","would"
      ],
      "correctAnswer": "will",
      "inBook":"Câu 17",
      "trick":""
    }
    ,{
      "id": 18,
      "question": "I........... come to the conclusion that nowadays nobody cares about anything",
      "answer": [
        "will","had","do","have"
      ],
      "correctAnswer": "have",
      "inBook":"Câu 18",
      "trick":"nowadays = cho tới ngày nay"
    }
    ,{
      "id": 19,
      "question": "I assumed you ......... paying for the repairs until the end of last year",
      "answer": [
        "have been","was been","are being","had been"
      ],
      "correctAnswer": "had been",
      "inBook":"Câu 19",
      "trick":"until the end of last year = cho tới cuối năm ngoái"
    }
    ,{
      "id": 20,
      "question": "......get tired ofanswering the same questions every day?",
      "answer": [
        "Have you ever"," Had you ever","Do you ever","Are you ever"
      ],
      "correctAnswer": "Do you ever",
      "inBook":"Câu 20",
      "trick":"every day chia thì hiện tại đơn"
    }
    ,{
      "id": 21,
      "question": "She ......... working on that manuscript for 2 years now",
      "answer": [
        "will be","has been","had been","is"
      ],
      "correctAnswer": "has been",
      "inBook":"Câu 21",
      "trick":"2 years now = 2 năm nay"
    }
    ,{
      "id": 22,
      "question": "I.......... there once a long time ago and I .. back since",
      "answer": [
        "went/ have not been","go/ am not","have gone/was","was going/had not been"
      ],
      "correctAnswer": "went/ have not been",
      "inBook":"Câu 22",
      "trick":"...ago...since"
    }
    ,{
      "id": 23,
      "question": "She........... trying to pass her driving test but fails every time.",
      "answer": [
        "kept","is keeping","had kept","keeps"
      ],
      "correctAnswer": "keeps",
      "inBook":"Câu 23",
      "trick":"every time"
    }
    ,{
      "id": 24,
      "question": " .......... complete silence now while I try this experiment.",
      "answer": [
        "am wanting","want","did want","have wanted"
      ],
      "correctAnswer": "want",
      "inBook":"Câu 24",
      "trick":""
    }

    ,{
      "id": 25,
      "question": " The students............ by Mrs. Monty. However, this week they.............. by Mr.Tanzer.",
      "answer": [
        "are usually taught/ are being taught","usually teach/ are teaching","have usually been taught/ have been teaching","were usually teaching/ are teaching"
      ],
      "correctAnswer": "are usually taught/ are being taught",
      "inBook":"Câu 25",
      "trick":""
    }
    ,{
      "id": 26,
      "question": "You are old enough to take.............for what you have done",
      "answer": [
        "responsible","responsibility","responsibly","irresponsible"
      ],
      "correctAnswer": "responsibility",
      "inBook":"Câu 26",
      "trick":"take + responsibility for hoặc be + responsible + for"
    }
    ,{
      "id": 27,
      "question": "These quick and easy................ can be effective in the short term, but they have a cost",
      "answer": [
        "solve","solvable","solutions","solvability"
      ],
      "correctAnswer": "solutions",
      "inBook":"Câu 27",
      "trick":""
    }
    ,{
      "id": 28,
      "question": "John is.......... only child in his Ramily, so his parents love him a lot",
      "answer": [
        "a","an","the","no article"
      ],
      "correctAnswer": "the",
      "inBook":"Câu 28",
      "trick":""
    }
    ,{
      "id": 29,
      "question": "According to the boss, John is the most....of executive secretary",
      "answer": [
        "supportive","caring","suitable","comfortable"
      ],
      "correctAnswer": "suitable",
      "inBook":"Câu 29",
      "trick":""
    }
    ,{
      "id": 30,
      "question": "She gọt up late and RUSH to the bus stop.",
      "answer": [
        "came into","went leisurely","went quickly","dropped by"
      ],
      "correctAnswer": "went quickly",
      "inBook":"Câu 30",
      "trick":""
    }
    ,{
      "id": 31,
      "question": "Billy, come and GIVE ME A HAND with cooking",
      "answer": [
        "help","prepared","be busy","attempt"
      ],
      "correctAnswer": "help",
      "inBook":"Câu 31",
      "trick":" give me a hand = giúp 1 tay"
    }
    ,{
      "id": 32,
      "question": "Whenever problems COME UP, we discuss them frankly and find solitions quickly",
      "answer": [
        "happen","encounter","arrive","clean"
      ],
      "correctAnswer": "happen",
      "inBook":"Câu 32",
      "trick":""
    }
    ,{
      "id": 33,
      "question": "What are the.......... of that country? - I think Ít is some kinds of cheese and sauces.",
      "answer": [
        "drinks","beverages","grains","special dishes"
      ],
      "correctAnswer": "special dishes",
      "inBook":"Câu 33",
      "trick":""
    }
    ,{
      "id": 34,
      "question": "Peter tried his best and passed the driving test at the first..... ",
      "answer": [
        "try","attempt","doing","aim"
      ],
      "correctAnswer": "attempt",
      "inBook":"Câu 34",
      "trick":"firt attempt = thử lần đầu"
    }
    ,{
      "id": 35,
      "question": "where is jimmy? - he is.....work. he is busy......his monthly report ",
      "answer": [
        "on/ for","in/ about","to/ through","at/ with"
      ],
      "correctAnswer": "at/ with",
      "inBook":"Câu 35",
      "trick":"busy + with"
    }
    ,{
      "id": 36,
      "question": "With greatly increased woridoads, everyone is .......... pressure now. ",
      "answer": [
        "under","above","upon","out of"
      ],
      "correctAnswer": "under",
      "inBook":"Câu 36",
      "trick":""
    }
    ,{
      "id": 37,
      "question": "We are not allowed.....jeans at schools",
      "answer": [
        "wear","to wear","wearing","worn"
      ],
      "correctAnswer": "to wear",
      "inBook":"Câu 37",
      "trick":""
    }
    ,{
      "id": 40,
      "question": "John.......... a respectful and obedient student",
      "answer": [
        "said to be","is said","is said being","is said to be"
      ],
      "correctAnswer": "is said to be",
      "inBook":"Câu 40",
      "trick":""
    }




  ]
      
    
    
    
  }

