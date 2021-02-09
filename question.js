class Question{
    constructor(){
        this.input1=createInput("name")
        this.input2=createInput("your answer no.")
        this.input1.hide();
        this.input2.hide();
    }


display(){
   var title=createElement("h1");
   title.html("MY QUIZE GAME");
   title.position(350,0);

   this.question.html("what is start from 'T' ends from 'T' and have 'T' in it?")
   this.question.position(150,80);
   this.option1.html("1: Tint ");
   this.option1.position(150,100);
   this.option2.html("2: teapot ");
   this.option2.position(150,120);
   this.option3.html("3: threat ");
   this.option3.position(150,140);
   this.option4.html("4: taunt ");
   this.option4.position(150,160);

    this.input1.position(150,230);
    this.input1.position(150,260);


}












}