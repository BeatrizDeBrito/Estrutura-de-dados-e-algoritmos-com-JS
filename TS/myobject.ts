// @ts-check

class MyObject implements Comparable<MyObject>{
    age: number;
    compareTo(b): number {
        if(this.age == b.age){
            return 0;
        }
        return this.age > b.age ? 1 :-1;
        
    }
  
}

