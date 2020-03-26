var quiz = {
  user: "Ade Febrian",
  questions: [
  {
    text: "Apakah anda keluar rumah ?",
    responses: [
    { text: "IYA", correct: true },
    { text: "TIDAK" }] },

  {
    text: "Apakah anda menggunakan transportasi publik ?",
    responses: [
      { text: "IYA", correct: true },
      { text: "TIDAK" }] },

      {
        text: "Apakah anda menggunakan masker saat keluar rumah ?",
        responses: [
          { text: "IYA"},
          { text: "TIDAK", correct: true }] },

  {
    text: "Apakah anda berjabat tangan dengan orang lain ?",
    responses: [
      { text: "IYA", correct: true },
      { text: "TIDAK" }] },


  {
    text: "Apakah setelah menyentuh apapun anda gunakan Hand Sanitizer ?",
    responses: [
      { text: "IYA" },
      { text: "TIDAK", correct: true }] },


  {
    text: "Apakah anda menyentuh benda yang orang lain sentuh ?",
    responses: [
      { text: "IYA", correct: true },
      { text: "TIDAK" }] },


  {
    text:
    "Apakah anda menjaga jarak 1 meter dengan orang lain ketika berkegiatan diluar ?",
    responses: [
      { text: "IYA" },
      { text: "TIDAK", correct: true }] },

  {
    text: "Apakah anda tinggal di wilayah Kota/kabupaten yang terdapat pasien positif Covid-19 ?",
    responses: [
      { text: "IYA", correct: true },
      { text: "TIDAK" }] },


  {
    text: "Apakah kediaman anda sudah disterilkan dengan densinfektan ?",
    responses: [
      { text: "IYA" },
      { text: "TIDAK", correct: true  }] },


  {
    text:
    "Apakah anda menyediakan Hand Sanitizer dirumah ?",
    responses: [
      { text: "IYA" },
      { text: "TIDAK", correct: true  }] },

  {
      text:
      "Apakah anda mengkonsumsi Vitamin Tambahan untuk meningkatkan daya tahan tubuh ?",
      responses: [
        { text: "IYA" },
        { text: "TIDAK", correct: true  }] },

      {
        text: "Hari ini, sudahkah anda terkena sinar matahari langsung, minimal 15 menit ?",
        responses: [
        { text: "IYA"},
        { text: "TIDAK", correct: true }] },
    
      {
        text: "Apakah anda memiliki riwayat penyakit jantung, diabetes atau gangguan pernafasan?",
        responses: [
          { text: "IYA", correct: true },
          { text: "TIDAK" }] },
    

      {
        text: "Apakah anda sudah melakukan pengecekan Covid-19 Sebelumnya ?",
        responses: [
          { text: "IYA"},
          { text: "TIDAK", correct: true  }] },

    
  {
    text: "Anda berusia 60 tahun keatas??",
    responses: [
    { text: "IYA", correct: true },
    { text: "TIDAK" }] }] },




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
      Vue.set(this.userResponses, this.questionIndex, index);
      //console.log(this.userResponses);
    },
    next: function () {
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