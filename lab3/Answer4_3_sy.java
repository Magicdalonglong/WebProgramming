
public class Answer4_3_sy{
	public static void main(String[] args){
		System.out.println("Function Description: The function of the program is to find the GPS location of Atlanta,Georgia, Orlando,Florida, Savannah,Georgia, Charlotte,north Carolina. And compute the estimated area of the four cities.");
		//www.gps-data-team.com/map/
		//latitude, longitude
		//1_atlanta,Georgia  33.928295, -84.360064
		//2_Orlando,florida  28.507963, -81.508754
		//3_Savannah,Georgia 32.0749, -81.0983
		//4_Charlotte,north Carolina  35.22802, -80.84405
		double x1 = Math.toRadians(33.928295);
		double y1 = Math.toRadians(-84.360064);
		double x2 = Math.toRadians(28.507963);
		double y2 = Math.toRadians(-81.508754);
		double x3 = Math.toRadians(32.0749);
		double y3 = Math.toRadians(-81.0983);
		double x4 = Math.toRadians(35.22802);
		double y4 = Math.toRadians(-80.84405);
		
		//1,2 3,4_two triangles
		//triangle1,2,3 and triangle 1,3,4
		double radius = 6371.01;
		double side1 = radius*Math.acos(Math.sin(x1)*Math.sin(x2)+Math.cos(x1)*Math.cos(x2)*Math.cos(y1-y2));
		double side2 = radius*Math.acos(Math.sin(x3)*Math.sin(x2)+Math.cos(x3)*Math.cos(x2)*Math.cos(y3-y2));
		double side3 = radius*Math.acos(Math.sin(x1)*Math.sin(x3)+Math.cos(x1)*Math.cos(x3)*Math.cos(y1-y3));
		
		double side4 = radius*Math.acos(Math.sin(x1)*Math.sin(x4)+Math.cos(x1)*Math.cos(x4)*Math.cos(y1-y4));
		double side5 = radius*Math.acos(Math.sin(x3)*Math.sin(x4)+Math.cos(x3)*Math.cos(x4)*Math.cos(y3-y4));
     	//System.out.println(side1+","+side2+","+side3+","+side4+","+side5);
		System.out.println("The distance between Atlanta, Georgia and Orlando, Florida is: "+side1+" km");
		System.out.println("The distance between Orlando,Florida and Savannah,Georgia is: "+side2+" km");
		System.out.println("The distance between Atlanta, Georgia and Savannah,Georgia is: "+side3+" km");
		System.out.println("The distance between Atlanta, Georgia and Charlotte,north Carolina is: "+side4+" km");
		System.out.println("The distance between Savannah,Georgia and Charlotte,north Carolina is: "+side5+" km");

		
		//triangle123
		double s123 = (side1+side2+side3)/2;
		double area123 = Math.pow(s123*(s123-side1)*(s123-side2)*(s123-side3) ,0.5);
		//triangle134
		double s134 = (side3+side4+side5)/2;
		double area134 = Math.pow(s134*(s134-side3)*(s134-side4)*(s134-side5) , 0.5);
		//System.out.println(s123+","+area123+","+s134+","+area134);
		//double test = s134*(s134-side3)*(s134-side4)*(s134-side5);
		//System.out.println("this is "+test);
		System.out.println("The area of triangle of Atlanta,Georgia;Orlando,Florida;and Savannah,Georgia is: "+s123+" square kilometers.");
		System.out.println("The area of triangle of Atlanta,Georgia;Savannah,Georgia;and Charlotte,north Carolina is: "+s134+" square kilometers.");
		
		double area=area123+area134;
		System.out.println("The estimated area enclosed by these four citys is: "+area+" square kilometers.");

	
	}
}
