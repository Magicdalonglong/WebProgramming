#include <iostream>
#include <time.h>
#include <iomanip>
#include <stack>
using namespace std;

class father{
public:
	int x;
	father(int p){
		x= p;
		cout<<"father construct: "<<x<<"\n";
	}
	~father(){
		cout<<"father dying: "<<x<<"\n";

	}

};


class son : father{
public:
	int x;
	son(int a): father(a){		
		cout<<"son construct: "<<x<<"\n";
	}
	~son(){
		cout<<"son dying: "<<x<<"\n";

	}

};


int main() {
	stack<string> mystack;

	mystack.push("Yingting");
	mystack.push("daughter");
	mystack.push("daddy");

	while(mystack.size()){
		cout<<mystack.top()<<endl;
		mystack.pop();

	}

    
}
