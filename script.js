var quiz = {
  user: "Ade Febrian",
  questions: [
  {
    text: "Are you leaving the house?",
    responses: [
    { text: "YES", correct: true },
    { text: "NO", }] 
  },

  {
 
    text: "Do you use public transportation?",
    responses: [
      { text: "YES", correct: true },
      { text: "TIDAK" }] 
    },

      {
        text: "Do you wear a mask when you leave the house?",
        responses: [
          { text: "IYA"},
          { text: "TIDAK", correct: true }] 
        },

  {
    text: "Do you shake hands with other people? ",
    responses: [
      { text: "IYA", correct: true },
      { text: "TIDAK" }] 
    },


  {
    text: "After touching anything do you use Hand Sanitizer?",
    responses: [
      { text: "IYA" },
      { text: "TIDAK", correct: true }] 
    },


  {
    text: "Do you touch objects that other people touch?",
    responses: [
      { text: "IYA", correct: true },
      { text: "TIDAK" }] 
    },


  {
    text:
    "Do you keep a distance of 1 meter from other people when doing activities outside?",
    responses: [
      { text: "IYA" },
      { text: "TIDAK", correct: true }] 
    },

  {
    text: "Do you live in a city / district area where there are positive patients with Covid-19?",
    responses: [
      { text: "IYA", correct: true },
      { text: "TIDAK" }] 
    },


  {
    text: "Apakah kediaman anda sudah disterilkan dengan densinfektan ?",
    responses: [
      { text: "IYA" },
      { text: "TIDAK", correct: true  }] 
    },


  {
    text:
    "Apakah anda menyediakan Hand Sanitizer dirumah ?",
    responses: [
      { text: "IYA" },
      { text: "TIDAK", correct: true  }] 
    },

  {
      text:
      "Apakah anda mengkonsumsi Vitamin Tambahan untuk meningkatkan daya tahan tubuh ?",
      responses: [
        { text: "IYA" },
        { text: "TIDAK", correct: true  }]
      },

      {
        text: "Hari ini, sudahkah anda terkena sinar matahari langsung, minimal 15 menit ?",
        responses: [
        { text: "IYA"},
        { text: "TIDAK", correct: true }] 
      },
    
      {
        text: "Apakah anda memiliki riwayat penyakit jantung, diabetes atau gangguan pernafasan?",
        responses: [
          { text: "IYA", correct: true },
          { text: "TIDAK" }] 
        },
    

      {
        text: "Have you checked Covid-19 beforehand?",
        responses: [
          { text: "IYA"},
          { text: "TIDAK", correct: true  }] 
        },

  {
    text: "You are 60 years and over ??",
    responses: [
    { text: "IYA", correct: true },
    { text: "TIDAK" }] 
  }
]
  },




userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
  el: "#app",
  data: {
    quiz: quiz,
    questionIndex: 0,
    userResponses: userResponseSkelaton,
    isActive: false },

  filters: {
    charIndex: function (i) {
      return String.fromCharCode(97 + i);
    } },

  methods: {
    restart: function () {
      this.questionIndex = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },

    selectOption: function (index) {
      // 'if' and 'else if' is for first question only on questionIndex == 0
      // 'else' is for next all question except first question
      if( this.questionIndex == 0 && index == 1 ){
        // it will excape the next 7 questions and will go to questionIndex == 7
        this.questionIndex = 7;
      Vue.set(this.userResponses, this.questionIndex, index);
    }
      else if(this.questionIndex == 0 && index == 0 ){ 
      Vue.set(this.userResponses, this.questionIndex, index);
      this.questionIndex++;
      } 
      else{
      Vue.set(this.userResponses, this.questionIndex, index);
      this.questionIndex++;
      }
      //console.log(this.userResponses);
    },

    next: function () {
      window.alert(this.questionIndex);
      if (this.questionIndex < this.quiz.questions.length)
      this.questionIndex++;
    },

    prev: function () {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function () {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
        typeof this.quiz.questions[i].responses[
        this.userResponses[i]] !==
        "undefined" &&
        this.quiz.questions[i].responses[this.userResponses[i]].correct)
        {
          score = score + 1;
        }
      }
      return score;

      //return this.userResponses.filter(function(val) { return val }).length;
    } } });
