class Stack{
    constructor(n){
        this.arr = [];
        this.n = n;
    }

    is_empty() {
        if(this.arr.length == 0){
            return true;
        }
        return false;
    }

    is_full(){
        if(this.arr.length == this.n){
            return true;
        }
        return false;
    }

    push(x){
       if(this.is_full()){
        console.log("Stack is full..");
    }else{
        this.arr.push(x);
       }
    }
    
    pop(x){
        if(this.is_empty()){
            console.log("Stack is empty");
        }else{
            this.arr.pop(x);
        }
    }

    show(){
        console.log(this.arr);
    }
}
