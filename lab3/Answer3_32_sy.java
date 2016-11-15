import java.util.Scanner;

public class Answer3_32_sy{
	public static void main(String[] args){
		System.out.println("Function Description: This program is used to determine the position of a point p2, which Rectangular coordinate value is(x2, y2). Given a directed line from point p0(x0,y0) to p1(x1,y1), you can decide whether a point p2(x2,y2) is on the left of the line, on the right, or on the same line.");
		
		Scanner in = new Scanner(System.in);
		while(true){
			System.out.println("Do you want to continue the program? if yes, please enter Y, if no, please enter N");
			String whetherPlay = in.next();
			if("Y".equals(whetherPlay)||"y".equals(whetherPlay)){
	        	System.out.println("Please enter the x coordinate value and y coordinate value of p0, then enter the x coordinate value and y coordinate value of p1, and then enter the x coordinate value and y coordinate value of p2, and each coordinate value should be seperated by space, which looks like:x0 y0 x1 y1 x2 y2");
	    		double x0 = in.nextDouble();
	    		double y0 = in.nextDouble();
	    		double x1 = in.nextDouble();
	    		double y1 = in.nextDouble();
	    		double x2 = in.nextDouble();
	    		double y2 = in.nextDouble();
	    		double judge =(x1-x0)*(y2-y0)-(x2-x0)*(y1-y0);
	    		if(judge>0){
	    			System.out.println("("+x2+","+y2+")"+" is on the left side of the line from ("+x0+","+y0+") to ("+x1+","+y1+")");	    		
	    		}
	    		if(judge==0){
	    			System.out.println("("+x2+","+y2+")"+" is on the line from ("+x0+","+y0+") to ("+x1+","+y1+")");			
	    		}
	    		if(judge<0){
	    			System.out.println("("+x2+","+y2+")"+" is on the right side of the line from ("+x0+","+y0+") to ("+x1+","+y1+")");
	    		}
			}
	   		else if("N".equals(whetherPlay)||"n".equals(whetherPlay)){
	   			break;
		    }
	    	else{
	    		System.out.println("The format of the input is wrong, please try again.");
	    	}
       
		}
						
	}

}
