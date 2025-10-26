const quesData = {
    "questions": [
        // 2d Array
        {
            "id": 0,
            "description": "Enter the Matrix of rows and columns entered by the user and print in matrix format",
            "difficulty": "easy",
            "topic": 0,
            "sample_input": `Enter A00th value : 15
Enter A01th value : 92
Enter A02th value : 32
Enter A10th value : 15
Enter A11th value : 52
Enter A12th value : 35
Enter A20th value : 36
Enter A21th value : 78
Enter A22th value : 48`,
            "sample_output": `Printing Matrix Values :
15      92      32
15      52      35
36      78      48`,
            "solution": {
                "language": "Java",
                "explanation": "The user enters the number of rows and columns, and the program prints the matrix.",
                "code": `import java.io.BufferedReader;
import java.io.InputStreamReader;

class Main{
	public static void main(String[] args){
		int arr[][] = new int[3][3];
		InputStreamReader isr = new InputStreamReader(System.in);
		BufferedReader br = new BufferedReader(isr);

		for(int i = 0; i < arr.length; i++){
			for(int j = 0; j < arr[i].length; j++){
				System.out.print("Enter A"+i+j+"th value : ");
				try{
					arr[i][j] = Integer.parseInt(br.readLine());
				}
				catch(NumberFormatException ex){
					j--;
					System.out.println("Enter a valid number");
				}
				catch(Throwable th){
					j--;
					System.out.println("Something Went Wrong : " + th.getMessage());
				}
			}
		}
		System.out.println("Printing Matrix Values : ");
		for(int i = 0; i < arr.length; i++){
			for(int j = 0; j < arr[i].length; j++){
				System.out.print(arr[i][j] + "\\t");
			}
			System.out.println();
		}
	}
}`
            }
        },
        {
            "id": 1,
            "description": "Program to Add Two Matrices",
            "difficulty": "easy",
            "topic": 0,
            "sample_input": null,
            "sample_output": `First Matrix :
1       2       3
2       3       5
1       1       1
Second Matrix :
4       4       1
7       1       6
9       0       3
Addition of above Matrix :
5       6       4
9       4       11
10      1       4`,
            "solution": {
                "language": "Java",
                "explanation": "This program takes two matrices as input and outputs their sum.",
                "code": `class Main{
	static int[][] matrixAdd(int mat1[][], int mat2[][]){
		int mat[][] = new int[mat1.length][mat1[0].length];
		if(mat1.length != mat2.length){
			return null;
		}
		for(int i = 0; i < mat1.length; i++){
			if(mat1[i].length != mat2[i].length){
				return null;
			}
		}
		for(int i = 0; i < mat1.length; i++){
			for(int j = 0; j < mat1[i].length; j++){
				mat[i][j] = mat1[i][j] + mat2[i][j];
			}
		}
		return mat;
	}

	static void printMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				System.out.print(mat[i][j]+"\\t");
			}
			System.out.println();
		}
	}
	public static void main(String[] args){
		int[][] m1 = {{1,2,3}, {2,3,5}, {1,1,1}};
		int[][] m2 = {{4,4,1}, {7,1,6}, {9,0,3}};
		int[][] res = matrixAdd(m1, m2);
		System.out.println("First Matrix : ");
		printMatrix(m1);
		System.out.println("Second Matrix : ");
		printMatrix(m2);
		System.out.println("Addition of above Matrix : ");
		printMatrix(res);
	}
}`
            }
        },
        {
            "id": 2,
            "description": "Program to Multiply Two Matrices",
            "difficulty": "medium",
            "topic": 0,
            "sample_input": null,
            "sample_output": `First Matrix :
1       2       3
2       3       5
1       1       1
Second Matrix :
4       4       1
7       1       6
9       0       3
Multiplication of above Matrix :
45      6       22
74      11      35
20      5       10`,
            "solution": {
                "language": "Java",
                "explanation": "This program multiplies two matrices and prints the result.",
                "code": `class Main{
	static int[][] matrixMultiply(int mat1[][], int mat2[][]){
		int mat[][] = new int[mat1.length][mat1[0].length];

		for(int i = 0; i < mat1.length; i++){
			if(mat1[i].length != mat2.length){
				System.out.println("Multiplication Not Possible");
				return null;
			}
		}
		for(int i = 0; i < mat1.length; i++){
			for(int j = 0; j < mat1[i].length; j++){
				mat[i][j] = 0;
				for(int k = 0; k < mat2[i].length; k++){
					mat[i][j] += (mat1[i][k] * mat2[k][j]);
				}
			}
		}
		return mat;
	}

	static void printMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				System.out.print(mat[i][j]+"\\t");
			}
			System.out.println();
		}
	}
	public static void main(String[] args){
		int[][] m1 = {{1,2,3}, {2,3,5}, {1,1,1}};
		int[][] m2 = {{4,4,1}, {7,1,6}, {9,0,3}};
		int[][] res = matrixMultiply(m1, m2);
		System.out.println("First Matrix : ");
		printMatrix(m1);
		System.out.println("Second Matrix : ");
		printMatrix(m2);
		System.out.println("Multiplication of above Matrix : ");
		printMatrix(res);
	}
}`
            }
        },
        {
            "id": 3,
            "description": "Program to Subtract the Two Matrices",
            "difficulty": "easy",
            "topic": 0,
            "sample_input": null,
            "sample_output": `First Matrix :
1       2       3
2       3       5
1       1       1
Second Matrix :
4       4       1
7       1       6
9       0       3
Subtraction of above Matrix :
-3      -2      2
-5      2       -1
-8      1       -2`,
            "solution": {
                "language": "Java",
                "explanation": "This program subtracts one matrix from another and prints the result.",
                "code": `class Main{
	static int[][] matrixSub(int mat1[][], int mat2[][]){
		int mat[][] = new int[mat1.length][mat1[0].length];
		if(mat1.length != mat2.length){
			return null;
		}
		for(int i = 0; i < mat1.length; i++){
			if(mat1[i].length != mat2[i].length){
				return null;
			}
		}
		for(int i = 0; i < mat1.length; i++){
			for(int j = 0; j < mat1[i].length; j++){
				mat[i][j] = mat1[i][j] - mat2[i][j];
			}
		}
		return mat;
	}

	static void printMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				System.out.print(mat[i][j]+"\\t");
			}
			System.out.println();
		}
	}
	public static void main(String[] args){
		int[][] m1 = {{1,2,3}, {2,3,5}, {1,1,1}};
		int[][] m2 = {{4,4,1}, {7,1,6}, {9,0,3}};
		int[][] res = matrixSub(m1, m2);
		System.out.println("First Matrix : ");
		printMatrix(m1);
		System.out.println("Second Matrix : ");
		printMatrix(m2);
		System.out.println("Subtraction of above Matrix : ");
		printMatrix(res);
	}
}`
            }
        },
        {
            "id": 4,
            "description": "Program to Determine Whether Two Matrices are Equal",
            "difficulty": "easy",
            "topic": 0,
            "sample_input": null,
            "sample_output": `First Matrix :
1       2       3
2       3       5
1       0       3
Second Matrix :
1       2       3
2       3       5
1       0       3
Both Matrix are Equal`,
            "solution": {
                "language": "Java",
                "explanation": "The program checks if two matrices are equal by comparing their elements.",
                "code": `class Main{
	static boolean isMatrixEqual(int mat1[][], int mat2[][]){
		if(mat1.length != mat2.length){
			return false;
		}
		for(int i = 0; i < mat1.length; i++){
			if(mat1[i].length != mat2[i].length){
				return false;
			}
		}
		for(int i = 0; i < mat1.length; i++){
			for(int j = 0; j < mat1[i].length; j++){
				if(mat1[i][j] != mat2[i][j]){
					return false;
				}
			}
		}
		return true;
	}

	static void printMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				System.out.print(mat[i][j]+"\\t");
			}
			System.out.println();
		}
	}
	public static void main(String[] args){
		int[][] m1 = {{1,2,3}, {2,3,5}, {1,0,3}};
		int[][] m2 = {{1,2,3}, {2,3,5}, {1,0,3}};
		System.out.println("First Matrix : ");
		printMatrix(m1);
		System.out.println("Second Matrix : ");
		printMatrix(m2);
		System.out.println((isMatrixEqual(m1, m2)) ? "Both Matrix are Equal" : "Both Matrix are not Equal");
	}
}`
            }
        },
        {
            "id": 5,
            "description": "Program to Display the Lower Triangular Matrix",
            "difficulty": "medium",
            "topic": 0,
            "sample_input": null,
            "sample_output": `Matrix :
1       2       3       4
52      2       3       5
1       7       5       3
8       1       8       3
Lower Triangular Matrix :
1       0       0       0
52      2       0       0
1       7       5       0
8       1       8       3`,
            "solution": {
                "language": "Java",
                "explanation": "This program prints only the lower triangular part of a matrix.",
                "code": `class Main{
	static void printMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				System.out.print(mat[i][j]+"\\t");
			}
			System.out.println();
		}
	}
	static void printLowerMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				if(i < j){
					System.out.print(0+"\\t");
				}
				else{
					System.out.print(mat[i][j]+"\\t");
				}
			}
			System.out.println();
		}
	}
	public static void main(String[] args){
		int[][] m1 = {{1,2,3,4}, {52,2,3,5}, {1,7,5,3}, {8,1,8,3}};
		System.out.println("Matrix : ");
		printMatrix(m1);
		System.out.println("Lower Triangular Matrix : ");
		printLowerMatrix(m1);
		
	}

}`
            }
        },
        {
            "id": 6,
            "description": "Program to Display the Upper Triangular Matrix",
            "difficulty": "medium",
            "topic": 0,
            "sample_input": null,
            "sample_output": `Matrix :
1       2       3       4
52      2       3       5
1       7       5       3
8       1       8       3
Upper Triangular Matrix :
1       2       3       4
0       2       3       5
0       0       5       3
0       0       0       3`,
            "solution": {
                "language": "Java",
                "explanation": "This program prints only the upper triangular part of a matrix.",
                "code": `class Main{
	static void printMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				System.out.print(mat[i][j]+"\\t");
			}
			System.out.println();
		}
	}
	static void printUpperMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				if(i > j){
					System.out.print(0+"\\t");
				}
				else{
					System.out.print(mat[i][j]+"\\t");
				}

			}
			System.out.println();
		}
	}
	public static void main(String[] args){
		int[][] m1 = {{1,2,3,4}, {52,2,3,5}, {1,7,5,3}, {8,1,8,3}};
		System.out.println("Matrix : ");
		printMatrix(m1);
		System.out.println("Upper Triangular Matrix : ");
		printUpperMatrix(m1);
		
	}

}`
            }
        },
        {
            "id": 7,
            "description": "Program to Find the Frequency of Odd & Even Numbers in the Given Matrix",
            "difficulty": "easy",
            "topic": 0,
            "sample_input": null,
            "sample_output": `Matrix :
1       2       3       4
52      2       3       5
1       7       5       3
8       1       8       3
Count of odd Numbers : 10
Count of even Numbers : 6`,
            "solution": {
                "language": "Java",
                "explanation": "This program counts how many odd and even numbers are in the matrix.",
                "code": `class Main{
	static void printMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				System.out.print(mat[i][j]+"\\t");
			}
			System.out.println();
		}
	}
	static void oddEvenFrequency(int mat[][]){
		int odd = 0, even = 0;
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				if((mat[i][j] % 2) == 0){
					even++;
				}
				else{
					odd++;
				}
			}
		}
		System.out.println("Count of odd Numbers : " + odd);
		System.out.println("Count of even Numbers : " + even);
	}
	public static void main(String[] args){
		int[][] m1 = {{1,2,3,4}, {52,2,3,5}, {1,7,5,3}, {8,1,8,3}};
		System.out.println("Matrix : ");
		printMatrix(m1);
		oddEvenFrequency(m1);		
	}

}`
            }
        },
        {
            "id": 8,
            "description": "Program to Find the Sum of Each Row and Each Column of a Matrix",
            "difficulty": "easy",
            "topic": 0,
            "sample_input": null,
            "sample_output": `Matrix :
1       2       3       4
52      2       3       5
1       7       5       3
8       1       8       3
Sum of Row 1 : 10
Sum of Row 2 : 62
Sum of Row 3 : 16
Sum of Row 4 : 20
Sum of Column 1 : 62
Sum of Column 2 : 12
Sum of Column 3 : 19
Sum of Column 4 : 15`,
            "solution": {
                "language": "Java",
                "explanation": "The program calculates the sum of each row and each column of the matrix.",
                "code": `class Main{
	static void printMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				System.out.print(mat[i][j]+"\\t");
			}
			System.out.println();
		}
	}
	static void sumOfRowAndCol(int mat[][]){
		int sum = 0;
		for(int i = 0; i < mat.length; i++){
			sum = 0;
			for(int j = 0; j < mat[i].length; j++){
				sum += mat[i][j];
			}
			System.out.println("Sum of Row " + (i+1) + " : " + sum);
		}
		for(int i = 0; i < mat.length; i++){
			sum = 0;
			for(int j = 0; j < mat[i].length; j++){
				sum += mat[j][i];
			}
			System.out.println("Sum of Column " + (i+1) + " : " + sum);
		}

	}
	public static void main(String[] args){
		int[][] m1 = {{1,2,3,4}, {52,2,3,5}, {1,7,5,3}, {8,1,8,3}};
		System.out.println("Matrix : ");
		printMatrix(m1);
		sumOfRowAndCol(m1);		
	}

}`
            }
        },
        {
            "id": 9,
            "description": "Program to Find the Transpose of a Given Matrix",
            "difficulty": "medium",
            "topic": 0,
            "sample_input": null,
            "sample_output": `Matrix :
1       2
52      2
1       3
8       3
Transpose of Above Matrix
1       52      1       8
2       2       3       3`,
            "solution": {
                "language": "Java",
                "explanation": "This program finds the transpose of a matrix by swapping its rows and columns.",
                "code": `class Main{
	static void printMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				System.out.print(mat[i][j]+"\\t");
			}
			System.out.println();
		}
	}
	static int[][] transpose(int mat[][]){
		int[][] transpose = new int[mat[0].length][mat.length];
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				transpose[j][i] = mat[i][j];
			}
		}
		return transpose;
	}
	public static void main(String[] args){
		int[][] m1 = {{1,2}, {52,2}, {1,3}, {8,3}};
		System.out.println("Matrix : ");
		printMatrix(m1);
		System.out.println("Transpose of Above Matrix");
		printMatrix(transpose(m1));		
	}

}`
            }
        },
        {
            "id": 10,
            "description": "Program to Determine Whether a Given Matrix is an Identity Matrix",
            "difficulty": "medium",
            "topic": 0,
            "sample_input": null,
            "sample_output": `Matrix :
1       2       9
52      2       2
1       3       8
No It is not an Identity matrix
Matrix :
1       0       0
0       1       0
0       0       1
Yes It is Identity matrix`,
            "solution": {
                "language": "Java",
                "explanation": "The program checks whether the given matrix is an identity matrix.",
                "code": `class Main{
	static void printMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				System.out.print(mat[i][j]+"\\t");
			}
			System.out.println();
		}
	}
	static boolean isIdentityMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				if(i == j){
					if(mat[i][j] != 1)
						return false;
				}
				else{
					if(mat[i][j] != 0)
						return false;
				}				
			}
		}
		return true;
	}
	public static void main(String[] args){
		int[][] m1 = {{1,2,9}, {52,2,2}, {1,3,8}};
		int[][] m2 = {{1,0,0}, {0,1,0}, {0,0,1}};
		System.out.println("Matrix : ");
		printMatrix(m1);
		System.out.println(isIdentityMatrix(m1) ? "Yes It is Identity matrix" : "No It is not an Identity matrix");
System.out.println("Matrix : ");
		printMatrix(m2);
		System.out.println(isIdentityMatrix(m2) ? "Yes It is Identity matrix" : "No It is not an Identity matrix");
	}

}`
            }
        },
        {
            "id": 11,
            "description": "Program to Transpose Matrix",
            "difficulty": "easy",
            "topic": 0,
            "sample_input": null,
            "sample_output": `Matrix :
1       2
52      2
1       3
8       3
Transpose of Above Matrix
1       52      1       8
2       2       3       3`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the transpose of a matrix.",
                "code": `class Main{
	static void printMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				System.out.print(mat[i][j]+"\\t");
			}
			System.out.println();
		}
	}
	static int[][] transpose(int arr[][]){
		for(int i = 1; i < arr.length; i++){
			if(arr[i].length != arr[i-1].length){
				return null;
			}
		}
		if(arr.length > 0){
			int mat[][] = new int[arr[0].length][arr.length];
			for(int i = 0; i < arr.length; i++){
				for(int j = 0; j < arr[i].length; j++){
					mat[j][i] = arr[i][j];				
				}
			}
			return mat;
		}
		else{
			return null;
		}
	}
	public static void main(String[] args){
		int arr[][] = {{9, 8, 5}, {5, 8, 5}, {9, 7,0}, {5, 8, 3}};
		System.out.println("Matrix : ");
		printMatrix(arr);
		System.out.println("Transpose : ");
		printMatrix(transpose(arr));
	}
}`
            }
        },
        {
            "id": 12,
            "description": "Program to Determine Whether a Given Matrix is a Sparse Matrix",
            "difficulty": "medium",
            "topic": 0,
            "sample_input": null,
            "sample_output": `Matrix :
1       2       9
52      2       2
1       3       8
No It is not an Sparse matrix
Matrix :
1       0       0
0       1       0
0       0       1
Yes It is Sparse matrix`,
            "solution": {
                "language": "Java",
                "explanation": "The program checks whether the matrix is sparse, i.e., has more zero elements than non-zero ones.",
                "code": `class Main{
	static void printMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				System.out.print(mat[i][j]+"\\t");
			}
			System.out.println();
		}
	}
	static boolean isSparseMatrix(int mat[][]){
		int zeros = 0;
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				if(mat[i][j] == 0){
					zeros++;
				}
				else{
					zeros--;
				}				
			}
		}
		return (zeros > 0) ? true : false;
		
	}
	public static void main(String[] args){
		int[][] m1 = {{1,2,9}, {52,2,2}, {1,3,8}};
		int[][] m2 = {{1,0,0}, {0,1,0}, {0,0,1}};
		System.out.println("Matrix : ");
		printMatrix(m1);
		System.out.println(isSparseMatrix(m1) ? "Yes It is Sparse matrix" : "No It is not an Sparse matrix");
		System.out.println("Matrix : ");
		printMatrix(m2);
		System.out.println(isSparseMatrix(m2) ? "Yes It is Sparse matrix" : "No It is not an Sparse matrix");
	}

}`
            }
        },
        // Functions
        {
            "id": 13,
            "description": "Write a Java method to find the smallest number among three numbers.",
            "difficulty": "easy",
            "topic": 6,
            "sample_input": null,
            "sample_output": `Minimum value of 105, 9, 209 is 9`,
            "solution": {
                "language": "Java",
                "explanation": "This method compares three numbers and returns the smallest one.",
                "code": `class Main{
	static int minOfThree(int x, int y, int z){
		if(x < y){
			if(x < z){
				return x;
			}
			else{
				return z;
			}
		}
		else{
			if(y < z){
				return y;
			}
			else{
				return z;
			}
		}
	}
	public static void main(String[] args){	
		System.out.println("Minimum value of 105, 9, 209 is " + minOfThree(105,9,209));
	}
}`
            }
        },
        {
            "id": 14,
            "description": "Write a Java method to compute the average of three numbers.",
            "difficulty": "easy",
            "topic": 6,
            "sample_input": null,
            "sample_output": `Average of 105, 9, 209 is 107.66666666666667`,
            "solution": {
                "language": "Java",
                "explanation": "This method takes three numbers as input and returns their average.",
                "code": `class Main{
	static double avgOfThree(int x, int y, int z){
		return ((x + y + z)/3.0);
	}
	public static void main(String[] args){	
		System.out.println("Average of 105, 9, 209 is " + avgOfThree(105,9,209));
	}
}`
            }
        },
        {
            "id": 15,
            "description": "Write a Java method to display the middle character of a string. Note: a) If the length of the string is even there will be two middle characters. b) If the length of the string is odd there will be one middle character.",
            "difficulty": "medium",
            "topic": 6,
            "sample_input": null,
            "sample_output": `Middle Character = l and o`,
            "solution": {
                "language": "Java",
                "explanation": "This method calculates and prints the middle character(s) of a string.",
                "code": `class Main{
	static char[] midChar(String str){
		int len = str.length();
		if(len % 2 == 0){
			len /= 2;
			char[] arr = {str.charAt(len)};
			return arr;
		}
		else{
			len /= 2;
			char[] arr = {str.charAt(len), str.charAt(len+1)};
			return arr;
		}
	}
	public static void main(String[] args){
		char arr[];
		arr = midChar("hellow");
		if(arr.length == 1){
 			System.out.println("Middle Character = " + arr[0]);
		}
		else{
			System.out.println("Middle Character = " + arr[0] + " and " + arr[1]);
		} 
	}
}`
            }
        },
        {
            "id": 16,
            "description": "Write a Java method to count all the words in a string.",
            "difficulty": "easy",
            "topic": 6,
            "sample_input": null,
            "sample_output": `Number of words in string is : 5`,
            "solution": {
                "language": "Java",
                "explanation": "This method counts the number of words in a given string by splitting it using spaces.",
                "code": `class Main{
	static int wordCount(String str){	
		int count = 0, len = str.length();
		
		for(int i = 0; i < len; i++){
			if(Character.isDigit(str.charAt(i))){
				while(str.charAt(i) != ' ' && (i+1) != len){
					i++;
				}
			}
			else{
				if((str.charAt(i) == ' ' || (i+1) == len) && Character.isLetter(str.charAt(i-1))){
				count++;
			}
			}
			
		}
		return count;
	}

	public static void main(String[] args){
		int count = wordCount("Java is a Programming Language");
		System.out.println("Number of words in string is : " + count);
	}
}`
            }
        },
        {
            "id": 17,
            "description": "Write a Java method to compute the future investment value at a given interest rate for a specified number of years.",
            "difficulty": "medium",
            "topic": 6,
            "sample_input": null,
            "sample_output": `Amount = 10000
Rate of Interest = 10
Years = 5
Your Future Value is 16105.10`,
            "solution": {
                "language": "Java",
                "explanation": "This method calculates the future investment value based on interest rate and years.",
                "code": `class Main{
	static double getFutureValue(double amt, double roi, int time){
		double fv = amt*Math.pow((1+(roi/100)), time);
		return fv;
	}
	public static void main(String[] args){
		System.out.println("Amount = 10000");
		System.out.println("Rate of Interest = 10");
		System.out.println("Years = 5");
		System.out.printf("Your Future Value is %.2f" , getFutureValue(10000.0, 10.0, 5));
	}
}`
            }
        },
        {
            "id": 18,
            "description": "Write a Java method to print characters between two characters (i.e. A to P).",
            "difficulty": "easy",
            "topic": 6,
            "sample_input": null,
            "sample_output": `Character Between A and F :
B       C       D       E`,
            "solution": {
                "language": "Java",
                "explanation": "This method prints all characters in the ASCII sequence between two specified characters.",
                "code": `class Main{
	static void charBetween(char a, char b){
		if(Character.compare(a, b) == 0 || ((a+1) == b)){
			System.out.println("No Characters are present between " + a + " and " + b);
		}
		else if(Character.compare(a, b) < 0){
			a++;
			while(a != b){
				System.out.print(a++ + "\\t");
			}
		}
		else{
			b++;
			while(b != a){
				System.out.print(b++ + "\\t");
			}
		}
	}
	public static void main(String[] args){
		System.out.println("Character Between A and F : ");
		charBetween('A', 'F');
	}
}`
            }
        },
        {
            "id": 19,
            "description": "Write a Java method to check whether a string is a valid password.",
            "difficulty": "medium",
            "topic": 6,
            "sample_input": null,
            "sample_output": `Password is Valid
Invalid Password`,
            "solution": {
                "language": "Java",
                "explanation": "This method checks if a string satisfies certain password criteria, like length, uppercase, digits, etc.",
                "code": `class Main{
	static Boolean isPasswordValid(String str){
		int len = str.length(), charlen = 0;
		boolean hasnum = false, hassymbol = false;

		if(len < 12){
			return false;
		}
		for(int i = 0; i < len; i++){
			if(str.charAt(i) >= 'A' && str.charAt(i) <= 'Z' || str.charAt(i) >= 'a' && str.charAt(i) <= 'z'){
				charlen++;
			}
			else if(str.charAt(i) >= '0' && str.charAt(i) <= '9'){
				hasnum = true;
			}
			else if(str.charAt(i) >= '!' && str.charAt(i) <= '@'){
				hassymbol = true;	
			}
		}
		if(charlen >=8 && hasnum && hassymbol){
			return true;
		}
		return false;
	}
	public static void main(String[] args){
		System.out.println(isPasswordValid("Abhishek@4204") ? "Password is Valid" : "Invalid Password" );
		System.out.println(isPasswordValid("Abhishek4204") ? "Password is Valid" : "Invalid Password" );
	}
}`
            }
        },
        {
            "id": 20,
            "description": "Write a Java method to display the current date and time.",
            "difficulty": "easy",
            "topic": 6,
            "sample_input": null,
            "sample_output": `Date : 16/9/2024
Time : 23H:18M:48S`,
            "solution": {
                "language": "Java",
                "explanation": "This method prints the current date and time using Java's date-time API.",
                "code": `class MyDateClass{
	java.util.Date obj = new java.util.Date();
	static void printDateAndTime(){
		java.util.Date obj = new java.util.Date();
		System.out.println("Date : "+obj.getDate()+"/"+obj.getMonth()+"/"+(obj.getYear()+1900));
		System.out.println("Time : "+obj.getHours()+"H:"+obj.getMinutes()+"M:"+obj.getSeconds()+"S");
	}
	public static void main(String args[]){
		printDateAndTime();
	}

}`
            }
        },
        {
            "id": 21,
            "description": "Write a Java method to find all twin prime numbers less than 100.",
            "difficulty": "medium",
            "topic": 6,
            "sample_input": null,
            "sample_output": `3 and 5 are twin Prime
5 and 7 are twin Prime
11 and 13 are twin Prime
17 and 19 are twin Prime
29 and 31 are twin Prime
41 and 43 are twin Prime
59 and 61 are twin Prime
71 and 73 are twin Prime`,
            "solution": {
                "language": "Java",
                "explanation": "This method identifies and prints all twin primes less than 100.",
                "code": `class Main{
	static Boolean isPrime(int num){
		for(int i = 2; i < num; i++){
			if(num % i == 0){
				return false;
			}
		}
		return true;
	}
	static void twinPrime(){
		int prevPrime = 0;
		for(int i = 3; i <= 100; i++){
			if(isPrime(i)){
				if((i - prevPrime) == 2){
					System.out.println(prevPrime + " and " + i + " are twin Prime");
				}
				prevPrime = i;
			}
		}
	}
	public static void main(String[] args){
		twinPrime();
	}
}`
            }
        },
        {
            "id": 22,
            "description": "Write a Java method to count the number of digits. The integer may be assumed to be non-negative.",
            "difficulty": "easy",
            "topic": 6,
            "sample_input": null,
            "sample_output": `Number of Digits in 55969 is : 5`,
            "solution": {
                "language": "Java",
                "explanation": "This method counts how many times the digit 2 appears in a non-negative integer.",
                "code": `class Main{
	static int numLength(int num){
		int count = 0;
		if(num > 0){
			while(num > 0){
				count++;
				num /= 10;
			}
		}
		return count;
	}
	public static void main(String[] args){
		System.out.println("Number of Digits in 55969 is : " + numLength(55969));
	}
}`
            }
        },
        {
            "id": 23,
            "description": "Write a Java method that accepts three integers and checks whether they are consecutive or not. Returns true or false.",
            "difficulty": "medium",
            "topic": 6,
            "sample_input": null,
            "sample_output": `Consecutive Numbers`,
            "solution": {
                "language": "Java",
                "explanation": "This method checks whether the three integers are consecutive in value.",
                "code": `class Main{
	static boolean isConsecutive(int a, int b, int c){
		if(((a+1) == b && (a+2) == c) || (a+1) == c && (a+2) == b){
			return true;
		}
		else if(((b+1) == a && (b+2) == c) || ((b+1) == c && (b+2) == a)){
			return true;
		}
		else if(((c+1) == a && (c+2) == b) || (c+1) == b && (c+2) == a){
			return true;
		}
		return false;
	}
	public static void main(String[] args){
		System.out.println((isConsecutive(9,10,8)) ? "Consecutive Numbers" : "Numbers are not Consecutive");
	}
}`
            }
        },
        {
            "id": 24,
            "description": "Write a Java method that accepts three integers and returns true if one is the middle point between the other two integers, otherwise false.",
            "difficulty": "medium",
            "topic": 6,
            "sample_input": null,
            "sample_output": `Entered numbers contain middle number`,
            "solution": {
                "language": "Java",
                "explanation": "This method checks if one integer is the midpoint between the other two integers.",
                "code": `class Main{
	static boolean isOneMiddle(int a, int b, int c){
		if(a == (b+c)/2 || b == (a+c)/2 || c == (b+a)/2){
			return true;
		}
		return false;
	}
	public static void main(String[] args){
		System.out.println((isOneMiddle(10, 100, 55)) ? "Entered numbers contain middle number " : "Numbers does not contain middle number");
	}
}`
            }
        },
        {
            "id": 25,
            "description": "Write a Java method that checks whether all the characters in a given string are vowels (a, e, i, o, u) or not. Return true if each character in the string is a vowel, otherwise return false.",
            "difficulty": "medium",
            "topic": 6,
            "sample_input": null,
            "sample_output": `String Contains Vowels and Consonents`,
            "solution": {
                "language": "Java",
                "explanation": "This method checks if every character in the string is a vowel.",
                "code": `class Main{
	static boolean isVowel(char ch){
		if(ch == 'A' || ch == 'a' || ch == 'E' || ch == 'e' || ch == 'I' || ch == 'i' || ch == 'O' || ch == 'o' || ch == 'U' || ch == 'u'){
			return true;
		}
		return false;
	}
	static boolean hasAllVowel(String str){
		for(int i = 0; i < str.length(); i++){
			if(!isVowel(str.charAt(i))){
				return false;
			}
		}
		return true;
	}
	public static void main(String[] args){
		System.out.println((hasAllVowel("aerou")) ? "String Contains Vowels only" : "String Contains Vowels and Consonents");
	}
}`
            }
        },
        // Inheritance
        {
            "id": 26,
            "description": "Write a Java program to create a class called Animal with a method called makeSound(). Create a subclass called Cat that overrides the makeSound() method to bark.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": `Meow`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates class inheritance and method overriding.",
                "code": `class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class Cat extends Animal {
    public void makeSound() {
        System.out.print("Meow");
    }
}

class Main {
    public static void main(String[] args) {
        Cat myCat = new Cat();
        myCat.makeSound(); 
    }
}
`
            }
        },
        {
            "id": 27,
            "description": "Write a Java program to create a class called Vehicle with a method called drive(). Create a subclass called Car that overrides the drive() method to print 'Repairing a car'.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": `Repairing a car`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates class inheritance and method overriding.",
                "code": `class Vehicle {
    void drive() {
        System.out.println("Driving a vehicle");
    }
}

class Car extends Vehicle {
    void drive() {
        System.out.print("Repairing a car");
    }
}

class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.drive();  
    }
}
`
            }
        },
        {
            "id": 28,
            "description": "Write a Java program to create a class called Shape with a method called getArea(). Create a subclass called Rectangle that overrides the getArea() method to calculate the area of a rectangle.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": `Area of the rectangle: 15.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates overriding methods for calculating area in a subclass.",
                "code": `class Shape {
    double getArea() {
        System.out.println("Calculating area of the shape");
        return 0.0;
    }
}

class Rectangle extends Shape {
    private double length;
    private double width;

    Rectangle(double l, double w) {
        length = l;
        width = w;
    }

    double getArea() {
        return length * width;
    }
}

class Main {
    public static void main(String[] args) {
        Rectangle myRectangle = new Rectangle(5.0, 3.0);

        System.out.println("Area of the rectangle: " + myRectangle.getArea()); 
    }
}
`
            }
        },
        {
            "id": 29,
            "description": "Write a Java program to create a class called Employee with methods called work() and getSalary(). Create a subclass called HRManager that overrides the work() method and adds a new method called addEmployee().",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": `HR Manager is managing employees of company
Salary: 80000.0
Employee is working
Salary: 10000.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates method overriding and adding new methods in a subclass.",
                "code": `class Employee {
    private double salary;

    void setSalary(double amt) {
        salary = amt;
    }

    void work() {
        System.out.println("Employee is working");
    }

    double getSalary() {
        return salary;
    }
}

class HRManager extends Employee {
    HRManager(double salary) {
        setSalary(salary); 
    }

    void work() {
        System.out.println("HR Manager is managing employees of company");
    }

    Employee addEmployee(int salary) {
        Employee emp = new Employee();
	emp.setSalary(salary);
	return emp;
    }
}

class Main {
    public static void main(String[] args) {
        Employee newEmployee;

        HRManager hrManager = new HRManager(80000);
        hrManager.work();  
        System.out.println("Salary: " + hrManager.getSalary()); 
        newEmployee = hrManager.addEmployee(10000); 
	newEmployee.work();  
        System.out.println("Salary: " + newEmployee.getSalary()); 
    }
}
`
            }
        },
        {
            "id": 30,
            "description": "Write a Java program to create a class known as 'BankAccount' with methods called deposit() and withdraw(). Create a subclass called SavingsAccount that overrides the withdraw() method to prevent withdrawals if the account balance falls below one hundred.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": `Initial Balance: 500.0
Deposited: 200.0
Balance after deposit: 700.0
Processing withdraw of 300.0Rs
Withdrawn: 300.0
Balance after withdrawal: 400.0
Processing withdraw of 350.0Rs
Withdrawal denied. Account balance cannot fall below 100.
Final balance: 400.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates method overriding with account balance restrictions.",
                "code": `class BankAccount {
    private double balance;

    BankAccount(double amt) {
        balance = amt;
    }

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount);
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }

    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Invalid or insufficient funds for withdrawal.");
        }
    }

    double getBalance() {
        return balance;
    }
}

class SavingsAccount extends BankAccount {
    SavingsAccount(double startAmt) {
        super(startAmt);     
    }

    void withdraw(double amount) {
	System.out.println("Processing withdraw of "+amount+"Rs");
        if (getBalance() - amount >= 100) {
            super.withdraw(amount);
        } else {
            System.out.println("Withdrawal denied. Account balance cannot fall below 100.");
        }
    }
}

class Main {
    public static void main(String[] args) {
        SavingsAccount myAcct = new SavingsAccount(500.0);
	System.out.println("Initial Balance: " +myAcct.getBalance());
        myAcct.deposit(200.0); 
        System.out.println("Balance after deposit: " + myAcct.getBalance()); 

        myAcct.withdraw(300.0); 
        System.out.println("Balance after withdrawal: " + myAcct.getBalance()); 

        myAcct.withdraw(350.0); 
        System.out.println("Final balance: " + myAcct.getBalance()); 
    }
}
`
            }
        },
        {
            "id": 31,
            "description": "Write a Java program to create a class called Animal with a method named move(). Create a subclass called Cheetah that overrides the move() method to run.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": `Run`,
            "solution": {
                "language": "Java",
                "explanation": "This program shows how subclasses can modify inherited behavior.",
                "code": `class Animal {
    void move() {
        System.out.println("Move");
    }
}

class Cheetah extends Animal {
    void move() {
        System.out.println("Run");
    }
}

class Main {
    public static void main(String[] args) {
        Cheetah myCheetah = new Cheetah();
        myCheetah.move();
    }
}
`
            }
        },
        {
            "id": 32,
            "description": "Write a Java program to create a class known as Person with methods called getFirstName() and getLastName(). Create a subclass called Employee that adds a new method named getEmployeeId() and overrides the getLastName() method to include the employee's job title.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": `Normal Person :
First Name : Abhishek
Last Name : Dhawan
Employee :
Id : 5595
First Name : Mark
Last Name : Zukerburg ( Facebook's CEO )`,
            "solution": {
                "language": "Java",
                "explanation": "This program illustrates method overriding and adding new properties in a subclass.",
                "code": `class Person{
	private String firstname, lastname;
	Person(String fname, String lname){
		firstname = fname;
		lastname = lname;
	}
	String getFirstName(){
		return firstname;
	}
	String getLastName(){
		return lastname;
	}
}

class Employee extends Person{
	private int empid;
	private String jobtitle;
	Employee(String fname, String lname, int id, String title){
		super(fname, lname);
		empid = id;
		jobtitle = title;
	}
	int getEmployeeId(){
		return empid;
	}
	String getLastName(){
		return super.getLastName() + " ( " + jobtitle + " ) ";
	}
}

class Main{
	public static void main(String args[]){
		Person p1 = new Person("Abhishek", "Dhawan");
		System.out.println("Normal Person : ");
		System.out.println("First Name : " + p1.getFirstName());
		System.out.println("Last Name : " + p1.getLastName());
	
		Employee emp1 = new Employee("Mark", "Zukerburg", 5595, "Facebook's CEO");
		System.out.println("Employee : ");
		System.out.println("Id : " + emp1.getEmployeeId());
		System.out.println("First Name : " + emp1.getFirstName());
		System.out.println("Last Name : " + emp1.getLastName());
	}
}`
            }
        },
        {
            "id": 33,
            "description": "Write a Java program to create a class called Shape with methods called getPerimeter() and getArea(). Create a subclass called Circle that overrides the getPerimeter() and getArea() methods to calculate the area and perimeter of a circle.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": `Perimeter of the circle: 31.41592653589793
Area of the circle: 78.53981633974483`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates method overriding for specific shape calculations.",
                "code": `abstract class Shape {
    double getPerimeter(){return 0.0;}
    
    double getArea(){return 0.0;}
}

class Circle extends Shape {
    double radius;

    Circle(double r) {
        radius = r;
    }

    double getPerimeter() {
        return 2 * Math.PI * radius;
    }

    double getArea() {
        return Math.PI * radius * radius;
    }
}

class Main {
    public static void main(String[] args) {
        Circle myCircle = new Circle(5.0);
        
        System.out.println("Perimeter of the circle: " + myCircle.getPerimeter());         	System.out.println("Area of the circle: " + myCircle.getArea());             }
}
`
            }
        },
        {
            "id": 34,
            "description": "Write a Java program to create a vehicle class hierarchy. The base class should be Vehicle, with subclasses Truck, Car and Motorcycle. Each subclass should have properties such as make, model, year, and fuel type. Implement methods for calculating fuel efficiency, distance traveled, and maximum speed.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates class hierarchies and method implementations for vehicles.",
                "code": null
            }
        },
        {
            "id": 35,
            "description": "Write a Java program that creates a class hierarchy for employees of a company. The base class should be Employee, with subclasses Manager, Developer, and Programmer. Each subclass should have properties such as name, address, salary, and job title. Implement methods for calculating bonuses, generating performance reports, and managing projects.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": `Manager:
Name: Alice
Address: 123 Elm St
Salary: 90000.0
Job Title: Team Manager
Team Size: 10
Bonus: 9000.0
Manager Alice has successfully managed a team of 10 members.
Manager Alice is overseeing project progress and team performance.

Developer:
Name: Bob
Address: 456 Oak St
Salary: 80000.0
Job Title: Senior Developer
Programming Language: Java
Bonus: 6400.0
Developer Bob is proficient in Java.
Developer Bob is working on coding tasks and software development.

Programmer:
Name: Charlie
Address: 789 Pine St
Salary: 70000.0
Job Title: Junior Programmer
Project Assigned: Inventory System
Bonus: 4900.000000000001
Programmer Charlie is working on project: Inventory System.
Programmer Charlie is focusing on tasks related to project: Inventory System.`,
            "solution": {
                "language": "Java",
                "explanation": "This program illustrates a class hierarchy with various employee roles.",
                "code": `abstract class Employee {
    private String name;
    private String address;
    private double salary;
    private String jobTitle;

    Employee(String name, String address, double salary, String jobTitle) {
        this.name = name;
        this.address = address;
        this.salary = salary;
        this.jobTitle = jobTitle;
    }

    abstract double calculateBonus();

    abstract void generatePerformanceReport();

    abstract void manageProjects();

    String getName() {
        return name;
    }

    String getAddress() {
        return address;
    }

    double getSalary() {
        return salary;
    }

    String getJobTitle() {
        return jobTitle;
    }
}

class Manager extends Employee {
    private int teamSize;

    Manager(String name, String address, double salary, String jobTitle, int team){
        super(name, address, salary, jobTitle);
        teamSize = team;
    }

    double calculateBonus() {
        return getSalary() * 0.10;
    }

    void generatePerformanceReport() {
        System.out.println("Manager " + getName() + " has successfully managed a team of " + teamSize + " members.");
    }

    void manageProjects() {
        System.out.println("Manager " + getName() + " is overseeing project progress and team performance.");
    }

    int getTeamSize() {
        return teamSize;
    }
}

class Developer extends Employee {
    private String programmingLanguage;

    Developer(String name, String address, double salary, String jobTitle, String language) {
        super(name, address, salary, jobTitle);
        programmingLanguage = language;
    }

    double calculateBonus() {
        return getSalary() * 0.08; 
    }

    void generatePerformanceReport() {
        System.out.println("Developer " + getName() + " is proficient in " + programmingLanguage + ".");
    }

    void manageProjects() {
        System.out.println("Developer " + getName() + " is working on coding tasks and software development.");
    }

    String getProgrammingLanguage() {
        return programmingLanguage;
    }
}

class Programmer extends Employee {
    private String projectAssigned;

    Programmer(String name, String address, double salary, String jobTitle, String project) {
        super(name, address, salary, jobTitle);
        projectAssigned = project;
    }

    double calculateBonus() {
        return getSalary() * 0.07;
    }

    void generatePerformanceReport() {
        System.out.println("Programmer " + getName() + " is working on project: " + projectAssigned + ".");
    }

    void manageProjects() {
        System.out.println("Programmer " + getName() + " is focusing on tasks related to project: " + projectAssigned + ".");
    }

    String getProjectAssigned() {
        return projectAssigned;
    }
}

class Main {
    public static void main(String[] args) {
        Manager manager = new Manager("Alice", "123 Elm St", 90000, "Team Manager", 10);
        Developer developer = new Developer("Bob", "456 Oak St", 80000, "Senior Developer", "Java");
        Programmer programmer = new Programmer("Charlie", "789 Pine St", 70000, "Junior Programmer", "Inventory System");

        System.out.println("Manager:");
        System.out.println("Name: " + manager.getName());
        System.out.println("Address: " + manager.getAddress());
        System.out.println("Salary: " + manager.getSalary());
        System.out.println("Job Title: " + manager.getJobTitle());
        System.out.println("Team Size: " + manager.getTeamSize());
        System.out.println("Bonus: " + manager.calculateBonus());
	manager.generatePerformanceReport();
        manager.manageProjects();

        System.out.println("\\nDeveloper:");
        System.out.println("Name: " + developer.getName());
        System.out.println("Address: " + developer.getAddress());
        System.out.println("Salary: " + developer.getSalary());
        System.out.println("Job Title: " + developer.getJobTitle());
        System.out.println("Programming Language: " + 	developer.getProgrammingLanguage());
        System.out.println("Bonus: " + developer.calculateBonus());
        developer.generatePerformanceReport();
        developer.manageProjects();

        System.out.println("\\nProgrammer:");
        System.out.println("Name: " + programmer.getName());
        System.out.println("Address: " + programmer.getAddress());
        System.out.println("Salary: " + programmer.getSalary());
        System.out.println("Job Title: " + programmer.getJobTitle());
        System.out.println("Project Assigned: " + programmer.getProjectAssigned());
        System.out.println("Bonus: " + programmer.calculateBonus());
        programmer.generatePerformanceReport();
        programmer.manageProjects();
    }
}
`
            }
        },
        {
            "id": 36,
            "description": "Create a program, showing an example of super keyword.",
            "difficulty": "easy",
            "topic": 9,
            "sample_input": null,
            "sample_output": `Without super keyword : Value of x = 10
With super keyword : Value of x in super class = 20`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates the use of the super keyword in accessing superclass properties.",
                "code": `class MyClass{
	int x;
	void displayX(){
		System.out.println("Value of x in super class = " + x);
	}
}
class MyClassEx extends MyClass{
	int x;
	void setX(int val){
		x = val;
	}
	void displayX(){
		System.out.println("Value of x = " + x);
	}
	void setParentX(int val){
		super.x = val;
	}
	void printParentX(){
		super.displayX();
	}
}
class Main{
	public static void main(String[] args){
		MyClassEx obj = new MyClassEx();
		obj.setX(10);
		obj.setParentX(20);
		System.out.print("Without super keyword : ");
		obj.displayX();
		System.out.print("With super keyword : ");
		obj.printParentX();
	}
}`
            }
        },
        {
            "id": 37,
            "description": "Create a program, showing an example of super function.",
            "difficulty": "easy",
            "topic": 9,
            "sample_input": null,
            "sample_output": `Default Constructor of parent class
Parameterized Constructor of parent class`,
            "solution": {
                "language": "Java",
                "explanation": "This program shows how to call a superclass constructor using super().",
                "code": `class MyClass{
	MyClass(){
		System.out.println("Default Constructor of parent class");
	}
	MyClass(String msg){
		System.out.println("Parameterized Constructor of parent class");
	}
}
class MyClassEx extends MyClass{
	MyClassEx(){
		super();
	}
	MyClassEx(String msg){
		super(msg);
	}
}
class Main{
	public static void main(String[] args){
		MyClassEx obj, obj1;
		obj = new MyClassEx();
		obj1 = new MyClassEx("My");
	}
}`
            }
        },
        {
            "id": 38,
            "description": "Create a program, showing an example of method overriding.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": `Overrided Method : Use Automated Billing System
Non Overrided Method : Jai Shree Ganesh`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates method overriding in subclasses.",
                "code": `class Father{
	void worship(){
		System.out.println("Jai Shree Ganesh");
	}
	void billing(){
		System.out.println("Works Mannually on Paper");
	}
}
class Son extends Father{
	void billing(){
		System.out.println("Use Automated Billing System");
	}
}
class Main{
	public static void main(String[] args){
		Son s = new Son();
		System.out.print("Overrided Method : ");
		s.billing();
		System.out.print("Non Overrided Method : ");
		s.worship();
	}
}`
            }
        },
        {
            "id": 39,
            "description": "Create a program, showing an example of dynamic method dispatch.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": `x = 10
Child Class`,
            "solution": {
                "language": "Java",
                "explanation": "This program illustrates dynamic method dispatch through polymorphism.",
                "code": `class MyClass{
	int x;
	void display(){
		System.out.println("x = "+x);
	}
	void printMsg(){
		System.out.println("Parent Class");
	}
}
class MyClassEx extends MyClass{
	void printMsg(){
		System.out.println("Child Class");
	}
}
class Main{
	public static void main(String[] args){
		MyClass obj = new MyClassEx();
		obj.x = 10;
		obj.display();
		obj.printMsg();
	}
}`
            }
        },
        {
            "id": 40,
            "description": "Write a Java program to create an abstract class Animal with an abstract method called sound(). Create subclasses Lion and Tiger that extend the Animal class and implement the sound() method to make a specific sound for each animal.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": `Lion Roars
Tiger Growls`,
            "solution": {
                "language": "Java",
                "explanation": "This program shows the use of abstract classes and methods.",
                "code": `abstract class Animal {
    abstract void sound();
}

class Lion extends Animal {
    void sound() {
        System.out.println("Lion Roars");
    }
}

class Tiger extends Animal {
    void sound() {
        System.out.println("Tiger Growls");
    }
}

class Main {
    public static void main(String[] args) {
        Animal lion = new Lion();
        Animal tiger = new Tiger();

        lion.sound(); 
        tiger.sound();
    }
}
`
            }
        },
        {
            "id": 41,
            "description": "Write a Java program to create an abstract class Shape with abstract methods calculateArea() and calculatePerimeter(). Create subclasses Circle and Triangle that extend the Shape class and implement the respective methods to calculate the area and perimeter of each shape.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": `Circle:
Radius: 5.0
Area: 78.53981633974483
Perimeter: 31.41592653589793

Triangle:
Sides: 3.0, 4.0, 5.0
Area: 6.0
Perimeter: 12.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates abstract classes and method implementation in subclasses.",
                "code": `abstract class Shape {
    abstract double calculateArea();
    
    abstract double calculatePerimeter();
}

class Circle extends Shape {
    private double radius;

    Circle(double r) {
        radius = r;
    }

    double calculateArea() {
        return Math.PI * radius * radius;
    }

    double calculatePerimeter() {
        return 2 * Math.PI * radius; 
    }

    double getRadius() {
        return radius;
    }
}

class Triangle extends Shape {
    private double side1;
    private double side2;
    private double side3;

    Triangle(double a, double b, double c) {
        side1 = a;
        side2 = b;
        side3 = c;
    }

    double calculateArea() {
        double s = (side1 + side2 + side3) / 2;
        return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    }

    double calculatePerimeter() {
        return side1 + side2 + side3; 
    }

     double getSide1() {
        return side1;
    }

     double getSide2() {
        return side2;
    }

     double getSide3() {
        return side3;
    }
}

class Main {
     public static void main(String[] args) {
        Shape circle = new Circle(5.0);
        System.out.println("Circle:");
        System.out.println("Radius: " + ((Circle) circle).getRadius());
        System.out.println("Area: " + circle.calculateArea());
        System.out.println("Perimeter: " + circle.calculatePerimeter());

        Shape triangle = new Triangle(3.0, 4.0, 5.0);
        System.out.println("\\nTriangle:");
        System.out.println("Sides: " + ((Triangle) triangle).getSide1() + ", " 
                            + ((Triangle) triangle).getSide2() + ", " 
                            + ((Triangle) triangle).getSide3());
        System.out.println("Area: " + triangle.calculateArea());
        System.out.println("Perimeter: " + triangle.calculatePerimeter());
    }
}
`
            }
        },
        {
            "id": 42,
            "description": "Write a Java program to create an abstract class BankAccount with abstract methods deposit() and withdraw(). Create subclasses: SavingsAccount and CurrentAccount that extend the BankAccount class and implement the respective methods to handle deposits and withdrawals for each account type.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": `Saving Account : Initial Amount 1000.0
Deposited 200.0 into Savings Account. New Balance: 1200.0
Withdrew 150.0 from Savings Account. New Balance: 1050.0
Interest of 52.5 added to Savings Account. New Balance: 1102.5
Current Account : Initial Amount 500.0
Deposited 100.0 into Current Account. New Balance: 600.0
Withdrew 700.0 from Current Account. New Balance: -100.0
Withdrew 200.0 from Current Account. New Balance: -300.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program illustrates abstract classes for bank accounts and their implementations.",
                "code": `abstract class BankAccount {
    double balance;

    BankAccount(double initialBalance) {
        balance = initialBalance;
    }

    abstract void deposit(double amount);

    abstract void withdraw(double amount);

    double getBalance() {
        return balance;
    }
}

class SavingsAccount extends BankAccount {
    private double interestRate;

    SavingsAccount(double initialBalance, double ir) {
        super(initialBalance);
        interestRate = ir;
    }

    void deposit(double amount) {
        if (amount >= 100) {
            balance += amount;
            System.out.println("Deposited " + amount + " into Savings Account. New Balance: " + balance);
        } else {
            System.out.println("Minimum Deposit Amount is 100");
        }
    }

    void withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
            System.out.println("Withdrew " + amount + " from Savings Account. New Balance: " + balance);
        } else {
            System.out.println("Invalid withdrawal amount or insufficient funds.");
        }
    }

    void calculateInterest() {
        double interest = balance * (interestRate / 100);
        balance += interest;
        System.out.println("Interest of " + interest + " added to Savings Account. New Balance: " + balance);
    }
}

class CurrentAccount extends BankAccount {
    private double overdraftLimit;

    CurrentAccount(double initialBalance, double draftLmt) {
        super(initialBalance);
        overdraftLimit = draftLmt;
    }

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited " + amount + " into Current Account. New Balance: " + balance);
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }

    void withdraw(double amount) {
        if (amount > 0 && (balance + overdraftLimit) >= amount) {
            balance -= amount;
            System.out.println("Withdrew " + amount + " from Current Account. New Balance: " + balance);
        } else {
            System.out.println("Invalid withdrawal amount or exceeded overdraft limit.");
        }
    }
}

class Main {
    public static void main(String[] args) {
        SavingsAccount savingsAccount = new SavingsAccount(1000, 5);
	System.out.println("Saving Account : Initial Amount " + savingsAccount.getBalance());
        savingsAccount.deposit(200);
        savingsAccount.withdraw(150);
        savingsAccount.calculateInterest();


        CurrentAccount currentAccount = new CurrentAccount(500, 300);
	System.out.println("Current Account : Initial Amount " + currentAccount.getBalance());
        currentAccount.deposit(100);
        currentAccount.withdraw(700); 
        currentAccount.withdraw(200); 
    }
}
`
            }
        },
        {
            "id": 43,
            "description": "Write a Java program to create an abstract class Animal with abstract methods eat() and sleep(). Create subclasses Lion, Tiger, and Deer that extend the Animal class and implement the eat() and sleep() methods differently based on their specific behavior.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": `Lion:
The lion eats meat
The lion sleeps for 19-20 hours a day.
Tiger:
The tiger eats meat
The tiger sleeps for 16-20 hours a day.
Deer:
The deer grazes on grass and plants.
The deer sleeps for 4-6 hours a day in short intervals.`,
            "solution": {
                "language": "Java",
                "explanation": "This program shows how to define abstract methods and implement them in subclasses.",
                "code": `abstract class Animal {
     abstract void eat();

     abstract void sleep();
}

class Lion extends Animal {
     void eat() {
        System.out.println("The lion eats meat");
    }

     void sleep() {
        System.out.println("The lion sleeps for 19-20 hours a day.");
    }
}

class Tiger extends Animal {
     void eat() {
        System.out.println("The tiger eats meat");
    }

     void sleep() {
        System.out.println("The tiger sleeps for 16-20 hours a day.");
    }
}

class Deer extends Animal {
     void eat() {
        System.out.println("The deer grazes on grass and plants.");
    }
    
     void sleep() {
        System.out.println("The deer sleeps for 4-6 hours a day in short intervals.");
    }
}

class Main {
     public static void main(String[] args) {
        Animal lion = new Lion();
        Animal tiger = new Tiger();
        Animal deer = new Deer();

        System.out.println("Lion:");
        lion.eat();
        lion.sleep();

        System.out.println("Tiger:");
        tiger.eat();
        tiger.sleep();

        System.out.println("Deer:");
        deer.eat();
        deer.sleep();
    }
}
`
            }
        },
        {
            "id": 44,
            "description": "Write a Java program to create an abstract class Employee with abstract methods calculateSalary() and displayInfo(). Create subclasses Manager and Programmer that extend the Employee class and implement the respective methods to calculate salary and display information for each role.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": `Manager Information:
Name: Abhishek
Age: 45
Base Salary: 5000.0
Bonus: 1500.0
Total Salary: 6500.0
Programmer Information:
Name: Misbah
Age: 30
Base Salary: 4000.0
Bonus: 700.0
Overtime Hours: 10
Overtime Rate: 50.0
Total Salary: 5200.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates abstract classes for employee roles and their implementations.",
                "code": `abstract class Employee {
    String name;
    int age;
    double baseSalary;
    double bonus;

     Employee(String nm, int ag, double bs, double bn) {
        name = nm;
        age = ag;
        baseSalary = bs;
	bonus = bn;
    }

     abstract double calculateSalary();

     abstract void displayInfo();
}

class Manager extends Employee {
    
     Manager(String name, int age, double baseSalary, double bonus) {
        super(name, age, baseSalary, bonus);
    }

     double calculateSalary() {
        return baseSalary + bonus; 
    }

     void displayInfo() {
        System.out.println("Manager Information:");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Base Salary: " + baseSalary);
        System.out.println("Bonus: " + bonus);
        System.out.println("Total Salary: " + calculateSalary());
    }
}

class Programmer extends Employee {
    private int overtimeHours;
    private double overtimeRate;

     Programmer(String name, int age, double baseSalary, double bonus, int oth, double otr) {
        super(name, age, baseSalary, bonus);
        overtimeHours = oth;
        overtimeRate = otr;
    }

     double calculateSalary() {
        return baseSalary + bonus + (overtimeHours * overtimeRate); 
    }

     void displayInfo() {
        System.out.println("Programmer Information:");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Base Salary: " + baseSalary);
        System.out.println("Bonus: " + bonus);
        System.out.println("Overtime Hours: " + overtimeHours);
        System.out.println("Overtime Rate: " + overtimeRate);
        System.out.println("Total Salary: " + calculateSalary());
    }
}

 class Main {
     public static void main(String[] args) {
        Employee manager = new Manager("Abhishek", 45, 5000, 1500);
        manager.displayInfo(); 

        Employee programmer = new Programmer("Misbah", 30, 4000, 700, 10, 50);
        programmer.displayInfo(); 
    }
}
`
            }
        },
        {
            "id": 45,
            "description": "Write a Java program to create an abstract class Shape3D with abstract methods calculateVolume() and calculateSurfaceArea(). Create subclasses Sphere and Cube that extend the Shape3D class and implement the respective methods to calculate the volume and surface area of each shape.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": `Sphere Volume: 523.5987755982989
Sphere Surface Area: 314.1592653589793
Cube Volume: 64.0
Cube Surface Area: 96.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program illustrates abstract classes for 3D shapes and their implementations.",
                "code": `abstract class Shape3D {
    abstract double calculateVolume();
    abstract double calculateSurfaceArea();
}

class Sphere extends Shape3D {
    double radius;

    Sphere(double r) {
        radius = r;
    }

    double calculateVolume() {
        return ((4.0 / 3.0) * Math.PI * radius * radius * radius);
    }

    double calculateSurfaceArea() {
        return (4 * Math.PI * radius * radius);
    }
}

class Cube extends Shape3D {
    double side;

    Cube(double s) {
        side = s;
    }

    double calculateVolume() {
        return (side * side * side);
    }

    double calculateSurfaceArea() {
        return (6 * side * side);
    }
}

class Main {
    public static void main(String[] args) {
        Shape3D sphere = new Sphere(5);
        System.out.println("Sphere Volume: " + sphere.calculateVolume());
        System.out.println("Sphere Surface Area: " + sphere.calculateSurfaceArea());

        Shape3D cube = new Cube(4);
        System.out.println("Cube Volume: " + cube.calculateVolume());
        System.out.println("Cube Surface Area: " + cube.calculateSurfaceArea());
    }
}
`
            }
        },
        {
            "id": 46,
            "description": "Write a Java program to create an abstract class Vehicle with abstract methods startEngine() and stopEngine(). Create subclasses Car and Motorcycle that extend the Vehicle class and implement the respective methods to start and stop the engines for each vehicle type.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": `Car Engine Started
Car Engine Stopped
Motorcycle Engine Started
Motorcycle Engine Stopped`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates abstract classes for vehicle operations.",
                "code": `abstract class Vehicle{
	abstract void startEngine();
	abstract void stopEngine();
}

class Car extends Vehicle{
	void startEngine(){
		System.out.println("Car Engine Started");
	}
	void stopEngine(){
		System.out.println("Car Engine Stopped");
	}
}

class Motorcycle extends Vehicle{
	void startEngine(){
		System.out.println("Motorcycle Engine Started");
	}
	void stopEngine(){
		System.out.println("Motorcycle Engine Stopped");
	}
}

class Main{
	public static void main(String[] args){
		Car mycar = new Car();
		mycar.startEngine();
		mycar.stopEngine();


		Motorcycle mymotor = new Motorcycle();
		mymotor.startEngine();
		mymotor.stopEngine();
	}
}	`
            }
        },
        {
            "id": 47,
            "description": "Write a Java program to create an abstract class Person with abstract methods eat() and exercise(). Create subclasses Athlete and LazyPerson that extend the Person class and implement the respective methods to describe how each person eats and exercises.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": `Athelete :
Likes to eat healthy meal like Green Vegetables etc
Doing exercise regularly
Lazy Person :
Like to eat fast food more often
Not able to do exercise for whole life`,
            "solution": {
                "language": "Java",
                "explanation": "This program shows abstract classes for different types of persons and their behaviors.",
                "code": `abstract class Person{
	abstract void eat();
	abstract void exercise();
}

class Athlete extends Person{
	void eat(){
		System.out.println("Likes to eat healthy meal like Green Vegetables etc ");
	}
	void exercise(){
		System.out.println("Doing exercise regularly");
	}
}


class LazyPerson extends Person{
	void eat(){
		System.out.println("Like to eat fast food more often");
	}
	void exercise(){
		System.out.println("Not able to do exercise for whole life");
	}
}

class Main{
	public static void main(String[] args){
		Athlete ath = new Athlete();
		System.out.println("Athelete : ");
		ath.eat();
		ath.exercise();

		System.out.println("Lazy Person : ");
		LazyPerson lp = new LazyPerson();
		lp.eat();
		lp.exercise();
	}
}`
            }
        },
        {
            "id": 48,
            "description": "Write a Java program to create an abstract class Instrument with abstract methods play() and tune(). Create subclasses for Glockenspiel and Violin that extend the Instrument class and implement the respective methods to play and tune each instrument.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": `Playing the Glockenspiel with mallets
Tuning the Glockenspiel by adjusting the metal bars
Playing the Violin with a bow
Tuning the Violin by adjusting the pegs`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates abstract classes for musical instruments.",
                "code": `abstract class Instrument {
    abstract void play();
    abstract void tune();
}

class Glockenspiel extends Instrument {
    void play() {
        System.out.println("Playing the Glockenspiel with mallets");
    }

    void tune() {
        System.out.println("Tuning the Glockenspiel by adjusting the metal bars");
    }
}

class Violin extends Instrument {
    void play() {
        System.out.println("Playing the Violin with a bow");
    }

    void tune() {
        System.out.println("Tuning the Violin by adjusting the pegs");
    }
}

class Main {
    public static void main(String[] args) {
        Instrument glockenspiel = new Glockenspiel();
        glockenspiel.play();
        glockenspiel.tune();

        Instrument violin = new Violin();
        violin.play();
        violin.tune();
    }
}
`
            }
        },
        {
            "id": 49,
            "description": "Write a Java program to create an abstract class Shape2D with abstract methods draw() and resize(). Create subclasses Rectangle and Circle that extend the Shape2D class and implement the respective methods to draw and resize each shape.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": `Drawing a rectangle with width 4.0 and height 5.0
Resized rectangle to width 6.0 and height 7.5
Drawing a circle with radius 3.0
Resized circle to radius 6.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program illustrates abstract classes for 2D shapes.",
                "code": `abstract class Shape2D {
    abstract void draw();
    abstract void resize(double scaleAmt);
}

class Rectangle extends Shape2D {
    double width;
    double height;

    Rectangle(double w, double h) {
       	width = w;
        height = h;
    }

    void draw() {
        System.out.println("Drawing a rectangle with width " + width + " and height " + height);
    }

    void resize(double scaleAmt) {
        width *= scaleAmt;
        height *= scaleAmt;
        System.out.println("Resized rectangle to width " + width + " and height " + height);
    }
}

class Circle extends Shape2D {
    double radius;

    Circle(double r) {
        radius = r;
    }

    void draw() {
        System.out.println("Drawing a circle with radius " + radius);
    }

    void resize(double scaleAmt) {
        radius *= scaleAmt;
        System.out.println("Resized circle to radius " + radius);
    }
}

class Main {
    public static void main(String[] args) {
        Shape2D rectangle = new Rectangle(4, 5);
        rectangle.draw();
        rectangle.resize(1.5);

        Shape2D circle = new Circle(3);
        circle.draw();
        circle.resize(2);
    }
}
`
            }
        },
        {
            "id": 50,
            "description": "Write a Java program to create an abstract class Bird with abstract methods fly() and makeSound(). Create subclasses Eagle and Hawk that extend the Bird class and implement the respective methods to describe how each bird flies and makes a sound.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": `The eagle soars high in the sky with powerful wing strokes.
The eagle makes a sharp screeching sound.
The hawk glides swiftly and dives at high speed.
The hawk emits a high-pitched, shrill scream.`,
            "solution": {
                "language": "Java",
                "explanation": "This program shows abstract classes for birds and their behaviors.",
                "code": `abstract class Bird {
    abstract void fly();
    abstract void makeSound();
}

class Eagle extends Bird {
    void fly() {
        System.out.println("The eagle soars high in the sky with powerful wing strokes.");
    }

    void makeSound() {
        System.out.println("The eagle makes a sharp screeching sound.");
    }
}

class Hawk extends Bird {
    void fly() {
        System.out.println("The hawk glides swiftly and dives at high speed.");
    }

    void makeSound() {
        System.out.println("The hawk emits a high-pitched, shrill scream.");
    }
}

class Main {
    public static void main(String[] args) {
        Bird eagle = new Eagle();
        eagle.fly();
        eagle.makeSound();

        Bird hawk = new Hawk();
        hawk.fly();
        hawk.makeSound();
    }
}

`
            }
        },
        {
            "id": 51,
            "description": "Write a Java program to create an abstract class GeometricShape with abstract methods area() and perimeter(). Create subclasses Triangle and Square that extend the GeometricShape class and implement the respective methods to calculate the area and perimeter of each shape.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": `Triangle Area: 7.5
Triangle Perimeter: 15.0
Square Area: 16.0
Square Perimeter: 16.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates abstract classes for geometric shapes.",
                "code": `abstract class GeometricShape {
    abstract double area();
    abstract double perimeter();
}

class Triangle extends GeometricShape {
    double base;
    double height;
    double side1;
    double side2;
    double side3;

    Triangle(double bs, double hgt, double a, double b, double c) {
        base = bs;
        height = hgt;
        side1 = a;
        side2 = b;
        side3 = c;
    }

    double area() {
        return (0.5 * base * height);
    }

    double perimeter() {
        return (side1 + side2 + side3);
    }
}

class Square extends GeometricShape {
    double side;

    Square(double a) {
        side = a;
    }

    double area() {
        return (side * side);
    }

    double perimeter() {
        return (4 * side);
    }
}

class Main {
    public static void main(String[] args) {
        GeometricShape triangle = new Triangle(5, 3, 5, 4, 6);
        System.out.println("Triangle Area: " + triangle.area());
        System.out.println("Triangle Perimeter: " + triangle.perimeter());

        GeometricShape square = new Square(4);
        System.out.println("Square Area: " + square.area());
        System.out.println("Square Perimeter: " + square.perimeter());
    }
}`
            }
        },
        // Input/Output
        {
            "id": 52,
            "description": "Enter the character from user using InputStreamReader",
            "difficulty": "easy",
            "topic": 10,
            "sample_input": `Enter Any Character : c`,
            "sample_output": `Value Entered : c`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to enter a character using InputStreamReader.",
                "code": `import java.io.InputStreamReader;

class Main{
	public static void main(String[] args){
		char ch = ' ';
		InputStreamReader isr = new InputStreamReader(System.in);
		System.out.print("Enter Any Character : ");
		try{
			ch = (char) isr.read();
		}
		catch(java.io.IOException exp){
			System.out.println("Any Hardware Issue Occured");
		}
		catch(Throwable th){
			System.out.println("Unexpected Error : " +th.getMessage());
		}
		System.out.println("Value Entered : " + ch);
	}
}`
            }
        },
        {
            "id": 53,
            "description": "Enter the string from user using BufferedReader",
            "difficulty": "easy",
            "topic": 10,
            "sample_input": `Enter String :
Abhishek Dhawan`,
            "sample_output": `String Entered : Abhishek Dhawan`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to enter a string using BufferedStreamReader.",
                "code": `import java.io.InputStreamReader;
import java.io.BufferedReader;

class Main{
	public static void main(String[] args){
		String str = "";
		InputStreamReader isr = new InputStreamReader(System.in);
		BufferedReader br = new BufferedReader(isr);
		System.out.println("Enter String : ");
		try{
			str = br.readLine();
		}
		catch(java.io.IOException exp){
			System.out.println("Any Hardware Issue Occured");
		}
		catch(Throwable th){
			System.out.println("Unexpected Error : " +th.getMessage());
		}
		System.out.println("String Entered : " + str);
	}
}`
            }
        },
        {
            "id": 54,
            "description": "Enter the integer from user using Scanner class",
            "difficulty": "easy",
            "topic": 10,
            "sample_input": `Enter Integer Value : 483`,
            "sample_output": `Integer Entered : 483`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to enter an integer using the Scanner class.",
                "code": `import java.util.Scanner;

class Main{
	public static void main(String[] args){
		int var = 0;
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter Integer Value : ");
		try{
			var = sc.nextInt();
			System.out.println("Integer Entered : " + var);
		}
		catch(java.util.InputMismatchException ime){
			System.out.println("Entered Non Integer Values");
		}
		catch(Throwable th){
			System.out.println("Unexpected Error : " + th.getMessage());
		}
	}
}`
            }
        },
        {
            "id": 55,
            "description": "Enter the float from user using Scanner class",
            "difficulty": "easy",
            "topic": 10,
            "sample_input": `Enter Float Value : 5055.365`,
            "sample_output": `Float Entered : 5055.365`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to enter a float value using the Scanner class.",
                "code": `import java.util.Scanner;

class Main{
	public static void main(String[] args){
		float var = 0.0f;
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter Float Value : ");
		try{
			var = sc.nextFloat();
			System.out.println("Float Entered : " + var);
		}
		catch(java.util.InputMismatchException ime){
			System.out.println("Entered Non Float Value");
		}
		catch(Throwable th){
			System.out.println("Unexpected Error : " + th.getMessage());
		}
	}
}`
            }
        },
        {
            "id": 56,
            "description": "Enter the double from user using Scanner class",
            "difficulty": "easy",
            "topic": 10,
            "sample_input": `Enter floating point Value : 5998.96888854`,
            "sample_output": `Double Type Value : 5998.96888854`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to enter a double value using the Scanner class.",
                "code": `import java.util.Scanner;

class Main{
	public static void main(String[] args){
		double var = 0.0;
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter floating point Value : ");
		try{
			var = sc.nextDouble();
			System.out.println("Double Type Value : " + var);
		}
		catch(java.util.InputMismatchException ime){
			System.out.println("Entered Non Numeric Value");
		}
		catch(Throwable th){
			System.out.println("Unexpected Error : " + th.getMessage());
		}
	}
}`
            }
        },
        {
            "id": 57,
            "description": "Enter the boolean from user using Scanner class",
            "difficulty": "easy",
            "topic": 10,
            "sample_input": `Enter true/false Value : true`,
            "sample_output": `Value Entered : true`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to enter a boolean value using the Scanner class.",
                "code": `import java.util.Scanner;

class Main{
	public static void main(String[] args){
		boolean var = false;
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter true/false Value : ");
		try{
			var = sc.nextBoolean();
			System.out.println("Value Entered : " + var);
		}
		catch(java.util.InputMismatchException ime){
			System.out.println("Entered Wrong Value");
		}
		catch(Throwable th){
			System.out.println("Unexpected Error : " + th.getMessage());
		}
	}
}`
            }
        },
        {
            "id": 58,
            "description": "Enter the short integer from user using Scanner class",
            "difficulty": "easy",
            "topic": 10,
            "sample_input": `Enter Value Between -32768 and 32767 : 23668`,
            "sample_output": `Value Entered: 23668`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to enter a short integer using the Scanner class.",
                "code": `import java.util.Scanner;

class Main{
	public static void main(String[] args){
		short var = 0;
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter Value Between -32768 and 32767 : ");
		try{
			var = sc.nextShort();
			System.out.println("Value Entered: " + var);
		}
		catch(java.util.InputMismatchException ime){
			System.out.println("Entered Wrong Value");
		}
		catch(Throwable th){
			System.out.println("Unexpected Error : " + th.getMessage());
		}
	}
}`
            }
        },
        {
            "id": 59,
            "description": "Enter the long integer from user using Scanner class",
            "difficulty": "easy",
            "topic": 10,
            "sample_input": `Enter Value Between -9223372036854775808 and 9223372036854775807 : 66878544887788`,
            "sample_output": `Value Entered: 66878544887788`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to enter a long integer using the Scanner class.",
                "code": `import java.util.Scanner;

class Main{
	public static void main(String[] args){
		long var = 0L;
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter Value Between -9223372036854775808 and 9223372036854775807 : ");
		try{
			var = sc.nextLong();
			System.out.println("Value Entered: " + var);
		}
		catch(java.util.InputMismatchException ime){
			System.out.println("Entered Wrong Value");
		}
		catch(Throwable th){
			System.out.println("Unexpected Error : " + th.getMessage());
		}
	}
}`
            }
        },
        {
            "id": 60,
            "description": "Get all characters from the file and display on the screen",
            "difficulty": "medium",
            "topic": 10,
            "sample_input": 'my.txt file with some text inside',
            "sample_output": `Content of my.txt File is below :

When a seed of a plant or tree grow it makes the area around it greener. Also, it supports many life forms. Birds make their nests, many reptiles and animals live on it or near it.

Besides, all these many beautiful flowers, food growing on it. Moreover, many parts of trees such as roots, leaves, stem, flower, seeds, are also edible. Most importantly they never ask anything in return for their services and the gifts they give. Trees also keep the balance in the ecosystem and ecology.

To conclude, we can say that trees are very important and beneficial for every life form on earth. Without them, the survival of life on earth will become difficult and after some time every species starts to die because of lack of oxygen on the planet. So, to save our lives and to survive we have to learn the importance of trees and also have to teach our children the importance of trees.`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to read all characters from a file and display them.",
                "code": `class Main{
	public static void main(String[] args) throws java.io.IOException, java.io.FileNotFoundException{
		java.io.InputStreamReader isr = new java.io.FileReader("my.txt");
		int ch = 5;
		System.out.println("Content of my.txt File is below : \\n");
		while((ch = isr.read()) != -1){
			System.out.print((char)ch);
		}
	}
}`
            }
        },
        {
            "id": 61,
            "description": "Get all characters from the file, count number of lines, words, characters and display on the screen",
            "difficulty": "medium",
            "topic": 10,
            "sample_input": `When a seed of a plant or tree grow it makes the area around it greener. Also, it supports many life forms. Birds make their nests, many reptiles and animals live on it or near it.


Besides, all these many beautiful flowers, food growing on it. Moreover, many parts of trees such as roots, leaves, stem, flower, seeds, are also edible. Most importantly they never ask anything in return for their services and the gifts they give. Trees also keep the balance in the ecosystem and ecology.


To conclude, we can say that trees are very important and beneficial for every life form on earth. Without them, the survival of life on earth will become difficult and after some time every species starts to die because of lack of oxygen on the planet. So, to save our lives and to survive we have to learn the importance of trees and also have to teach our children the importance of trees.`,
            "sample_output": `Number of Lines : 5
Number of Characters : 727
Number of Words : 160`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to read a file and count lines, words, and characters.",
                "code": `class Main{
	public static void main(String[] args) throws java.io.IOException, java.io.FileNotFoundException{
		java.io.InputStreamReader isr = new java.io.FileReader("my.txt");
		int ch = 5, numoflines = 0, numofchars = 0, wordcount = 0;
		System.out.println("Content of my.txt File is below : \\n");
		while((ch = isr.read()) != -1){
			numofchars++;
			System.out.print((char)ch);
			if(Character.isLetterOrDigit(((char)ch))){
				while((ch = isr.read()) != -1 && ((char)ch) != '\\n' && ((char)ch) != ' '){
					numofchars++;
					System.out.print((char)ch);
				}
				wordcount++;
			}
			if(((char)ch) == '\\n'){
				numoflines++;
				System.out.print((char)ch);
			}
			if(((char)ch) == ' '){
				System.out.print((char)ch);
			}
		}
		System.out.println("\\nNumber of Lines : " + ++numoflines);
		System.out.println("Number of Characters : " + numofchars);
		System.out.println("Number of Words : " + wordcount);
	}
}`
            }
        },
        // Interfaces
        {
            "id": 62,
            "description": "Write a Java program to create an interface Shape with the getArea() method. Create three classes Rectangle, Circle, and Triangle that implement the Shape interface. Implement the getArea() method for each of the three classes.",
            "difficulty": "medium",
            "topic": 11,
            "sample_input": null,
            "sample_output": `Rectangle Area: 20.0
Circle Area: 28.274333882308138
Triangle Area: 12.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to implement the Shape interface for different shapes and calculate their areas.",
                "code": `interface Shape {
    double getArea();
}

class Rectangle implements Shape {
    private double length, breadth;

    Rectangle(double l, double b) {
        length = l;
        breadth = b;
    }

    public double getArea() {
        return (length * breadth);
    }
}

class Circle implements Shape {
    private double radius;

    Circle(double r) {
        radius = r;
    }

    public double getArea() {
        return (Math.PI * radius * radius);
    }
}

class Triangle implements Shape {
    private double base, height;

    Triangle(double bs, double hgt) {
        base = bs;
        height = hgt;
    }

    public double getArea() {
        return (0.5 * base * height);
    }
}

class Main {
    public static void main(String[] args) {
        Shape rectangle = new Rectangle(4, 5);
        System.out.println("Rectangle Area: " + rectangle.getArea());

        Shape circle = new Circle(3);
        System.out.println("Circle Area: " + circle.getArea());

        Shape triangle = new Triangle(4, 6);
        System.out.println("Triangle Area: " + triangle.getArea());
    }
}
`
            }
        },
        {
            "id": 63,
            "description": "Write a Java program to create an Animal interface with a method called bark() that takes no arguments and returns void. Create a Dog class that implements Animal and overrides bark() to print 'Dog is barking'.",
            "difficulty": "easy",
            "topic": 11,
            "sample_input": null,
            "sample_output": `Dog is barking`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to create an interface and implement it in a class.",
                "code": `interface Animal {
    void speak();
}

class Dog implements Animal {

    public void speak() {
        System.out.println("Dog is barking");
    }
}

class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.speak();
    }
}
`
            }
        },
        {
            "id": 64,
            "description": "Write a Java program to create an interface Flyable with a method called fly_obj(). Create three classes Spacecraft, Airplane, and Helicopter that implement the Flyable interface. Implement the fly_obj() method for each of the three classes.",
            "difficulty": "medium",
            "topic": 11,
            "sample_input": null,
            "sample_output": `Spacecraft is flying in space.
Airplane is flying in the sky.
Helicopter is flying above the ground.`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to implement an interface in multiple classes.",
                "code": `interface Flyable {
    void fly_obj();
}

class Spacecraft implements Flyable {
    public void fly_obj() {
        System.out.println("Spacecraft is flying in space.");
    }
}

class Airplane implements Flyable {
    public void fly_obj() {
        System.out.println("Airplane is flying in the sky.");
    }
}

class Helicopter implements Flyable {
    public void fly_obj() {
        System.out.println("Helicopter is flying above the ground.");
    }
}

class Main {
    public static void main(String[] args) {
        Flyable spacecraft = new Spacecraft();
        spacecraft.fly_obj();

        Flyable airplane = new Airplane();
        airplane.fly_obj();

        Flyable helicopter = new Helicopter();
        helicopter.fly_obj();
    }
}
`
            }
        },
        {
            "id": 65,
            "description": "Write a Java program to create a banking system with three classes - Bank, Account, SavingsAccount, and CurrentAccount. The bank should have a list of accounts and methods for adding them. Accounts should be an interface with methods to deposit, withdraw, calculate interest, and view balances. SavingsAccount and CurrentAccount should implement the Account interface and have their own unique methods.",
            "difficulty": "hard",
            "topic": 11,
            "sample_input": null,
            "sample_output": `Account Type : Saving Account
80000.0 Deposited Successfully
Account Balance : 80000.0
Annually Interest : 2400.0
Your Withdrawl Limit is 80000
10000.0 Withdrawl Successfully
Account Balance : 70000.0
Account Type : Current Account
5000.0 Deposited Successfully
Account Balance : 5000.0
Over Draft Limit : 10000
Annually Interest : 0.0
7000.0 Withdrawl Successfully
Account Balance : -2000.0
Over Draft Limit : 10000
Insufficient Balance in account
Account Balance : -2000.0
Over Draft Limit : 10000`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates a banking system with interfaces and multiple account types.",
                "code": `interface Account{
	boolean deposit(double amt);
	boolean withdraw(double amt);
	double calcInterest();
	void viewBalance();
}
class Bank{
	java.util.List<Account> accnts;
	Bank(){
		accnts = new java.util.ArrayList<>();
	}
	boolean addAccount(Account obj){
		return accnts.add(obj);
	}
}
class SavingAccount implements Account{
	double balance;
	int limit = 80000;
	public boolean deposit(double amt){
		if(amt <= 0){
			System.out.println("Amount Should be greater than 0");
			return false;
		}
		else{
			balance += amt;
			System.out.println(amt + " Deposited Successfully");
			viewBalance();
			return true;
		}
	}
	public boolean withdraw(double amt){
		if(amt <= 0){
			System.out.println("Amount Should be greater than 0");
			return false;
		}
		else if(amt > limit){
			System.out.println("Your Withdrawl Limit is " + limit);
			return false;
		}
		else if((balance-amt) < 0){
			System.out.println("Insufficient Balance in account");
			viewBalance();
			return false;
		}
		else{
			balance -= amt;
			System.out.println(amt + " Withdrawl Successfully");
			viewBalance();
			return true;
		}
	}
	public double calcInterest(){
		return (0.03 * balance);
	}
	public void viewBalance(){
		System.out.println("Account Balance : " + balance);
	}
}
class CurrentAccount implements Account{
	double balance;
	int overdraftlimit = 10000;
	public boolean deposit(double amt){
		if(amt <= 0){
			System.out.println("Amount Should be greater than 0");
			return false;
		}
		else{
			balance += amt;
			System.out.println(amt + " Deposited Successfully");
			viewBalance();
			return true;
		}
	}
	public boolean withdraw(double amt){
		if(amt <= 0){
			System.out.println("Amount Should be greater than 0");
			return false;
		}
		else if(((balance+overdraftlimit)-amt) < 0){
			System.out.println("Insufficient Balance in account");
			viewBalance();
			return false;
		}
		else{
			balance -= amt;
			System.out.println(amt + " Withdrawl Successfully");
			viewBalance();
			return true;
		}
	}
	public double calcInterest(){
		return 0.0;
	}
	public void viewBalance(){
		System.out.println("Account Balance : " + balance);
		System.out.println("Over Draft Limit : " + overdraftlimit);

	}
}

class Main{
	public static void main(String[] args){
		Bank sbi = new Bank();

		SavingAccount acc1 = new SavingAccount();
		CurrentAccount acc2 = new CurrentAccount();
		
		sbi.addAccount(acc1);
		sbi.addAccount(acc2);

		System.out.println("Account Type : Saving Account");

		acc1.deposit(80000);
		System.out.println("Annually Interest : " + acc1.calcInterest());
		acc1.withdraw(90000);
		acc1.withdraw(10000);

		System.out.println("Account Type : Current Account");

		acc2.deposit(5000);
		System.out.println("Annually Interest : " + acc2.calcInterest());
		acc2.withdraw(7000);
		acc2.withdraw(10000);
	}
}`
            }
        },
        {
            "id": 66,
            "description": "Write a Java program to create an interface Resizable with methods resizeWidth(int width) and resizeHeight(int height) that allow an object to be resized. Create a class Rectangle that implements the Resizable interface and implements the resize methods.",
            "difficulty": "medium",
            "topic": 11,
            "sample_input": null,
            "sample_output": `Initial Dimensions :
Height of Rectangle : 5
Width of Rectangle : 15
Dimensions After Resizing:
Height of Rectangle : 10
Width of Rectangle : 25`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to create a resizable rectangle class using an interface.",
                "code": `interface Resizable{
	int resizeWidth(int width);
	int resizeHeight(int height);
	void display();
}
class Rectangle implements Resizable{
	int length, breadth;
	Rectangle(int width, int height){
		breadth = width;
		length = height;
	}
	public void display(){
		System.out.println("Height of Rectangle : " + length);
		System.out.println("Width of Rectangle : " + breadth);
	}
	public int resizeWidth(int width){
		breadth = width;
		return breadth;
	}
	public int resizeHeight(int height){
		length = height;
		return length;
	}
}
class Main{
	public static void main(String[] args){
		Resizable obj = new Rectangle(15, 5);
		System.out.println("Initial Dimensions : ");
		obj.display();
		obj.resizeWidth(25);
		obj.resizeHeight(10);
		System.out.println("Dimensions After Resizing: ");
		obj.display();
	}
}`
            }
        },
        {
            "id": 67,
            "description": "Write a Java program to create an interface Drawable with a method draw() that takes no arguments and returns void. Create three classes Circle, Rectangle, and Triangle that implement the Drawable interface and override the draw() method to draw their respective shapes.",
            "difficulty": "easy",
            "topic": 11,
            "sample_input": null,
            "sample_output": `Drawing Circle
Drawing Rectangle
Drawing Triangle`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to create a drawable shape class using an interface.",
                "code": `interface Drawable{
	void draw();
}
class Circle implements Drawable{
	public void draw(){
		System.out.println("Drawing Circle");
	}
}
class Rectangle implements Drawable{
	public void draw(){
		System.out.println("Drawing Rectangle");
	}
}
class Triangle implements Drawable{
	public void draw(){
		System.out.println("Drawing Triangle");
	}
}
class Main{
	public static void main(String[] args){
		Drawable obj = new Circle();
		obj.draw();
		obj = new Rectangle();
		obj.draw();
		obj = new Triangle();
		obj.draw();
	}

}`
            }
        },
        {
            "id": 68,
            "description": "Write a Java program to create an interface Sortable with a method sort() that sorts an array of integers in ascending order. Create two classes BubbleSort and SelectionSort that implement the Sortable interface and provide their own implementations of the sort() method.",
            "difficulty": "medium",
            "topic": 11,
            "sample_input": null,
            "sample_output": `Array 1 : [58, 4, 11, 26, 49, 98, 37]
Bubble Sort Implemented
Bubble Sort : [4, 11, 26, 37, 49, 58, 98]
Array 2 : [105, 85, 71, 526, 76, 20]
Selection Sort Implemented
Selection Sort : [20, 71, 76, 85, 105, 526]`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates sorting algorithms using an interface.",
                "code": `interface Sortable{
	void sort(int arr[]);
}
class BubbleSort implements Sortable{
	public void sort(int arr[]){
		System.out.println("Bubble Sort Implemented");
		for(int i = 0; i < arr.length; i++){
			for(int j = 0; j < (arr.length-i-1); j++){
				if(arr[j] > arr[j+1]){
					int temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp;
				}
			}
		}
	}
}
class SelectionSort implements Sortable{
	public void sort(int arr[]){
		System.out.println("Selection Sort Implemented");
		for(int i = 0; i < arr.length; i++){
			for(int j = i+1; j < arr.length; j++){
				if(arr[i] > arr[j]){
					int temp = arr[i];
					arr[i] = arr[j];								arr[j] = temp;
				}
			}
		}
	}
}

class Main{
	public static void main(String args[]){
		Sortable sr = new BubbleSort();
		int arr[] = {58, 4, 11, 26, 49, 98, 37};
		int arr2[] = {105, 85, 71, 526, 76, 20};
		System.out.println("Array 1 : " + java.util.Arrays.toString(arr));
		sr.sort(arr);
        	System.out.println("Bubble Sort : " + java.util.Arrays.toString(arr));
		sr = new SelectionSort();
		System.out.println("Array 2 : " + java.util.Arrays.toString(arr2));
		sr.sort(arr2);
        	System.out.println("Selection Sort : " + java.util.Arrays.toString(arr2));
	}
}`
            }
        },
        {
            "id": 69,
            "description": "Write a Java program to create an interface Playable with a method play() that takes no arguments and returns void. Create three classes Football, Volleyball, and Basketball that implement the Playable interface and override the play() method to play the respective sports.",
            "difficulty": "easy",
            "topic": 11,
            "sample_input": null,
            "sample_output": `Playing Football
Playing Volleyball
Playing Basketball`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to create a playable class using an interface.",
                "code": `interface Playable{
	void play();
}
class Football implements Playable{
	public void play(){
		System.out.println("Playing Football");
	}
}
class Volleyball implements Playable{
	public void play(){
		System.out.println("Playing Volleyball");
	}
}
class Basketball implements Playable{
	public void play(){
		System.out.println("Playing Basketball");
	}
}
class Main{
	public static void main(String args[]){
		Playable obj = new Football();
		obj.play();
		obj = new Volleyball();
		obj.play();
		obj = new Basketball();
		obj.play();
	}
}`
            }
        },
        {
            "id": 70,
            "description": "Write a Java program to create an interface Searchable with a method search(String keyword) that searches for a given keyword in a text document. Create two classes Document and WebPage that implement the Searchable interface and provide their own implementations of the search() method.",
            "difficulty": "medium",
            "topic": 11,
            "sample_input": null,
            "sample_output": `Searching Hello in my.txt
Document contain Hello
Searching No in my.txt
Document does not contain No
Searching life in my.html
Webpage contain life
Searching No in my.html
Webpage does not contain No`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to implement a search functionality in multiple classes.",
                "code": `interface Searchable{
	boolean search(String keyword);
}
class Document implements Searchable{
	String content, filename;
	Document(String name, String filecontent){
		filename = name;
		content = filecontent;
	}
	public boolean search(String keyword){
		System.out.println("Searching " + keyword + " in " + filename);
		return content.contains(keyword);
	}
}
class WebPage implements Searchable{
	String content, url;
	WebPage(String pageurl, String filecontent){
		url = pageurl;
		content = filecontent;
	}
	public boolean search(String keyword){
		System.out.println("Searching " + keyword + " in " + url);
		return content.contains(keyword);
	}
}

class Main{
	public static void main(String[] args){
		Searchable obj = new Document("my.txt", "Hello I am Abhishek");
		System.out.println(obj.search("Hello") ? "Document contain Hello" : "Document does not contain Hello");
		System.out.println(obj.search("No") ? "Document contain No" : "Document does not contain No");
		obj = new WebPage("my.html", "Trees are very important aspect for our life ...");
		System.out.println(obj.search("life") ? "Webpage contain life" : "Webpage does not contain life");
		System.out.println(obj.search("No") ? "Webpage contain No" : "Webpage does not contain No");
	}
}`
            }
        },
        {
            "id": 71,
            "description": "Write a Java program to create an interface Encryptable with methods encrypt(String data) and decrypt(String encryptedData) that define encryption and decryption operations. Create two classes AES and RSA that implement the Encryptable interface and provide their own encryption and decryption algorithms.",
            "difficulty": "hard",
            "topic": 11,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates encryption and decryption using interfaces.",
                "code": null
            }
        },
        {
            "id": 72,
            "description": "Write a Java program to create an interface Sortable with a method sort(int[] array) that sorts an array of integers in descending order. Create two classes QuickSort and MergeSort that implement the Sortable interface and provide their own implementations of the sort() method.",
            "difficulty": "hard",
            "topic": 11,
            "sample_input": null,
            "sample_output": `Array 1 : [5, 2, 9, 1, 5, 6]
QuickSort Descending: [9, 6, 5, 5, 2, 1]
Array 2 : [9, 6, 5, 5, 2, 1]
MergeSort Descending: [9, 8, 7, 4, 3, 1]`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to implement sorting algorithms using an interface.",
                "code": `interface Sortable {
    void sort(int[] array);
}

class QuickSort implements Sortable {
    public void sort(int[] array) {
        quickSort(array, 0, array.length - 1);
    }

    private void quickSort(int[] array, int low, int high) {
        if (low < high) {
            int pi = partition(array, low, high);
            quickSort(array, low, pi - 1);
            quickSort(array, pi + 1, high);
        }
    }

    private int partition(int[] array, int low, int high) {
        int pivot = array[high];
        int i = (low - 1);
        for (int j = low; j < high; j++) {
            if (array[j] > pivot) {
                i++;
                int temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        int temp = array[i + 1];
        array[i + 1] = array[high];
        array[high] = temp;
        return i + 1;
    }
}

class MergeSort implements Sortable {
    public void sort(int[] array) {
        if (array.length < 2) return;
        mergeSort(array, 0, array.length - 1);
    }

    private void mergeSort(int[] array, int left, int right) {
        if (left < right) {
            int mid = (left + right) / 2;
            mergeSort(array, left, mid);
            mergeSort(array, mid + 1, right);
            merge(array, left, mid, right);
        }
    }

    private void merge(int[] array, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;
        int[] L = new int[n1];
        int[] R = new int[n2];

        for (int i = 0; i < n1; i++) 
		L[i] = array[left + i];
        for (int j = 0; j < n2; j++) 
		R[j] = array[mid + 1 + j];

        int i = 0, j = 0;
        int k = left;
        while (i < n1 && j < n2) {
            if (L[i] >= R[j]) array[k++] = L[i++];
            else array[k++] = R[j++];
        }

        while (i < n1) 
		array[k++] = L[i++];
        while (j < n2) 
		array[k++] = R[j++];
    }
}

class Main {
    public static void main(String[] args) {
        int[] array1 = {5, 2, 9, 1, 5, 6};
        int[] array2 = {3, 8, 4, 1, 7, 9};

        Sortable quickSort = new QuickSort();
	System.out.println("Array 1 : " + java.util.Arrays.toString(array1));
        quickSort.sort(array1);
        System.out.println("QuickSort Descending: " + java.util.Arrays.toString(array1));

        Sortable mergeSort = new MergeSort();
	System.out.println("Array 2 : " + java.util.Arrays.toString(array1));
        mergeSort.sort(array2);
        System.out.println("MergeSort Descending: " + java.util.Arrays.toString(array2));
    }
}
`
            }
        },
        // OOPS
        {
            "id": 73,
            "description": "Write a Java program to create a class called 'Person' with a name and age attribute. Create two instances of the 'Person' class, set their attributes using the constructor, and print their name and age.",
            "difficulty": "easy",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Person 1 :
Name : Abhishek  Age : 21

Person 2 :
Name : Manya     Age : 19`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to create instances of a class and set attributes using a constructor.",
                "code": `class Person{
	String name;
	short age;
	Person(String n,short ag){
		name = n;
		age = ag;
	}
	void display(){
		System.out.println("Name : " + name + "\\t Age : " + age);
		System.out.println();
	}
}
class Main{
	public static void main(String[] args){
		Person p1 = new Person("Abhishek", (short)21);
		Person p2 = new Person("Manya", (short)19);
		System.out.println("Person 1 : ");
		p1.display();
		System.out.println("Person 2 : ");
		p2.display();
	}
}`
            }
        },
        {
            "id": 74,
            "description": "Write a Java program to create a class called 'Dog' with a name and breed attribute. Create two instances of the 'Dog' class, set their attributes using the constructor and modify the attributes using the setter methods and print the updated values.",
            "difficulty": "easy",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Dog 1 :
Name : Tommy     Breed : Bull Dog

Modifying Name of dog 1 to Rymond :
Name : Rymond    Breed : Bull Dog

Dog 2 :
Name : Tyson     Breed : German Shephard`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates creating and modifying objects using setter methods.",
                "code": `class Dog{
	String name, breed;
	Dog(String n, String br){
		name = n;
		breed = br;
	}
	void setName(String n){
		name = n;
	}
	void setBreed(String br){
		breed = br;
	}
	void display(){
		System.out.println("Name : " + name + "\\t Breed : " + breed);
		System.out.println();
	}
}
class Main{
	public static void main(String[] args){
		Dog d1 = new Dog("Tommy", "Bull Dog");
		Dog d2 = new Dog("Tyson", "German Shephard");
		System.out.println("Dog 1 : ");
		d1.display();
		System.out.println("Modifying Name of dog 1 to Rymond : ");
		d1.setName("Rymond");
		d1.display();
		System.out.println("Dog 2 : ");
		d2.display();
	}
}`
            }
        },
        {
            "id": 75,
            "description": "Write a Java program to create a class called 'Rectangle' with width and height attributes. Calculate the area and perimeter of the rectangle.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Area : 75
Perimeter : 40`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the area and perimeter of a rectangle using class attributes.",
                "code": `class Rectangle{
	int width, height;
	Rectangle(int w, int h){
		width = w;
		height = h;
	}
	int area(){
		return (width * height);
	}
	int perimeter(){
		return (2*(width + height));
	}
}
class Main{
	public static void main(String[] args){
		Rectangle obj = new Rectangle(5, 15);
		System.out.println("Area : " + obj.area());
		System.out.println("Perimeter : " + obj.perimeter());
	}
}`
            }
        },
        {
            "id": 76,
            "description": "Write a Java program to create a class called 'Circle' with a radius attribute. You can access and modify this attribute. Calculate the area and circumference of the circle.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Area : 78.53981633974483
Circumference : 31.41592653589793`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates calculating the area and circumference of a circle.",
                "code": `class Circle{
	double radius;

	double area(){
		return (Math.PI * radius * radius);
	}
	double circumference(){
		return (2 * Math.PI * radius);
	}
}
class Main{
	public static void main(String[] args){
		Circle obj = new Circle();
		obj.radius = 5.0;
		System.out.println("Area : " + obj.area());
		System.out.println("Circumference : " + obj.circumference());
	}
}`
            }
        },
        {
            "id": 77,
            "description": "Write a Java program to create a class called 'Book' with attributes for title, author, and ISBN, and methods to add and remove books from a collection.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Book No : 1
Title : To Kill a Mockingbird
Author : Harper Lee
ISBN : 9782

Book No : 2
Title : 1984
Author : George Orwell
ISBN : 9780

Book No : 3
Title : The Great Gatsby
Author : F. Scott Fitzgerald
ISBN : 9783

Book 2 Removed
Book No : 1
Title : To Kill a Mockingbird
Author : Harper Lee
ISBN : 9782

Book No : 2
Title : The Great Gatsby
Author : F. Scott Fitzgerald
ISBN : 9783`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates managing a collection of books using a class.",
                "code": `class Book{
	String title, author, isbn;
	static java.util.List<Book> books = new java.util.ArrayList<>();
	Book(String t, String auth, String code){
		title = t;
		author = auth;
		isbn = code;
	}
	static boolean addBook(Book b){
		try{
			return books.add(b);
		}
		catch(Throwable ex){
			return false;
		}
	}
	static boolean removeBook(Book b){
		try{
			return books.remove(b);
		}
		catch(Throwable ex){
			return false;
		}
	}
	static void displayBooks(){
		if(books.isEmpty()){
			System.out.println("No Books in Collection");
			return;
		}
		for(Book b : books){
			System.out.println("Book No : " + (books.indexOf(b)+1));
			System.out.println("Title : " + b.title);
			System.out.println("Author : " + b.author);
			System.out.println("ISBN : " + b.isbn + "\\n");
		}
	}
}
class Main{
	public static void main(String[] args){
		Book b1 = new Book("To Kill a Mockingbird", "Harper Lee", "9782");
        	Book b2 = new Book("1984", "George Orwell", "9780");
        	Book b3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "9783");
		Book.addBook(b1);
		Book.addBook(b2);
		Book.addBook(b3);
		Book.displayBooks();
		System.out.println((Book.removeBook(b2)) ? "Book 2 Removed" : "Not able to remove Book 2");
		Book.displayBooks();
	}
}`
            }
        },
        {
            "id": 78,
            "description": "Write a Java program to create a class called 'Employee' with a name, job title, and salary attributes, and methods to calculate and update salary.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Employee Detail :
Name : Abhishek
Job Title : Manager
Base Salary : 40000.0
Salary After Bonus and Deductions : 43999.63
Updating Salary by 10000 :
New Base Salary : 50000.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates and updates the salary of an employee.",
                "code": `class Employee{
	String name, jobtitle;
	double salary;
	
	void setName(String nm){
		name = nm;
	}
	void setJobTitle(String jt){
		jobtitle = jt;
	}
	void setSalary(double sal){
		salary = sal;
	}
	
	double calcSalary(double bonus, double deductions){
		return (salary+bonus-deductions);
	}
	double updateSalary(double addition){
		salary += addition;
		return salary;
	}
	void display(){
		System.out.println("Employee Detail : ");
		System.out.println("Name : " + name);
		System.out.println("Job Title : " + jobtitle);
		System.out.println("Base Salary : " + salary);
	}	
}
class Main{
	public static void main(String[] args){
		Employee emp = new Employee();
		emp.setName("Abhishek");
		emp.setJobTitle("Manager");
		emp.setSalary(40000);
		emp.display();
		System.out.println("Salary After Bonus and Deductions : " + emp.calcSalary(4852.23, 852.6));

		System.out.println("Updating Salary by 10000 : ");
		System.out.println("New Base Salary : " + emp.updateSalary(10000));

	}
}`
            }
        },
        {
            "id": 79,
            "description": "Write a Java program to create a class called 'Bank' with a collection of accounts and methods to add and remove accounts, and to deposit and withdraw money. Also define a class called 'Account' to maintain account details of a particular customer.",
            "difficulty": "hard",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Account Added Successfully
Account Added Successfully
Account Added Successfully
Name : Abhishek Dhawan
Account Type : Savings
Balance : 10000.0

Name : Asha
Account Type : Savings
Balance : 5035.0

Name : Pawan Kumar
Account Type : Savings
Balance : 100.0

7000.0Rs Depoited Successfully in Pawan Kumar's Account

1000.0Rs Withdrawal Successful from Asha's Account

Name : Abhishek Dhawan
Account Type : Savings
Balance : 10000.0

Name : Asha
Account Type : Savings
Balance : 4035.0

Name : Pawan Kumar
Account Type : Savings
Balance : 7100.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates a banking system with multiple accounts.",
                "code": `class Account{
	private String accnumber, accholder, acctype;
	private double balance;
	Account(String num, String name, String type, double bal){
		accnumber = num;
		accholder = name;
		acctype = type;
		balance = bal;
	}
	String getAccountNumber(){
		return accnumber;
	}
	String getHolder(){
		return accholder;
	}
	String getAccountType(){
		return acctype;
	}
	double getBalance(){
		return balance;
	}
	void setBalance(double amt){
		balance = amt;
	}
}

class Bank{
	java.util.List<Account> accounts;
	Bank(){
		accounts = new java.util.ArrayList<>();
	}
	
	boolean addAccount(String num, String name, String acctype, double balance){
		Account obj = new Account(num, name, acctype, balance);
		try{
			return accounts.add(obj);
		}
		catch(Throwable th){
			return false;
		}
	}

	boolean removeAccount(String num){
		try{
			return accounts.removeIf(account -> account.getAccountNumber() == num);
		}
		catch(Throwable th){
			return false;
		}
	}
	
	boolean deposit(double amt, String num){
		for(int i = 0; i < accounts.size(); i++){
			if(accounts.get(i).getAccountNumber() == num){
				accounts.get(i).setBalance(accounts.get(i).getBalance() + amt);
				System.out.println(amt + "Rs Depoited Successfully in " + accounts.get(i).getHolder()+"'s Account\\n");
				return true;
			}
		}
		System.out.println("Invalid Account Number");
		return false;
	}
	boolean withdraw(double amt, String num){
		for(int i = 0; i < accounts.size(); i++){
			if(accounts.get(i).getAccountNumber() == num){
				if((accounts.get(i).getBalance()-amt) < 0){
					System.out.println("Insufficient funds");
					return false;
				}
				accounts.get(i).setBalance(accounts.get(i).getBalance() - amt);
				System.out.println(amt + "Rs Withdrawal Successful from " + accounts.get(i).getHolder()+"'s Account\\n");
				return true;
			}
		}
		System.out.println("Invalid Account Number");
		return false;
	}

	void display(){
		for(Account acc : accounts){
			System.out.println("Name : " + acc.getHolder());
			System.out.println("Account Type : " + acc.getAccountType());
			System.out.println("Balance : " + acc.getBalance());
			System.out.println();
		}
	}
}

class Main{
	public static void main(String[] args){
		Bank acc = new Bank();
		System.out.println((acc.addAccount("24062004", "Abhishek Dhawan", "Savings", 10000)) ? "Account Added Successfully" : "Failed to Add Account");
		System.out.println((acc.addAccount("28052004", "Asha", "Savings", 5035)) ? "Account Added Successfully" : "Failed to Add Account");
		System.out.println((acc.addAccount("15082001", "Pawan Kumar", "Savings", 100)) ? "Account Added Successfully" : "Failed to Add Account");
		acc.display();
		acc.deposit(7000, "15082001");
		acc.withdraw(1000, "28052004");
		acc.display();
				
	}
}`
            }
        },
        {
            "id": 80,
            "description": "Write a Java program to create class called 'TrafficLight' with attributes for color and duration, and methods to change the color and check for red or green.",
            "difficulty": "easy",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Current Signal : Red
Changing Signal
Current Signal : Green`,
            "solution": {
                "language": "Java",
                "explanation": "This program simulates a traffic light system with methods to check color and duration.",
                "code": `class TrafficLight{
	String color;
	int duration;
	TrafficLight(int ms){
		color = "Red";
		duration = ms;
	}
	void changeLight(){
		if(color == "Red")
			color = "Green";
		else
			color = "Red";
	}
	String checkLight(){
		return color;
	}
}

class Main{
	public static void main(String[] args){
		TrafficLight obj = new TrafficLight(120000);
		System.out.println("Current Signal : " + obj.checkLight());
		System.out.println("Changing Signal");
		obj.changeLight();
		System.out.println("Current Signal : " + obj.checkLight());

	}
}`
            }
        },
        {
            "id": 81,
            "description": "Write a Java program to create a class called 'Employee' with a name, salary, and hire date attributes, and a method to calculate years of service.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Name : Abhishek
Salary : 20000.0
Hiring Date : 1/6/2011
Year of Service : 13 Years`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the years of service for an employee.",
                "code": `class Employee{
	String name;
	double salary;
	java.util.Date hiredate;
	Employee(String n, double sal, java.util.Date date){
		name = n;
		salary = sal;
		hiredate = date;
	}
	int yearOfService(java.util.Date resignDate){
		return ((resignDate.getYear()) - (hiredate.getYear()));
	}
	void display(){
		System.out.println("Name : " + name);
		System.out.println("Salary : " + salary);
		System.out.println("Hiring Date : " + hiredate.getDate()+"/"+hiredate.getMonth()+"/"+(hiredate.getYear()));
	}
}
class Main{
	public static void main(String[] args){
		java.util.Date hire = new java.util.Date();
		hire.setDate(1);
		hire.setMonth(6);
		hire.setYear(2011);
		Employee emp = new Employee("Abhishek", 20000, hire);
		emp.display();
		java.util.Date resign = new java.util.Date();
		resign.setYear(new java.util.Date().getYear() + 1900);
		System.out.println("Year of Service : " + emp.yearOfService(resign) + " Years");
	}
}`
            }
        },
        {
            "id": 82,
            "description": "Write a Java program to create a class called 'Student' with a name, grade, and courses attributes, and methods to add and remove courses.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Name : Abhishek
Grade : 10th
Courses : No Courses Choosen

English Added Successfull
Hindi Added Successfull
Music Added Successfull
Drawing Added Successfull
Name : Abhishek
Grade : 10th
Courses :
1) English      2) Hindi        3) Music        4) Drawing
Hindi Removed Successful
Name : Abhishek
Grade : 10th
Courses :
1) English      2) Music        3) Drawing`,
            "solution": {
                "language": "Java",
                "explanation": "This program manages courses for a student.",
                "code": `class Student{
	String name, grade;
	java.util.List<String> courses;
	Student(String n, String gr){
		name = n;
		grade = gr;
		courses = new java.util.ArrayList<>();
	}
	boolean addCourse(String course){
		if(courses.contains(course)){
			System.out.println("Course Already Exist");
			return false;
		}
		else{
			System.out.println(course + " Added Successfull");
			return courses.add(course);
		}
	}
	boolean removeCourse(String course){
		boolean isremoved = courses.remove(course);
		System.out.println(isremoved ? course + " Removed Successful" : "Course Not Opted");
		return isremoved;
	}
	void display(){
		System.out.println("Name : " + name);
		System.out.println("Grade : " + grade);
		System.out.print("Courses : ");
		System.out.println(courses.isEmpty() ? "No Courses Choosen" : "");
		for(int i = 0; i < courses.size(); i++){
			System.out.print(i+1 + ") " + courses.get(i)+"\\t");
		}
		System.out.println();
	}
}

class Main{
	public static void main(String[] args){
		Student st = new Student("Abhishek", "10th");
		st.display();
		st.addCourse("English");
		st.addCourse("Hindi");
		st.addCourse("Music");
		st.addCourse("Drawing");
		st.display();
		st.removeCourse("Hindi");
		st.display();
	}
}`
            }
        },
        {
            "id": 83,
            "description": "Write a Java program to create a class called 'Library' with a collection of books and methods to add and remove books.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": `To Kill a Mockingbird Added to Library
1984 Added to Library
The Great Gatsby Added to Library

Library Books :
Book 0) To Kill a Mockingbird
Book 1) 1984
Book 2) The Great Gatsby
1984 Removed from Library
Hello Not Available in Library

Library Books :
Book 0) To Kill a Mockingbird
Book 1) The Great Gatsby`,
            "solution": {
                "language": "Java",
                "explanation": "This program manages a library collection using a class.",
                "code": `class Library{
	java.util.List<String> books;
	Library(){
		books = new java.util.ArrayList<>();
	}
	boolean addBook(String b){
		if(books.contains(b)){
			System.out.println(b+" Already Present in collection");
			return false;
		}
		else{
			if(books.add(b)){
				System.out.println(b +" Added to Library");
				return true;
			}
			else{
				System.out.println(" Failed to Add " + b+ " in Library");
				return false;
			}
		}
	}
	boolean removeBook(String b){
		if(books.remove(b)){
			System.out.println(b + " Removed from Library");
			return true;
		}
		else{
			System.out.println(b + " Not Available in Library");
			return false;
		}
	}
	void displayBooks(){
		if(books.isEmpty()){
			System.out.println("No Books in Collection");
			return;
		}
		System.out.println("\\nLibrary Books : ");

		for(int i = 0; i < books.size(); i++){
			System.out.println("Book " + i + ") " + books.get(i));
		}
	}
}

class Main{
	public static void main(String[] args){
		Library lb = new Library();
		lb.addBook("To Kill a Mockingbird");
		lb.addBook("1984");
		lb.addBook("The Great Gatsby");
		lb.displayBooks();
		lb.removeBook("1984");
		lb.removeBook("Hello");
		lb.displayBooks();
	}
}`
            }
        },
        {
            "id": 84,
            "description": "Write a Java program to create a class called 'Airplane' with a flight number, destination, and departure time attributes, and methods to check flight status and delay.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Airplane{Flight Number='AA123', Destination='New York', Departure Time=Wed Sep 11 14:30:30 IST 2024, Status=On Time}
Flight Status: On Time
Flight delayed by 45 minutes. New departure time: Wed Sep 11 15:15:30 IST 2024
Airplane{Flight Number='AA123', Destination='New York', Departure Time=Wed Sep 11 15:15:30 IST 2024, Status=Delayed}
Updated Flight Status: Delayed`,
            "solution": {
                "language": "Java",
                "explanation": "This program checks flight status and delay using an Airplane class.",
                "code": `class Airplane {
    private String flightNumber;
    private String destination;
    private java.util.Date departureTime;
    private boolean isDelayed;

    Airplane(String flightNumber, String destination, String departureTime) {
        this.flightNumber = flightNumber;
        this.destination = destination;
        this.departureTime = new java.util.Date(new java.util.Date().parse(departureTime));
        this.isDelayed = false;
    }

    void delayFlight(int minutes) {
        if (minutes > 0) {
	    departureTime.setTime(departureTime.getTime()+(minutes*60*1000));         
            this.isDelayed = true;
            System.out.println("Flight delayed by " + minutes + " minutes. New departure time: " + departureTime);
        } else {
            System.out.println("Invalid delay time.");
        }
    }
	String checkFlightStatus(){
		return (isDelayed ? "Delayed" : "On Time");
	}	

    void display(){
        System.out.println("Airplane{Flight Number='" + flightNumber + "', Destination='" + destination + "', Departure Time=" + departureTime + ", Status=" + checkFlightStatus() + "}");
    }
}

class Main {
    public static void main(String[] args) {
        Airplane flight1 = new Airplane("AA123", "New York", "09/11/2024 14:30:30");

        flight1.display();

        System.out.println("Flight Status: " + flight1.checkFlightStatus());

        flight1.delayFlight(45);

        flight1.display();

        System.out.println("Updated Flight Status: " + flight1.checkFlightStatus());
    }
}
`
            }
        },
        {
            "id": 85,
            "description": "Write a Java program to create a class called 'Inventory' with a collection of products and methods to add and remove products, and to check for low inventory.",
            "difficulty": "hard",
            "topic": 14,
            "sample_input": null,
            "sample_output": `No Products in Collection
Product No : 1
Product Name : Pen
Quantity : 10

Product No : 2
Product Name : Pencil
Quantity : 0

Product No : 3
Product Name : Scale
Quantity : 500

Product No : 4
Product Name : Eraser
Quantity : 100

Product No : 1
Product Name : Pen
Quantity : 10

Product No : 2
Product Name : Pencil
Quantity : 0

Product No : 3
Product Name : Scale
Quantity : 50

Product No : 4
Product Name : Eraser
Quantity : 400

Scale is soon out of stock
Pencil is out of stock`,
            "solution": {
                "language": "Java",
                "explanation": "This program manages an inventory system using a class.",
                "code": `class Products{
	String productname;
	int quantity;
	Products(String name, int quant){
		productname = name;
		quantity = quant;
	}
}

class Inventory{
	java.util.List<Products> products;
	Inventory(){
		products = new java.util.ArrayList<>();
	}
	
	boolean addProducts(String product, int quantity){
		for(int i = 0; i < products.size(); i++){
			if(products.get(i).productname == product){
				products.get(i).quantity += quantity;
				return true;
			}
		}
		Products obj = new Products(product, quantity);
		return products.add(obj);
	}

	boolean removeProducts(String product, int quantity){
		for(int i = 0; i < products.size(); i++){
			if(products.get(i).productname == product){
				if((products.get(i).quantity-quantity) >= 0){
					products.get(i).quantity -= quantity;
					return true;
				}
				return false;
			}
		}
		return false;
	}

	void checkInventory(String product){
		for(int i = 0; i < products.size(); i++){
			if(products.get(i).productname == product){
				if(products.get(i).quantity == 0){
					System.out.println(product + " is out of stock");
				}
				else if(products.get(i).quantity <= 100){
					System.out.println(product + " is soon out of stock");
				}
				else{
					System.out.println(product + " is full of stock");
				}
			}
		}
	}
	void displayProducts(){
		if(products.isEmpty()){
			System.out.println("No Products in Collection");
			return;
		}
		for(int i = 0; i < products.size(); i++){
			System.out.println("Product No : " + (i+1));
			System.out.println("Product Name : " + products.get(i).productname);
			System.out.println("Quantity : " + products.get(i).quantity + "\\n");
		}
	}
}
class Main{
	public static void main(String[] args){
		Inventory stationary = new Inventory();
		stationary.displayProducts();
		stationary.addProducts("Pen", 10); 
		stationary.addProducts("Pencil", 0);
		stationary.addProducts("Scale", 500);
		stationary.addProducts("Eraser", 100);
		stationary.displayProducts();
		stationary.addProducts("Eraser", 300);
		stationary.removeProducts("Scale", 450);
		stationary.displayProducts();
		stationary.checkInventory("Scale");
		stationary.checkInventory("Pencil");
	}
}`
            }
        },
        {
            "id": 86,
            "description": "Write a Java program to create a class called 'School' with attributes for students, teachers, and classes, and methods to add and remove students and teachers, and to create classes.",
            "difficulty": "hard",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Student Abhishek has been added.
Student Madhu has been added.
Teacher Mr. Rahul has been added.
Teacher Ms. Sikha has been added.
Class BCA - 1 has been created.
Class BCOM - 2 has been created.

Students: [Abhishek, Madhu]
Teachers: [Mr. Rahul, Ms. Sikha]
Classes: [BCA - 1, BCOM - 2]

Student Madhu has been removed.
Teacher Ms. Sikha has been removed.

Students: [Abhishek]
Teachers: [Mr. Rahul]
Classes: [BCA - 1, BCOM - 2]`,
            "solution": {
                "language": "Java",
                "explanation": "This program manages a school system with students, teachers, and classes.",
                "code": `import java.util.ArrayList;
import java.util.List;

class School {
    private List<String> students;
    private List<String> teachers;
    private List<String> classes;

    public School() {
        students = new ArrayList<>();
        teachers = new ArrayList<>();
        classes = new ArrayList<>();
    }

    public void addStudent(String studentName) {
        students.add(studentName);
        System.out.println("Student " + studentName + " has been added.");
    }

    public void removeStudent(String studentName) {
        if (students.remove(studentName)) {
            System.out.println("Student " + studentName + " has been removed.");
        } else {
            System.out.println("Student " + studentName + " not found.");
        }
    }

    public void addTeacher(String teacherName) {
        teachers.add(teacherName);
        System.out.println("Teacher " + teacherName + " has been added.");
    }

    public void removeTeacher(String teacherName) {
        if (teachers.remove(teacherName)) {
            System.out.println("Teacher " + teacherName + " has been removed.");
        } else {
            System.out.println("Teacher " + teacherName + " not found.");
        }
    }

    public void createClass(String className) {
        classes.add(className);
        System.out.println("Class " + className + " has been created.");
    }

    public void displayDetails() {
	System.out.println();
        System.out.println("Students: " + students);
        System.out.println("Teachers: " + teachers);
        System.out.println("Classes: " + classes);
	System.out.println();
    }
}
class Main{
	public static void main(String[] args) {
        	School mySchool = new School();
        	mySchool.addStudent("Abhishek");
        	mySchool.addStudent("Madhu");
        	mySchool.addTeacher("Mr. Rahul");
        	mySchool.addTeacher("Ms. Sikha");
        	mySchool.createClass("BCA - 1");
        	mySchool.createClass("BCOM - 2");

        	mySchool.displayDetails();

        	mySchool.removeStudent("Madhu");
        	mySchool.removeTeacher("Ms. Sikha");
        	mySchool.displayDetails();
    }
}
`
            }
        },
        {
            "id": 87,
            "description": "Write a Java program to create a class called 'MusicLibrary' with a collection of songs and methods to add and remove songs, and to play a random song.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Dildariyaan Song Added To Music Library
Tum Hi Ho Song Added To Music Library
Pee Loon Song Added To Music Library
Yaariyan Song Added To Music Library
Old Money Song Added To Music Library
College Days Song Added To Music Library
Jatt Shikari Song Added To Music Library

Playing Random Song
Playing Song : Dildariyaan

Playing Random Song
Playing Song : Dildariyaan
Old Money Song Removed From Music Library
ABC Song not Available in Music Library`,
            "solution": {
                "language": "Java",
                "explanation": "This program manages a music library and plays a random song.",
                "code": `class MusicLibrary{
	java.util.ArrayList<String> songs;
	MusicLibrary(){
		songs = new java.util.ArrayList<>();
	}
	void addSong(String title){
		if(songs.add(title)){
			System.out.println(title + " Song Added To Music Library");
		}
		else{
			System.out.println(title + " Song Failed to Add To Music Library");
		}
	}
	void removeSong(String title){
		if(songs.remove(title)){
			System.out.println(title + " Song Removed From Music Library");
		}
		else{
			System.out.println(title + " Song not Available in Music Library");
		}
	}
	void playRandom(){
		System.out.println("\\nPlaying Random Song");
		System.out.println("Playing Song : " + songs.get(new java.util.Random().nextInt(songs.size()-1)));
	}
}
class Main{
	public static void main(String[] args){
		MusicLibrary wynk = new MusicLibrary();
		wynk.addSong("Dildariyaan");
		wynk.addSong("Tum Hi Ho");
		wynk.addSong("Pee Loon");
		wynk.addSong("Yaariyan");
		wynk.addSong("Old Money");
		wynk.addSong("College Days");
		wynk.addSong("Jatt Shikari");
		wynk.playRandom();
		wynk.playRandom();
		wynk.removeSong("Old Money");
		wynk.removeSong("ABC");

	}
}`
            }
        },
        {
            "id": 88,
            "description": "Write a Java program to create a class called 'Shape' with abstract methods for calculating area and perimeter, and subclasses for 'Rectangle', 'Circle', and 'Triangle'.",
            "difficulty": "hard",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Area of Rectangle : 50.0
Perimeter of Rectangle : 30.0
Area of Circle : 78.53981633974483
Perimeter of Circle : 31.41592653589793
Area of Triangle : 4.683748498798798
Perimeter of Triangle : 13.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates abstract classes and methods for shape calculation.",
                "code": `abstract class Shape{
	abstract double area();
	abstract double perimeter();
}
class Rectangle extends Shape{
	private double length, breadth;
	Rectangle(double l, double b){
		length = l;
		breadth = b;
	}
	double area(){
		return (length * breadth);
	}
	double perimeter(){
		return (2*(length + breadth));
	}
}
class Circle extends Shape{
	private double radius;
	Circle(double r){
		radius = r;
	}
	double area(){
		return (Math.PI*radius*radius);
	}
	double perimeter(){
		return (2*Math.PI*radius);
	}
}
class Triangle extends Shape{
	private double side1, side2, side3;
	Triangle(double s1, double s2, double s3){
		side1 = s1;
		side2 = s2;
		side3 = s3;
	}
	double area(){
		double s = perimeter()/2;
		return Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
	}
	double perimeter(){
		return (side1+side2+side3);
	}
}

class Main{
	public static void main(String[] args){
		Shape obj;
		obj = new Rectangle(10, 5);
		System.out.println("Area of Rectangle : " + obj.area());
		System.out.println("Perimeter of Rectangle : " + obj.perimeter());
		obj = new Circle(5);
		System.out.println("Area of Circle : " + obj.area());
		System.out.println("Perimeter of Circle : " + obj.perimeter());
		obj = new Triangle(5, 2, 6);
		System.out.println("Area of Triangle : " + obj.area());
		System.out.println("Perimeter of Triangle : " + obj.perimeter());

	}
}`
            }
        },
        {
            "id": 89,
            "description": "Write a Java program to create a class called 'Movie' with attributes for title, director, actors, and reviews, and methods for adding and retrieving reviews.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Kate Winslet Added To Cast Of Titanic
Leonardo DiCaprio Added To Cast Of Titanic
Billy Zane Added To Cast Of Titanic
Kathy Bates Added To Cast Of Titanic
Your Review Added for Titanic
Your Review Added for Titanic
Your Review Added for Titanic

Title : Titanic
Director : James Cameron
Actors : [Kate Winslet, Leonardo DiCaprio, Billy Zane, Kathy Bates]

Displaying Reviews

How many times I watch this movie.... It's still the masterpiece.

Titanic masterpiece: an emotional and visual thrill ride

STANDING OVATION! - (10 stars out of 10)`,
            "solution": {
                "language": "Java",
                "explanation": "This program manages movie details and allows adding and retrieving reviews.",
                "code": `class Movie{
	private String title, director;
	private java.util.List<String> actors, reviews;
	Movie(String name, String dir){
		title = name;
		director = dir;
		actors = new java.util.ArrayList<>();
		reviews = new java.util.ArrayList<>();
	}
	void addActor(String actor){
		if(actors.add(actor)){
			System.out.println(actor + " Added To Cast Of " + title);
		}
		else{
			System.out.println(actor + " Failed to Add");
		}
	}
	void addReview(String review){
		if(reviews.add(review)){
			System.out.println("Your Review Added for " + title);
		}
		else{
			System.out.println("Failed to Add Review");
		}
	}
	java.util.List getReviews(){
		return reviews;		
	}
	void displayMovie(){
		System.out.println();
		System.out.println("Title : " + title);
		System.out.println("Director : " + director);
		System.out.println("Actors : " + actors);	
	}
}

class Main{
	public static void main(String[] args){
		Movie titanic = new Movie("Titanic", "James Cameron");
		titanic.addActor("Kate Winslet");
		titanic.addActor("Leonardo DiCaprio");
		titanic.addActor("Billy Zane");
		titanic.addActor("Kathy Bates");
		titanic.addReview("How many times I watch this movie.... It's still the masterpiece.");
		titanic.addReview("Titanic masterpiece: an emotional and visual thrill ride");
		titanic.addReview("STANDING OVATION! - (10 stars out of 10)");

		titanic.displayMovie();
		System.out.println("\\nDisplaying Reviews\\n");
		java.util.List<String> reviews = titanic.getReviews();
		for(String str : reviews){
			System.out.println(str);
			System.out.println();
		}
	}
}`
            }
        },
        {
            "id": 90,
            "description": "Write a Java program to create a class called 'Restaurant' with attributes for menu items, prices, and ratings, and methods to add and remove items, and to calculate average rating.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Item : Noodles - Full Price : 100.0 Added to Menu
Item : Noodles - Half Price : 70.0 Added to Menu
Item : Burger Price : 50.0 Added to Menu
Item : White Sauce Pasta Price : 120.0 Added to Menu
Item : Masala Dosa Price : 70.0 Added to Menu
White Sauce Pasta Removed Successfully
abc Not Found
Rating Should be between 0 to 10. You Entered : 18.0
5.5 Rated Successfull
7.0 Rated Successfull
8.3 Rated Successfull
6.933333333333334`,
            "solution": {
                "language": "Java",
                "explanation": "This program manages restaurant menu items and calculates the average rating.",
                "code": `class MenuItem{
	String name;
	double price;
	MenuItem(String i, double p){
		name = i;
		price = p;
	}
}
class Restaurant{
	java.util.List<MenuItem> menu;
	java.util.List<Double> rating;
	Restaurant(){
		menu = new java.util.ArrayList<>();
		rating = new java.util.ArrayList<>();
	}
	void addMenu(String item, double price){
		if(price >= 0){
			if(menu.add(new MenuItem(item, price))){
				System.out.println("Item : "+item+" Price : "+price+" Added to Menu");
			}
		}
		else{
			System.out.println("Price can not be negative");
		}
	}
	void removeMenu(String item){
		for(int i = 0; i < menu.size(); i++){
			if(menu.get(i).name == item){
				if(menu.remove(i) != null){
					System.out.println(item + " Removed Successfully");
					return;
				}
			}
		}
		System.out.println(item + " Not Found");	
	}
	void addRating(double val){
		if(val < 0 || val > 10){
			System.out.println("Rating Should be between 0 to 10. You Entered : " + val);
			return;
		}
		if(rating.add(val)){
			System.out.println(val + " Rated Successfull");
		}
	}
	double averageRating(){
		double sum = 0;
		int i = 0;
		for(i = 0; i < rating.size(); i++){
			sum += rating.get(i);
		}
		return (sum/i);
	}
}

class Main{
	public static void main(String[] args){
		Restaurant chillis = new Restaurant();
		chillis.addMenu("Noodles - Full", 100);
		chillis.addMenu("Noodles - Half", 70);
		chillis.addMenu("Burger", 50);
		chillis.addMenu("White Sauce Pasta", 120);	
		chillis.addMenu("Masala Dosa", 70);
		chillis.removeMenu("White Sauce Pasta");
		chillis.removeMenu("abc");
		chillis.addRating(18);
		chillis.addRating(5.5);
		chillis.addRating(7);
		chillis.addRating(8.3);
		System.out.println(chillis.averageRating());
	}
}`
            }
        },
        {
            "id": 91,
            "description": "Write a Java program to create a class with methods to search for flights and hotels, and to book and cancel reservations.",
            "difficulty": "hard",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Flight 101 - New York to London Flight is Avalable
Hotel A - New York Hotel is Avalable
Successfully booked: Flight 101 - New York to London
Successfully booked: Hotel A - New York
Flight not available or already booked.
Hotel not available or already booked.
Successfully canceled: Flight 101 - New York to London
Successfully canceled: Hotel A - New York
No such flight booking found.
No such hotel booking found.`,
            "solution": {
                "language": "Java",
                "explanation": "This program simulates a booking system that handles flights and hotel reservations.",
                "code": `import java.util.ArrayList;
import java.util.List;

class ReservationSystem {
    private List<String> flights;
    private List<String> hotels;
    private List<String> flightBookings;
    private List<String> hotelBookings;

    public ReservationSystem() {
        flights = new ArrayList<>();
        hotels = new ArrayList<>();
        flightBookings = new ArrayList<>();
        hotelBookings = new ArrayList<>();
        initializeData();
    }

    private void initializeData() {
        flights.add("Flight 101 - New York to London");
        flights.add("Flight 202 - London to Paris");
        flights.add("Flight 303 - Paris to Tokyo");

        hotels.add("Hotel A - New York");
        hotels.add("Hotel B - London");
        hotels.add("Hotel C - Paris");
    }

    public void searchFlights(String f) {
        for (String flight : flights) {
            if(flight == f){
		System.out.println(flight + " Flight is Avalable");
	    }
        }
    }

    public void searchHotels(String h) {
        for (String hotel : hotels) {
            if(hotel == h){
		System.out.println(hotel + " Hotel is Avalable" );
	    }
        }
    }

    public void bookFlight(String flight) {
        if (flights.contains(flight) && !flightBookings.contains(flight)) {
            flightBookings.add(flight);
            System.out.println("Successfully booked: " + flight);
        } else {
            System.out.println("Flight not available or already booked.");
        }
    }

    public void bookHotel(String hotel) {
        if (hotels.contains(hotel) && !hotelBookings.contains(hotel)) {
            hotelBookings.add(hotel);
            System.out.println("Successfully booked: " + hotel);
        } else {
            System.out.println("Hotel not available or already booked.");
        }
    }

    public void cancelFlight(String flight) {
        if (flightBookings.contains(flight)) {
            flightBookings.remove(flight);
            System.out.println("Successfully canceled: " + flight);
        } else {
            System.out.println("No such flight booking found.");
        }
    }

    public void cancelHotel(String hotel) {
        if (hotelBookings.contains(hotel)) {
            hotelBookings.remove(hotel);
            System.out.println("Successfully canceled: " + hotel);
        } else {
            System.out.println("No such hotel booking found.");
        }
    }

    public static void main(String[] args) {
        ReservationSystem reservationSystem = new ReservationSystem();
        
        reservationSystem.searchFlights("Flight 101 - New York to London");
        reservationSystem.searchHotels("Hotel A - New York");

        reservationSystem.bookFlight("Flight 101 - New York to London");
        reservationSystem.bookHotel("Hotel A - New York");

        reservationSystem.bookFlight("Flight 101 - New York to London");
        reservationSystem.bookHotel("Hotel A - New York");

        reservationSystem.cancelFlight("Flight 101 - New York to London");
        reservationSystem.cancelHotel("Hotel A - New York");

        reservationSystem.cancelFlight("Flight 101 - New York to London");
        reservationSystem.cancelHotel("Hotel A - New York");
    }
}
`
            }
        },
        {
            "id": 92,
            "description": "Create a class showing an example of default constructor.",
            "difficulty": "easy",
            "topic": 14,
            "sample_input": null,
            "sample_output": `This is Default Constructor`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates the use of a default constructor in a class.",
                "code": `class My{
	My(){
		System.out.println("This is Default Constructor");
	}
}

class Main{
	public static void main(String[] args){
		new My();
	}
}`
            }
        },
        {
            "id": 93,
            "description": "Create a class showing an example of parameterized constructor.",
            "difficulty": "easy",
            "topic": 14,
            "sample_input": null,
            "sample_output": `This is Parametrized Constructor. x = 500`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates the use of a parameterized constructor in a class.",
                "code": `class My{
	My(int x){
		System.out.println("This is Parametrized Constructor. x = " + x);
	}
}

class Main{
	public static void main(String[] args){
		new My(500);
	}
}`
            }
        },
        {
            "id": 94,
            "description": "Create a class showing an example of copy constructor.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Parametrized Constructor
x = 500
Copy Constructor
x = 500`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates the use of a copy constructor to copy the attributes of another object.",
                "code": `class My{
	int x;
	My(int val){
		x = val;
		System.out.println("Parametrized Constructor");		
	}
	My(My obj){
		x = obj.x;
		System.out.println("Copy Constructor");		
	}
	void displayX(){
		System.out.println("x = " + x);
	}
}

class Main{
	public static void main(String[] args){
		My obj, cpobj;
		obj = new My(500);
		obj.displayX();
		cpobj = new My(obj);
		cpobj.displayX();
	}
}`
            }
        },
        {
            "id": 95,
            "description": "Create a class entering the rollno, name and class of the student from user but rollno should be automatically generated as we enter the information of 10 students.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Roll No : 4001
Name : Abhishek
Class : BCA - 3

Roll No : 4002
Name : Asha
Class : BCA - 3

Roll No : 4003
Name : Neha
Class : BBA - 3

Roll No : 4004
Name : Gurpreet
Class : BBA - 2

Roll No : 4005
Name : Amandeep
Class : BCOM - 1

Roll No : 4006
Name : Gian
Class : BCA - 1

Roll No : 4007
Name : Rohit
Class : BCA - 3

Roll No : 4008
Name : Mohit
Class : BCOM - 2

Roll No : 4009
Name : Nisha
Class : BBA - 2

Roll No : 4010
Name : Riya
Class : BA - 2`,
            "solution": {
                "language": "Java",
                "explanation": "This program automatically generates roll numbers for students while adding their details.",
                "code": `class Student{
	private static int totalStudents;
	private int rollno;
	private String studingclass, name;
	Student(String n, String cl){
		name = n;
		studingclass = cl;
		totalStudents++;
		rollno = 4000+totalStudents;
	}
	void displayDetails(){
		System.out.println("Roll No : " + rollno);
		System.out.println("Name : " + name);
		System.out.println("Class : " + studingclass);
	}
}
class Main{
	public static void main(String[] args){
		Student obj[] = new Student[10];
		obj[0] = new Student("Abhishek", "BCA - 3");
		obj[1] = new Student("Asha", "BCA - 3");
		obj[2] = new Student("Neha", "BBA - 3");
		obj[3] = new Student("Gurpreet", "BBA - 2");
		obj[4] = new Student("Amandeep", "BCOM - 1");
		obj[5] = new Student("Gian", "BCA - 1");
		obj[6] = new Student("Rohit", "BCA - 3");
		obj[7] = new Student("Mohit", "BCOM - 2");
		obj[8] = new Student("Nisha", "BBA - 2");
		obj[9] = new Student("Riya", "BA - 2");
		for(Student st : obj){
			st.displayDetails();
			System.out.println();
		}
	}
}`
            }
        },
        {
            "id": 96,
            "description": "Create a class showing the area of circle and rectangle by method overloading.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Area of Circle with radius = 5 : 78.53981633974483
Area of Rectangle with length = 5 and breadth = 9 : 45.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates method overloading by calculating the area of a circle and rectangle.",
                "code": `class Area{
	double area(double radius){
		return (Math.PI*radius*radius);
	}
	double area(double length, double breadth){
		return length * breadth;
	}
}
class Main{
	public static void main(String[] args){
		Area obj = new Area();
		System.out.println("Area of Circle with radius = 5 : " +obj.area(5));
		System.out.println("Area of Rectangle with length = 5 and breadth = 9 : " +obj.area(5, 9));

	}
}`
            }
        },
        {
            "id": 97,
            "description": "Create a class, entering the command line arguments from the user and show all the arguments as output.",
            "difficulty": "easy",
            "topic": 14,
            "sample_input": `java Main hello i am command line argument`,
            "sample_output": `Entered Arguments : hello       i       am      command line    argument`,
            "solution": {
                "language": "Java",
                "explanation": "This program takes user input via command-line arguments and prints them.",
                "code": `class Main{
	public static void main(String[] args){
		if(args.length == 0){
			System.out.println("Command Line Argument Not Entered");
		}
		else{	
			System.out.print("Entered Arguments : ");
			for(String arg : args){
				System.out.print(arg + "\\t");
			}
		}
	}
}`
            }
        },
        {
            "id": 98,
            "description": "Write a Java program to create a class called Person with private instance variables name, age. and country. Provide public getter and setter methods to access and modify these variables.",
            "difficulty": "easy",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Name : Abhishek
Country : India
Age : 20`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates the encapsulation principle by using private variables and public getter/setter methods.",
                "code": `class Person{
	private String name, country;
	private int age;
	public void setName(String n){
		name = n;
	}
	public void setCountry(String cntry){
		country = cntry;
	}
	public void setAge(int a){
		age = a;
	}
	public String getName(){
		return name;
	}
	public String getCountry(){
		return country;
	}
	public int getAge(){
		return age;
	}
}

class Main{
	public static void main(String[] args){
		Person p1 = new Person();
		p1.setName("Abhishek");
		p1.setAge(20);
		p1.setCountry("India");
		System.out.println("Name : " + p1.getName());
		System.out.println("Country : " + p1.getCountry());
		System.out.println("Age : " + p1.getAge());

	}
}`
            }
        },
        {
            "id": 99,
            "description": "Write a Java program to create a class called BankAccount with private instance variables accountNumber and balance. Provide public getter and setter methods to access and modify these variables.",
            "difficulty": "easy",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Account Number : 6258203210
Balance : 18501.3872 Rs`,
            "solution": {
                "language": "Java",
                "explanation": "This program manages bank account details using getter and setter methods.",
                "code": `class BankAccount{
	private long accnumber;
	private double balance;
	
	public void setAccountNumber(long accnum){
		accnumber = accnum;
	}
	public void setBalance(double bal){
		balance = bal;
	}
	public long getAccountNumber(){
		return accnumber;
	}
	public double getBalance(){
		return balance;
	}
}

class Main{
	public static void main(String[] args){
		BankAccount b1 = new BankAccount();
		b1.setAccountNumber(6258203210L);
		b1.setBalance(18501.3872);
		System.out.println("Account Number : " + b1.getAccountNumber());
		System.out.println("Balance : " + b1.getBalance() + " Rs");

	}
}`
            }
        },
        {
            "id": 100,
            "description": "Write a Java program to create a class called Rectangle with private instance variables length and width. Provide public getter and setter methods to access and modify these variables.",
            "difficulty": "easy",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Length : 10.3
Breadth : 18.38`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates the use of getter and setter methods for rectangle dimensions.",
                "code": `class Rectangle{
	private double length, breadth;
	
	public void setLength(double l){
		length = l;
	}
	public void setBreadth(double b){
		breadth = b;
	}
	public double getLength(){
		return length;
	}
	public double getBreadth(){
		return breadth;
	}
}

class Main{
	public static void main(String[] args){
		Rectangle b1 = new Rectangle();
		b1.setLength(10.3);
		b1.setBreadth(18.38);
		System.out.println("Length : " + b1.getLength());
		System.out.println("Breadth : " + b1.getBreadth());

	}
}`
            }
        },
        {
            "id": 101,
            "description": "Write a Java program to create a class called Employee with private instance variables employee_id, employee_name, and employee_salary. Provide public getter and setter methods to access and modify the id and name variables, but provide a getter method for the salary variable that returns a formatted string.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Employee Id : 1001
Employee Name : Abhishek
Employee Salary : 40500.87 Rs`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates encapsulation by providing access control using getter and setter methods.",
                "code": `class Employee{
	private String employee_id, employee_name;
	private double employee_salary;

	public void setEmpId(String id){
		employee_id = id;
	}
	public void setEmpName(String name){
		employee_name = name;
	}
	public String getEmpId(){
		return employee_id;
	}
	public String getEmpName(){
		return employee_name;
	}
	public void setSalary(double salary){
		employee_salary = salary;
	}
	public String getSalary(){
		return String.format("%.2f Rs", employee_salary);
	}
}

class Main{
	public static void main(String[] args){
		Employee emp = new Employee();
		emp.setEmpId("1001");
		emp.setEmpName("Abhishek");
		emp.setSalary(40500.872565);
		System.out.println("Employee Id : " + emp.getEmpId());
		System.out.println("Employee Name : " + emp.getEmpName());
		System.out.println("Employee Salary : " + emp.getSalary());
	}
}`
            }
        },
        {
            "id": 102,
            "description": "Write a Java program to create a class called Circle with a private instance variable radius. Provide public getter and setter methods to access and modify the radius variable. However, provide two methods called calculateArea() and calculatePerimeter() that return the calculated area and perimeter based on the current radius value.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Radius of Circle : 5.0
Area : 78.53981633974483
Circumference : 31.41592653589793`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the area and perimeter of a circle based on its radius.",
                "code": `class Circle{
	private double radius;
	public double getRadius(){
		return radius;
	}
	public void setRadius(double r){
		radius = r;
	}
	double calculateArea(){
		return (Math.PI * radius * radius);
	}
	double calculatePerimeter(){
		return (2 * Math.PI * radius);
	}
}
class Main{
	public static void main(String[] args){
		Circle obj = new Circle();
		obj.setRadius(5);
		System.out.println("Radius of Circle : " + obj.getRadius());
		System.out.println("Area : " + obj.calculateArea());
		System.out.println("Circumference : " + obj.calculatePerimeter());
	}
}`
            }
        },
        {
            "id": 103,
            "description": "Write a Java program to create a class called Car with private instance variables company_name, model_name, year, and mileage. Provide public getter and setter methods to access and modify the company_name, model_name, and year variables. However, only provide a getter method for the mileage variable.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Car Company : BMW
Car Model : X1
Car Year : 2022
Car Mileage : 15.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates controlled access to class attributes with the use of getter and setter methods.",
                "code": `class Car{
	private String company, model, year;
	private double mileage = 15;
	public void setCompany(String cmpny){
		company = cmpny;
	}
	public void setModel(String m){
		model = m;
	}
	public void setYear(String yy){
		year = yy;
	}
	public String getCompany(){
		return company;
	}
	public String getModel(){
		return model;
	}
	public String getYear(){
		return year;
	}
	public double getMileage(){
		return mileage;
	}
}
class Main{
	public static void main(String[] args){
		Car bmw = new Car();
		bmw.setCompany("BMW");
		bmw.setModel("X1");
		bmw.setYear("2022");
		System.out.println("Car Company : " + bmw.getCompany());
		System.out.println("Car Model : " + bmw.getModel());
		System.out.println("Car Year : " + bmw.getYear());
		System.out.println("Car Mileage : " + bmw.getMileage());	
	}
}`
            }
        },
        {
            "id": 104,
            "description": "Write a Java program to create a class called Student with private instance variables student_id, student_name, and grades. Provide public getter and setter methods to access and modify the student_id and student_name variables. However, provide a method called addGrade() that allows adding a grade to the grades variable while performing additional validation.",
            "difficulty": "hard",
            "topic": 14,
            "sample_input": null,
            "sample_output": `Student ID: 1
Student Name: Alice
Grades: []
Grade added: 85.5
Grade added: 92.0
Invalid grade. Please enter a grade between 0 and 100.
Invalid grade. Please enter a grade between 0 and 100.
Grade added: 78.0

Updated Student Details:
Student ID: 1
Student Name: Alice
Grades: [85.5, 92.0, 78.0]`,
            "solution": {
                "language": "Java",
                "explanation": "This program handles student data with validation, using getter, setter, and additional methods.",
                "code": `import java.util.ArrayList;
import java.util.List;

class Student {
    private int student_id;
    private String student_name;
    private List<Double> grades;

    public Student(int id, String name) {
        student_id = id;
        student_name = name;
        grades = new ArrayList<>();
    }

    public int getStudentId() {
        return student_id;
    }

    public void setStudentId(int student_id) {
        this.student_id = student_id;
    }

    public String getStudentName() {
        return student_name;
    }

    public void setStudentName(String student_name) {
        this.student_name = student_name;
    }

    public void addGrade(double grade) {
        if (grade >= 0.0 && grade <= 100.0) {
            grades.add(grade);
            System.out.println("Grade added: " + grade);
        } else {
            System.out.println("Invalid grade. Please enter a grade between 0 and 100.");
        }
    }
    public List<Double> getGrades(){
	return grades;	
    }
}
class Main{
	public static void main(String[] args) {
        	Student student = new Student(1, "Alice");

		System.out.println("Student ID: " + student.getStudentId());
        	System.out.println("Student Name: " + student.getStudentName());
        	System.out.println("Grades: " + student.getGrades());

        	student.addGrade(85.5);
        	student.addGrade(92.0);
        	student.addGrade(-10.0); 
        	student.addGrade(101.0); 
        	student.addGrade(78.0);

        	System.out.println("\\nUpdated Student Details:");
        	System.out.println("Student ID: " + student.getStudentId());
        	System.out.println("Student Name: " + student.getStudentName());
        	System.out.println("Grades: " + student.getGrades());
    }
}`
            }
        },
        // Exception Handaling
        {
            "id": 105,
            "description": "Write a Java program that throws an exception and catches it using a try-catch block.",
            "difficulty": "easy",
            "topic": 5,
            "sample_input": `Enter Character : 8`,
            "sample_output": `Entered Character : 8`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates exception handling using a try-catch block.",
                "code": `class ReadChar{
	void takeChar() throws java.io.IOException{
		System.out.print("Enter Character : ");
		System.out.println("Entered Character : " + ((char)(System.in.read())));
	}
}
class Main{
	public static void main(String[] args){
		ReadChar rc = new ReadChar();
		try{
			rc.takeChar();
		}
		catch(Throwable th){
			System.out.println("Exception Occured : " + th.getMessage());
		}
	}
}`
            }
        },
        {
            "id": 106,
            "description": "Write a Java program to create a method that takes an integer as a parameter and throws an exception if the number is odd.",
            "difficulty": "medium",
            "topic": 5,
            "sample_input": null,
            "sample_output": `Exception : Number is Odd`,
            "solution": {
                "language": "Java",
                "explanation": "This program throws an exception if the input integer is odd.",
                "code": `class NumberIsOddException extends Throwable{
	public java.lang.String getMessage(){
		return "Number is Odd";
	}
}
class Main{
	void isOdd(int num) throws NumberIsOddException{
		if(num % 2 != 0){
			throw new NumberIsOddException();
		}
	}
	public static void main(String[] args){
		try{
			(new Main()).isOdd(23);
		}
		catch(NumberIsOddException e){
			System.out.println("Exception : " + e.getMessage());	
		}
	}
}`
            }
        },
        {
            "id": 107,
            "description": "Write a Java program to create a method that reads a file and throws an exception if the file is not found.",
            "difficulty": "medium",
            "topic": 5,
            "sample_input": null,
            "sample_output": `File Not Found : Hello.txt (The system cannot find the file specified)`,
            "solution": {
                "language": "Java",
                "explanation": "This program handles file reading and throws an exception if the file does not exist.",
                "code": `class Main{
	public static String readFile(String filepath) throws  java.io.FileNotFoundException, java.io.IOException{
		java.io.InputStreamReader isr = new java.io.FileReader(filepath);
		String str = "";
		char ch = 'c';
		while((ch = (char)isr.read()) != -1){
			str += ch;
		}
		return str;
	}
	public static void main(String args[]){
		try{
			readFile("Hello.txt");
		}
		catch(java.io.FileNotFoundException ex){
			System.out.println("File Not Found : " + ex.getMessage());
		}
		catch(Throwable th){
			System.out.println("Unexpected Erro : " + th.getMessage());
		}
	}
}`
            }
        },
        {
            "id": 108,
            "description": "Write a Java program that reads a list of numbers from a file and throws an exception if any of the numbers are positive.",
            "difficulty": "hard",
            "topic": 5,
            "sample_input": `my.txt file with positive numbers`,
            "sample_output": `File Contain Positive Numbers`,
            "solution": {
                "language": "Java",
                "explanation": "This program throws an exception if a positive number is found in the file.",
                "code": `class PositiveNumberException extends Throwable{
	public String getMessage(){
		return "File Contain Positive Numbers";
	}
}
class Main{
	static void readFile() throws java.io.FileNotFoundException, PositiveNumberException{
		java.util.Scanner sc = new java.util.Scanner(new java.io.File("my.txt"));
		while(sc.hasNextInt()){
			if(sc.nextInt() < 0){
				throw (new PositiveNumberException());
			}
		}
	}
	public static void main(String[] args){
		try{
			readFile();
		}
		catch(PositiveNumberException e){
			System.out.println(e.getMessage());
		}
		catch(Throwable e){
			System.out.println(e.getMessage());
		}
	}
}
`
            }
        },
        {
            "id": 109,
            "description": "Write a Java program that reads a file and throws an exception if the file is empty.",
            "difficulty": "medium",
            "topic": 5,
            "sample_input": `my.txt file with empty content`,
            "sample_output": `File Is Empty Exception`,
            "solution": {
                "language": "Java",
                "explanation": "This program reads a file and checks if it is empty, throwing an exception if so.",
                "code": `class EmptyFileException extends Throwable{
	public String getMessage(){
		return "File Is Empty Exception";
	}
}

class Main{
	static void readFile() throws java.io.FileNotFoundException, EmptyFileException, java.io.IOException{
		java.io.InputStreamReader isr = new java.io.FileReader("my.txt");
		if(isr.read() == -1){
			throw new EmptyFileException();
		}	
	}
	public static void main(String[] args){
		try{
			readFile();
		}
		catch(EmptyFileException e){
			System.out.println(e.getMessage());
		}
		catch(Throwable e){
			System.out.println(e.getMessage());
		}
	}
}
`
            }
        },
        {
            "id": 110,
            "description": "Write a Java program that reads a list of integers from the user and throws an exception if any numbers are duplicates.",
            "difficulty": "medium",
            "topic": 5,
            "sample_input": `838
831
747
838`,
            "sample_output": `Number Already Entered`,
            "solution": {
                "language": "Java",
                "explanation": "This program throws an exception if duplicate integers are found in the input list.",
                "code": `class NumberIsDuplicateException extends Throwable{
	public String getMessage(){
		return "Number Already Entered";
	}
}
class Main{
	static int[] readValues() throws java.io.IOException, NumberIsDuplicateException{
		java.io.BufferedReader br = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
		int[] arr = new int[10];
		for(int i = 0; i < arr.length; i++){
			arr[i]  =  Integer.parseInt(br.readLine()); 
			if(i > 0){
				java.util.Arrays.sort(arr, 0, i-1);
				if(java.util.Arrays.binarySearch(arr, 0, i-1, arr[i]) >= 0)
					throw (new NumberIsDuplicateException());
			}
		}
		return arr;
	}
	public static void main(String[] args){
		try{
			Main.readValues();
		}
		catch(Throwable th){
			System.out.println(th.getMessage());
		}
	}
}`
            }
        },
        {
            "id": 111,
            "description": "Write a Java program to create a method that takes a string as input and throws an exception if the string does not contain vowels.",
            "difficulty": "medium",
            "topic": 5,
            "sample_input": `hggh`,
            "sample_output": `String Doesn't contain vowels`,
            "solution": {
                "language": "Java",
                "explanation": "This program throws an exception if the input string does not contain any vowels.",
                "code": `class DoesNotHaveVowelException extends Throwable{
	public String getMessage(){
		return "String Doesn't contain vowels";
	}
}
class Main{
	static void readValues() throws java.io.IOException, DoesNotHaveVowelException{
		java.io.BufferedReader br = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
		String str = br.readLine();	
		boolean containvowel = false;
		for(int i = 0; i < str.length(); i++){
			if(str.contains("A") || str.contains("a") || str.contains("E") || str.contains("e") || str.contains("I") || str.contains("i") || str.contains("O") || str.contains("o") ||  str.contains("U") || str.contains("u")){
			containvowel = true;
			}
		}
		if(!containvowel){
			throw (new DoesNotHaveVowelException());
		}
	}
	public static void main(String[] args){
		try{
			Main.readValues();
		}
		catch(Throwable th){
			System.out.println(th.getMessage());
		}
	}
}`
            }
        },
        {
            "id": 112,
            "description": "Write a Java program to connect the Java API to Database, if the connection is not successful then throw an exception.",
            "difficulty": "hard",
            "topic": 5,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program connects to a database and throws an exception if the connection fails.",
                "code": null
            }
        },
        {
            "id": 113,
            "description": "Write a Java program to manage the driver with path, username, and password. If not successful, throw an exception.",
            "difficulty": "hard",
            "topic": 5,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program sets up a database driver and throws an exception if it fails.",
                "code": null
            }
        },
        {
            "id": 114,
            "description": "Write a Java program to throw the SQL Query (insert, delete, update). If not successful, then throw an exception.",
            "difficulty": "hard",
            "topic": 5,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program executes SQL queries and throws an exception if they fail.",
                "code": null
            }
        },
        {
            "id": 115,
            "description": "Write a Java program to show an example of the 'throws' keyword.",
            "difficulty": "easy",
            "topic": 5,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates the use of the 'throws' keyword in Java.",
                "code": null
            }
        },
        {
            "id": 116,
            "description": "Write a Java program to show an example of multiple catch blocks.",
            "difficulty": "easy",
            "topic": 5,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates handling multiple exceptions using multiple catch blocks.",
                "code": null
            }
        },
        {
            "id": 117,
            "description": "Write a Java program to show an example of a nested try block.",
            "difficulty": "medium",
            "topic": 5,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates the use of a nested try-catch block for exception handling.",
                "code": null
            }
        },
        // Packages
        {
            "id": 118,
            "description": "Write a Java program to access the java.util.Date class through import keyword and print the current date of the system.",
            "difficulty": "easy",
            "topic": 15,
            "sample_input": null,
            "sample_output": `Today : Fri Oct 18 20:53:16 IST 2024`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates using the import keyword to access the java.util.Date class and print the current system date.",
                "code": `import java.util.Date;

class Main{
	public static void main(String[] args){
		System.out.println("Today : " + new Date());
	}
}`
            }
        },
        {
            "id": 119,
            "description": "Create a Java program to access the java.util.Date class through a qualified way and print the current date of the system.",
            "difficulty": "easy",
            "topic": 15,
            "sample_input": null,
            "sample_output": `Today : Fri Oct 18 20:53:37 IST 2024`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates accessing the java.util.Date class directly through its fully qualified name and printing the current date.",
                "code": `class Main{
	public static void main(String[] args){
		System.out.println("Today : " + new java.util.Date());
	}
}`
            }
        },
        {
            "id": 120,
            "description": "Create a Java program to access the java.util.Date class through import keyword and print the current date of the system but inherit the Date class.",
            "difficulty": "medium",
            "topic": 15,
            "sample_input": null,
            "sample_output": `Today : Fri Oct 18 20:54:00 IST 2024`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates importing the java.util.Date class, extending it, and printing the current date by using inheritance.",
                "code": `import java.util.Date;
class Main extends Date{
	void display(){
		System.out.println("Today : " + toString());
	}
	public static void main(String[] args){
		new Main().display();
	}
}`
            }
        },
        {
            "id": 121,
            "description": "Create a Java program to access the java.util.Date class through a qualified way and print the current date of the system but inherit the Date class.",
            "difficulty": "medium",
            "topic": 15,
            "sample_input": null,
            "sample_output": `Today : Fri Oct 18 20:54:21 IST 2024`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates accessing the java.util.Date class using the fully qualified name, extending it, and printing the current system date through inheritance.",
                "code": `class Main extends java.util.Date{
	void display(){
		System.out.println("Today : " + toString());
	}
	public static void main(String[] args){
		new Main().display();
	}
}`
            }
        },
        {
            "id": 122,
            "description": "Create a Java program to create a package with multiple default classes.",
            "difficulty": "medium",
            "topic": 15,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates creating a package that contains multiple classes without public visibility, making them accessible only within the same package.",
                "code": `package mypackage;

class A{}

class B{}

class C{}`
            }
        },
        {
            "id": 123,
            "description": "Create a Java program to create a package with 4 public classes, create the object in another file, and call the function created in those classes.",
            "difficulty": "medium",
            "topic": 15,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to create a package with 4 public classes and access them from another file by creating instances and invoking their methods.",
                "code": null
            }
        },
        {
            "id": 124,
            "description": "Write a Java program to perform employee payroll processing using packages. In the java file, Emp.java creates a package employee and creates a class Emp. Declare the variables name, empid, category, bpay, hra, da, npay, pf, grosspay, incometax, and allowance. Calculate the values in methods. Create another java file Emppay.java. Create an object e to call the methods to perform and print values.",
            "difficulty": "hard",
            "topic": 15,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates package creation and payroll processing in a multi-file setup with one file containing the employee class and the other handling the payroll methods.",
                "code": null
            }
        },
        {
            "id": 125,
            "description": "Create a Java program to create a package with public class and protected members to be accessed in another class.",
            "difficulty": "medium",
            "topic": 15,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates creating a package with public classes and protected members, showing how protected members are accessed from another class.",
                "code": null
            }
        },
        {
            "id": 126,
            "description": "Create a Java program to create a nested package i.e. c4.sample with public class and protected members to be accessed in another class.",
            "difficulty": "medium",
            "topic": 15,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to create a nested package with public classes and protected members and access them in another class.",
                "code": null
            }
        },
        {
            "id": 127,
            "description": "Create a Java program to create a package with public class and public members to be accessed in another class.",
            "difficulty": "easy",
            "topic": 15,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates creating a package with public classes and members, and shows how to access them from another class.",
                "code": null
            }
        },
        // 1D Array
        {
            "id": 128,
            "description": "Program to copy all elements of one array into another array",
            "difficulty": "easy",
            "topic": 16,
            "sample_input": null,
            "sample_output": `Original Array :
Value at 1position : 52
Value at 2position : 98
Value at 3position : 71
Value at 4position : 28
Value at 5position : 56
Duplicated Array :
Value at 1position : 52
Value at 2position : 98
Value at 3position : 71
Value at 4position : 28
Value at 5position : 56`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to copy the elements of one array into another array using a loop.",
                "code": `class Main{
	static int[] duplicateArray(int arr[]){
		int cparr[] = new int[arr.length];
		for(int i = 0; i < arr.length; i++){
			cparr[i] = arr[i];
		}
		return cparr;
	}
	static void printArray(int arr[]){
		for(int i = 0; i < arr.length; i++){
			System.out.println("Value at " + (i+1) + "position : " + arr[i]);
		}
	}
	public static void main(String args[]){
		int arr[] = {52, 98, 71, 28, 56};
		System.out.println("Original Array : ");
		printArray(arr);
		int newarr[] = duplicateArray(arr);
		System.out.println("Duplicated Array : ");
		printArray(newarr); 
	}
}`
            }
        },
        {
            "id": 129,
            "description": "Program to find the frequency of each element in the array",
            "difficulty": "medium",
            "topic": 16,
            "sample_input": null,
            "sample_output": `6 occurred 2 Times
2 occurred 2 Times
9 occurred 1 Times
3 occurred 1 Times`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to count the frequency of each element in an array.",
                "code": `class Main{
	public static void main(String args[]){
		int arr[] = {6,2,9,3,6,2};

		java.util.List<Integer> uniquearr = new java.util.ArrayList<>();
		java.util.List<Integer> freq = new java.util.ArrayList<>();

		for(int i = 0; i < arr.length; i++){
			if(uniquearr.isEmpty() || !uniquearr.contains(arr[i])){
				uniquearr.add(arr[i]);
				freq.add(1);
			}
			else if(uniquearr.contains(arr[i])){
				freq.add(uniquearr.indexOf(arr[i]), (freq.get(uniquearr.indexOf(arr[i]))+1));
			}
		}
		for(int i = 0; i < uniquearr.size(); i++){
			System.out.println(uniquearr.get(i) + " occurred " + freq.get(i) + " Times");
		}
	}
}`
            }
        },
        {
            "id": 130,
            "description": "Program to left rotate the elements of an array",
            "difficulty": "easy",
            "topic": 16,
            "sample_input": null,
            "sample_output": `Before Left Rotation :
Value at 1 position : 20
Value at 2 position : 38
Value at 3 position : 17
Value at 4 position : 47
Value at 5 position : 27
After Left Rotation 2 times:
Value at 1 position : 17
Value at 2 position : 47
Value at 3 position : 27
Value at 4 position : 20
Value at 5 position : 38`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to left rotate the elements of an array by shifting each element to its left.",
                "code": `class Main{
	static void printArray(int arr[]){
		for(int i = 0; i < arr.length; i++){
			System.out.println("Value at " + (i+1) + " position : " + arr[i]);
		}
	}

	static void leftRotate(int arr[], int n){
		n = n % arr.length;
		for(int i = 0; i < n; i++){
			int temp = arr[0];
			for(int j = 1; j < arr.length; j++){
				arr[j-1] = arr[j];
			}
			arr[arr.length-1] = temp; 
		}
	}

	public static void main(String[] args){
		int arr[] = {20,38,17,47,27};
		System.out.println("Before Left Rotation : ");
		printArray(arr);
		System.out.println("After Left Rotation 2 times: ");
		leftRotate(arr, 2);
		printArray(arr);
	}
}`
            }
        },
        {
            "id": 131,
            "description": "Program to print the duplicate elements of an array",
            "difficulty": "medium",
            "topic": 16,
            "sample_input": null,
            "sample_output": `Array Values :
Value at 1 position : 6
Value at 2 position : 2
Value at 3 position : 9
Value at 4 position : 3
Value at 5 position : 6
Value at 6 position : 2
Duplicate Values :
6
2`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to find and print duplicate elements in an array.",
                "code": `class Main{
	static void printArray(int arr[]){
		for(int i = 0; i < arr.length; i++){
			System.out.println("Value at " + (i+1) + " position : " + arr[i]);
		}
	}

	public static void main(String args[]){
		int arr[] = {6,2,9,3,6,2};

		java.util.ArrayList<Integer> uniquearr = new java.util.ArrayList<>();
		java.util.ArrayList<Integer> freq = new java.util.ArrayList<>();

		for(int i = 0; i < arr.length; i++){
			if(uniquearr.isEmpty()){
				uniquearr.add(arr[i]);
				freq.add(1);
			}
			else if(uniquearr.contains(arr[i])){
				freq.add(uniquearr.indexOf(arr[i]), (freq.get(uniquearr.indexOf(arr[i]))+1));
			}
			else{
				uniquearr.add(arr[i]);
				freq.add(1);
			}
		}
		System.out.println("Array Values : ");
		printArray(arr);
		
		System.out.println("Duplicate Values : ");
		for(int i = 0; i < uniquearr.size(); i++){
			if(freq.get(i) > 1){
				System.out.println(uniquearr.get(i));
			}
		}
	}
}`
            }
        },
        {
            "id": 132,
            "description": "Program to print the elements of an array",
            "difficulty": "easy",
            "topic": 16,
            "sample_input": null,
            "sample_output": `Value at 1 position : 83
Value at 2 position : 49
Value at 3 position : 289
Value at 4 position : 27
Value at 5 position : 23`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to iterate over an array and print its elements.",
                "code": `class Main{
	static void printArray(int arr[]){
		for(int i = 0; i < arr.length; i++){
			System.out.println("Value at " + (i+1) + " position : " + arr[i]);
		}
	}

	public static void main(String[] args){
		int arr[] = {83, 49, 289, 27, 23};
		printArray(arr);
	}
}`
            }
        },
        {
            "id": 133,
            "description": "Program to print the elements of an array in reverse order",
            "difficulty": "easy",
            "topic": 16,
            "sample_input": null,
            "sample_output": `Value at 5 position : 23
Value at 4 position : 27
Value at 3 position : 289
Value at 2 position : 49
Value at 1 position : 83`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to iterate over an array in reverse order and print its elements.",
                "code": `class Main{
	static void printReverseArray(int arr[]){
		for(int i = arr.length-1; i >= 0; i--){
			System.out.println("Value at " + (i+1) + " position : " + arr[i]);
		}
	}

	public static void main(String[] args){
		int arr[] = {83, 49, 289, 27, 23};
		printReverseArray(arr);
	}
}`
            }
        },
        {
            "id": 134,
            "description": "Program to print the elements of an array present on even position",
            "difficulty": "easy",
            "topic": 16,
            "sample_input": null,
            "sample_output": `Value at 2 position : 49
Value at 4 position : 27`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to print the elements of an array that are located at even positions.",
                "code": `class Main{
	static void printArrayValueAtEven(int arr[]){
		for(int i = 1; i < arr.length; i += 2){
			System.out.println("Value at " + (i+1) + " position : " + arr[i]);
		}
	}

	public static void main(String[] args){
		int arr[] = {83, 49, 289, 27, 23};
		printArrayValueAtEven(arr);
	}
}`
            }
        },
        {
            "id": 135,
            "description": "Program to print the elements of an array present on odd position",
            "difficulty": "easy",
            "topic": 16,
            "sample_input": null,
            "sample_output": `Value at 1 position : 83
Value at 3 position : 289
Value at 5 position : 23`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to print the elements of an array that are located at odd positions.",
                "code": `class Main{
	static void printArrayValueAtOdd(int arr[]){
		for(int i = 0; i < arr.length; i += 2){
			System.out.println("Value at " + (i+1) + " position : " + arr[i]);
		}
	}

	public static void main(String[] args){
		int arr[] = {83, 49, 289, 27, 23};
		printArrayValueAtOdd(arr);
	}
}`
            }
        },
        {
            "id": 136,
            "description": "Program to print the largest element in an array",
            "difficulty": "easy",
            "topic": 16,
            "sample_input": null,
            "sample_output": `Value at 1 position : 83
Value at 2 position : 49
Value at 3 position : 289
Value at 4 position : 27
Value at 5 position : 23
Value at 6 position : 592

Maximum value of array :592`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to find and print the largest element in an array.",
                "code": `class Main{
	static void printArray(int arr[]){
		for(int i = 0; i < arr.length; i++){
			System.out.println("Value at " + (i+1) + " position : " + arr[i]);
		}
	}
	static int arrayMax(int arr[]){
		int max = 0;
		for(int i = 1; i < arr.length; i++){
			if(arr[max] < arr[i])
				max = i;
		}
		return arr[max];
	}

	public static void main(String[] args){
		int arr[] = {83, 49, 289, 27, 23, 592};
		printArray(arr);
		System.out.println("\\nMaximum value of array :" + arrayMax(arr));
	}
}`
            }
        },
        {
            "id": 137,
            "description": "Program to print the smallest element in an array",
            "difficulty": "easy",
            "topic": 16,
            "sample_input": null,
            "sample_output": `Value at 1 position : 83
Value at 2 position : 49
Value at 3 position : 289
Value at 4 position : 27
Value at 5 position : 23

Minimum value of array :23`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to find and print the smallest element in an array.",
                "code": `class Main{
	static void printArray(int arr[]){
		for(int i = 0; i < arr.length; i++){
			System.out.println("Value at " + (i+1) + " position : " + arr[i]);
		}
	}
	static int arrayMin(int arr[]){
		int min = 0;
		for(int i = 1; i < arr.length; i++){
			if(arr[min] > arr[i])
				min = i;
		}
		return arr[min];
	}

	public static void main(String[] args){
		int arr[] = {83, 49, 289, 27, 23};
		printArray(arr);
		System.out.println("\\nMinimum value of array :" + arrayMin(arr));
	}
}`
            }
        },
        {
            "id": 138,
            "description": "Program to print the number of elements present in an array",
            "difficulty": "easy",
            "topic": 16,
            "sample_input": null,
            "sample_output": `The number of elements present in the array is: 5`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to print the total number of elements present in an array.",
                "code": `class Main {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
                
        System.out.println("The number of elements present in the array is: " + arr.length);
    }
}
`
            }
        },
        {
            "id": 139,
            "description": "Program to print the sum of all the items of the array",
            "difficulty": "easy",
            "topic": 16,
            "sample_input": null,
            "sample_output": `Value at 1 position : 83
Value at 2 position : 49
Value at 3 position : 289
Value at 4 position : 27
Value at 5 position : 23

Sum of Values : 471`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to calculate and print the sum of all the elements of an array.",
                "code": `class Main{
	static void printArray(int arr[]){
		for(int i = 0; i < arr.length; i++){
			System.out.println("Value at " + (i+1) + " position : " + arr[i]);
		}
	}
	
	static int sumOfArray(int arr[]){
		int sum = 0;
		for(int i = 0; i < arr.length; i++){
			sum += arr[i];
		}
		return sum;
	}
	
	public static void main(String[] args){
		int arr[] = {83, 49, 289, 27, 23};
		printArray(arr);
		System.out.println("\\nSum of Values : " + sumOfArray(arr));
	}
}`
            }
        },
        {
            "id": 140,
            "description": "Program to right rotate the elements of an array",
            "difficulty": "easy",
            "topic": 16,
            "sample_input": null,
            "sample_output": `Before Right Rotation :
Value at 1 position : 1
Value at 2 position : 3
Value at 3 position : 5
Value at 4 position : 7
Value at 5 position : 9
After Right Rotation 2 times:
Value at 1 position : 7
Value at 2 position : 9
Value at 3 position : 1
Value at 4 position : 3
Value at 5 position : 5`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to right rotate the elements of an array by shifting each element to its right.",
                "code": `class Main{
	static void printArray(int arr[]){
		for(int i = 0; i < arr.length; i++){
			System.out.println("Value at " + (i+1) + " position : " + arr[i]);
		}
	}

	static void rightRotate(int arr[], int n){
		n = n % arr.length;
		for(int i = 0; i < n; i++){
			int temp = arr[arr.length-1];
			for(int j = arr.length-1; j >= 1; j--){
				arr[j] = arr[j-1];
			}
			arr[0] = temp; 
		}
	}

	public static void main(String[] args){
		int arr[] = {1,3,5,7,9};
		System.out.println("Before Right Rotation : ");
		printArray(arr);
		System.out.println("After Right Rotation 2 times: ");
		rightRotate(arr, 2);
		printArray(arr);
	}
}`
            }
        },
        {
            "id": 141,
            "description": "Program to sort the elements of an array in ascending order",
            "difficulty": "easy",
            "topic": 16,
            "sample_input": null,
            "sample_output": `Value at 1 position : 83
Value at 2 position : 49
Value at 3 position : 289
Value at 4 position : 27
Value at 5 position : 23

After Sorting in Ascending order :
Value at 1 position : 23
Value at 2 position : 27
Value at 3 position : 49
Value at 4 position : 83
Value at 5 position : 289`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to sort the elements of an array in ascending order using any sorting algorithm.",
                "code": `class Main{
	static void printArray(int arr[]){
		for(int i = 0; i < arr.length; i++){
			System.out.println("Value at " + (i+1) + " position : " + arr[i]);
		}
	}
	static void sortArray(int arr[]){
		for(int i = 0; i < arr.length; i++){
			for(int j = 0; j < (arr.length-i-1); j++){
				if(arr[j] > arr[j+1]){
					int temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp;
				}
			}
		}
	}		
	public static void main(String[] args){
		int arr[] = {83, 49, 289, 27, 23};
		printArray(arr);
		sortArray(arr);
		System.out.println("\\nAfter Sorting in Ascending order : ");
		printArray(arr);
	}
}`
            }
        },
        {
            "id": 142,
            "description": "Program to sort the elements of an array in descending order",
            "difficulty": "easy",
            "topic": 16,
            "sample_input": null,
            "sample_output": `Value at 1 position : 83
Value at 2 position : 49
Value at 3 position : 289
Value at 4 position : 27
Value at 5 position : 23

After Sorting in Descending order :
Value at 1 position : 289
Value at 2 position : 83
Value at 3 position : 49
Value at 4 position : 27
Value at 5 position : 23`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to sort the elements of an array in descending order using any sorting algorithm.",
                "code": `class Main{
	static void printArray(int arr[]){
		for(int i = 0; i < arr.length; i++){
			System.out.println("Value at " + (i+1) + " position : " + arr[i]);
		}
	}
	static void sortArray(int arr[]){
		for(int i = 0; i < arr.length; i++){
			for(int j = 0; j < (arr.length-i-1); j++){
				if(arr[j] < arr[j+1]){
					int temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp;
				}
			}
		}
	}		
	public static void main(String[] args){
		int arr[] = {83, 49, 289, 27, 23};
		printArray(arr);
		sortArray(arr);
		System.out.println("\\nAfter Sorting in Descending order : ");
		printArray(arr);
	}
}`
            }
        },
        {
            "id": 143,
            "description": "Program to find the 3rd largest number in an array",
            "difficulty": "medium",
            "topic": 16,
            "sample_input": null,
            "sample_output": `Value at 1 position : 9
Value at 2 position : 3
Value at 3 position : 91
Value at 4 position : 25
Value at 5 position : 87
Third Largest Value of Array : 25`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to find the third largest number in an array.",
                "code": `class Main{
	static void printArray(int arr[]){
		for(int i = 0; i < arr.length; i++){
			System.out.println("Value at " + (i+1) + " position : " + arr[i]);
		}
	}
	static void sortArray(int arr[]){
		for(int i = 0; i < arr.length; i++){
			for(int j = 0; j < (arr.length-i-1); j++){
				if(arr[j] < arr[j+1]){
					int temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp;
				}
			}
		}
	}

	static void thirdLargestArrayValue(int arr[]){
		sortArray(arr);
		int count = 0;

		for(int i = 1; i < arr.length; i++){
			while(i < arr.length && arr[i-1] == arr[i]){
				i++;
			}
			count++;
			if(count == 2 && i < arr.length){
				System.out.println("Third Largest Value of Array : " + arr[i]);
				return;
			}
		}
		System.out.println("Third Largest Value of Array does not exist");
	}		
	public static void main(String[] args){
		int arr[] = {9, 3, 91, 25, 87};
		printArray(arr);
		thirdLargestArrayValue(arr);
	}
}`
            }
        },
        {
            "id": 144,
            "description": "Program to find the 2nd largest number in an array",
            "difficulty": "medium",
            "topic": 16,
            "sample_input": null,
            "sample_output": `Value at 1 position : 9
Value at 2 position : 3
Value at 3 position : 91
Value at 4 position : 25
Value at 5 position : 87
Second Largest Value of Array : 87`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to find the second largest number in an array.",
                "code": `class Main{
	static void printArray(int arr[]){
		for(int i = 0; i < arr.length; i++){
			System.out.println("Value at " + (i+1) + " position : " + arr[i]);
		}
	}
	static void sortArray(int arr[]){
		for(int i = 0; i < arr.length; i++){
			for(int j = 0; j < (arr.length-i-1); j++){
				if(arr[j] < arr[j+1]){
					int temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp;
				}
			}
		}
	}

	static void secondLargestArrayValue(int arr[]){
		sortArray(arr);
		int count = 0;

		for(int i = 1; i < arr.length; i++){
			while(i < arr.length && arr[i-1] == arr[i]){
				i++;
			}
			count++;
			if(count == 1 && i < arr.length){
				System.out.println("Second Largest Value of Array : " + arr[i]);
				return;
			}
		}
		System.out.println("Second Largest Value of Array does not exist");
	}		
	public static void main(String[] args){
		int arr[] = {9, 3, 91, 25, 87};
		printArray(arr);
		secondLargestArrayValue(arr);
	}
}`
            }
        },
        {
            "id": 145,
            "description": "Program to find the largest number in an array",
            "difficulty": "easy",
            "topic": 16,
            "sample_input": null,
            "sample_output": `Value at 1 position : 83
Value at 2 position : 49
Value at 3 position : 289
Value at 4 position : 27
Value at 5 position : 23
Value at 6 position : 592

Maximum value of array :592`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to find the largest number in an array.",
                "code": `class Main{
	static void printArray(int arr[]){
		for(int i = 0; i < arr.length; i++){
			System.out.println("Value at " + (i+1) + " position : " + arr[i]);
		}
	}
	static int arrayMax(int arr[]){
		int max = 0;
		for(int i = 1; i < arr.length; i++){
			if(arr[max] < arr[i])
				max = i;
		}
		return arr[max];
	}

	public static void main(String[] args){
		int arr[] = {83, 49, 289, 27, 23, 592};
		printArray(arr);
		System.out.println("\\nMaximum value of array :" + arrayMax(arr));
	}
}`
            }
        },
        {
            "id": 146,
            "description": "Program to find the 2nd smallest number in an array",
            "difficulty": "medium",
            "topic": 16,
            "sample_input": null,
            "sample_output": `Value at 1 position : 9
Value at 2 position : 3
Value at 3 position : 91
Value at 4 position : 25
Value at 5 position : 87
Second Smallest Value of Array : 9`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to find the second smallest number in an array.",
                "code": `class Main{
	static void printArray(int arr[]){
		for(int i = 0; i < arr.length; i++){
			System.out.println("Value at " + (i+1) + " position : " + arr[i]);
		}
	}
	static void sortArray(int arr[]){
		for(int i = 0; i < arr.length; i++){
			for(int j = 0; j < (arr.length-i-1); j++){
				if(arr[j] > arr[j+1]){
					int temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp;
				}
			}
		}
	}

	static void secondSmallestArrayValue(int arr[]){
		sortArray(arr);
		int count = 0;

		for(int i = 1; i < arr.length; i++){
			while(i < arr.length && arr[i-1] == arr[i]){
				i++;
			}
			count++;
			if(count == 1 && i < arr.length){
				System.out.println("Second Smallest Value of Array : " + arr[i]);
				return;
			}
		}
		System.out.println("Second Smallest Value of Array does not exist");
	}		
	public static void main(String[] args){
		int arr[] = {9, 3, 91, 25, 87};
		printArray(arr);
		secondSmallestArrayValue(arr);
	}
}`
            }
        },
        {
            "id": 147,
            "description": "Program to find the smallest number in an array",
            "difficulty": "easy",
            "topic": 16,
            "sample_input": null,
            "sample_output": `Value at 1 position : 83
Value at 2 position : 49
Value at 3 position : 289
Value at 4 position : 27
Value at 5 position : 23

Minimum value of array :23`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to find the smallest number in an array.",
                "code": `class Main{
	static void printArray(int arr[]){
		for(int i = 0; i < arr.length; i++){
			System.out.println("Value at " + (i+1) + " position : " + arr[i]);
		}
	}
	static int arrayMin(int arr[]){
		int min = 0;
		for(int i = 1; i < arr.length; i++){
			if(arr[min] > arr[i])
				min = i;
		}
		return arr[min];
	}

	public static void main(String[] args){
		int arr[] = {83, 49, 289, 27, 23};
		printArray(arr);
		System.out.println("\\nMinimum value of array :" + arrayMin(arr));
	}
}`
            }
        },
        {
            "id": 148,
            "description": "Program to remove duplicate elements in an array",
            "difficulty": "medium",
            "topic": 16,
            "sample_input": null,
            "sample_output": `Value at 1 position : 6
Value at 2 position : 2
Value at 3 position : 9
Value at 4 position : 3
Value at 5 position : 6
Value at 6 position : 2
Value at 7 position : 3
Value at 8 position : 6
New Array :
Value at 1 position : 6
Value at 2 position : 2
Value at 3 position : 9
Value at 4 position : 3`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to remove duplicate elements from an array.",
                "code": `class Main{
	static void printArray(int arr[]){
		for(int i = 0; i < arr.length; i++){
			System.out.println("Value at " + (i+1) + " position : " + arr[i]);
		}
	}

	static int[] removeDuplicateElements(int arr[]){
		int newarr[] = null;
		java.util.ArrayList<Integer> uniquearr = new java.util.ArrayList<>();

		for(int i = 0; i < arr.length; i++){
			if(!uniquearr.contains(arr[i])){
				uniquearr.add(arr[i]);
			}
		}
		newarr = new int[uniquearr.size()];
		for(int i = 0; i < uniquearr.size(); i++){
			newarr[i] = uniquearr.get(i);
		}
		return newarr;
	}
	
	public static void main(String args[]){
		int arr[] = {6,2,9,3,6,2,3,6};
		printArray(arr);
		arr = removeDuplicateElements(arr);
		System.out.println("New Array : ");
		printArray(arr);
	}
}`
            }
        },
        {
            "id": 149,
            "description": "Program to print odd and even numbers from an array",
            "difficulty": "easy",
            "topic": 16,
            "sample_input": null,
            "sample_output": `Value at 1 position : 83
Value at 2 position : 42
Value at 3 position : 28
Value at 4 position : 27
Value at 5 position : 23
Odd Values of array :
Value at 1 position : 83
Value at 4 position : 27
Value at 5 position : 23
Even Values of array :
Value at 2 position : 42
Value at 3 position : 28`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to separate and print the odd and even numbers from an array.",
                "code": `class Main{
	static void printOddFromArray(int arr[]){
		System.out.println("Odd Values of array : ");
		for(int i = 0; i < arr.length; i++){
			if(arr[i] % 2 != 0)
				System.out.println("Value at " + (i+1) + " position : " + arr[i]);
		}
	}
	static void printEvenFromArray(int arr[]){
		System.out.println("Even Values of array : ");
		for(int i = 0; i < arr.length; i++){
			if(arr[i] % 2 == 0)
				System.out.println("Value at " + (i+1) + " position : " + arr[i]);
		}
	}
	static void printArray(int arr[]){
		for(int i = 0; i < arr.length; i++){
			System.out.println("Value at " + (i+1) + " position : " + arr[i]);
		}
	}

	public static void main(String[] args){
		int arr[] = {83, 42, 28, 27, 23};
		printArray(arr);
		printOddFromArray(arr);
		printEvenFromArray(arr);
	}
}`
            }
        },
        {
            "id": 150,
            "description": "How to sort an array in Java",
            "difficulty": "easy",
            "topic": 16,
            "sample_input": null,
            "sample_output": `Value at 1 position : 83
Value at 2 position : 49
Value at 3 position : 289
Value at 4 position : 27
Value at 5 position : 23

After Sorting in Ascending order :
Value at 1 position : 23
Value at 2 position : 27
Value at 3 position : 49
Value at 4 position : 83
Value at 5 position : 289`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to sort an array using Java's built-in sorting method or a custom sorting algorithm.",
                "code": `class Main{
	static void printArray(int arr[]){
		for(int i = 0; i < arr.length; i++){
			System.out.println("Value at " + (i+1) + " position : " + arr[i]);
		}
	}
	static void sortArray(int arr[]){
		for(int i = 0; i < arr.length; i++){
			for(int j = 0; j < (arr.length-i-1); j++){
				if(arr[j] > arr[j+1]){
					int temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp;
				}
			}
		}
	}		
	public static void main(String[] args){
		int arr[] = {83, 49, 289, 27, 23};
		printArray(arr);
		sortArray(arr);
		System.out.println("\\nAfter Sorting in Ascending order : ");
		printArray(arr);
	}
}`
            }
        },
        // Strings
        {
            "id": 151,
            "description": "Program to check if a String contains only digits",
            "difficulty": "easy",
            "topic": 17,
            "sample_input": null,
            "sample_output": `String Value : 389294
String Contain Only Digits
String Value : 393aje
String Does not have digits only`,
            "solution": {
                "language": "Java",
                "explanation": "This program checks if the input string contains only numeric digits.",
                "code": `class Main{
	static boolean hasDigitsOnly(String str){
		for(int i = 0; i < str.length(); i++){
			char ch = str.charAt(i);
			if(ch < '0' || ch > '9'){
				return false;
			}
		}
		return true;
	}
	public static void main(String[] args){
		System.out.println("String Value : 389294");
		System.out.println((hasDigitsOnly("389294")) ? "String Contain Only Digits" : "String Does not have digits only");

		System.out.println("String Value : 393aje");
		System.out.println((hasDigitsOnly("393aje")) ? "String Contain Only Digits" : "String Does not have digits only");
	}
}`
            }
        },
        {
            "id": 152,
            "description": "Program to perform deep copy for String",
            "difficulty": "medium",
            "topic": 17,
            "sample_input": null,
            "sample_output": `Orignal String : Hello Everyone
Copied String : Hello Everyone`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to perform a deep copy of a String in Java.",
                "code": `class Main{
	static String strDeepCopy(String str){
		String newstr = "";
		for(int i = 0; i < str.length(); i++){
			newstr += str.charAt(i);
		}
		return newstr;
	}
	public static void main(String[] args){
		String str = "Hello Everyone";
		String cpystr = strDeepCopy(str);
		System.out.println("Orignal String : " + str);
		System.out.println("Copied String : " + cpystr);
	}
}`
            }
        },
        {
            "id": 153,
            "description": "Program to prove String is immutable programmatically",
            "difficulty": "easy",
            "topic": 17,
            "sample_input": null,
            "sample_output": `Both object are different i.e Immutable Objects`,
            "solution": {
                "language": "Java",
                "explanation": "This program proves the immutability of the String class in Java by showing that once created, a String object cannot be changed.",
                "code": `class Main{
	public static void main(String[] args){
		String str = "Hello";
		String strN = str + " World";
		if(str == strN){
			System.out.println("Both object are same i.e Mutable Objects");
		}
		else{
			System.out.println("Both object are different i.e Immutable Objects");
		}
	}
}`
            }
        },
        {
            "id": 154,
            "description": "Program to remove all occurrences of a given character from input String",
            "difficulty": "easy",
            "topic": 17,
            "sample_input": null,
            "sample_output": `Removing p from apple
ale`,
            "solution": {
                "language": "Java",
                "explanation": "This program removes all instances of a specific character from the input String.",
                "code": `class Main{
	static String removeChar(String str, char ch){
		String newstr = "";
		char c;
		for(int i = 0; i < str.length(); i++){
			c = str.charAt(i);
			if(c != ch){
				newstr += c;
			}
		}
		return newstr;
	}
	public static void main(String[] args){
		System.out.println("Removing p from apple");
		System.out.println(removeChar("apple", 'p'));
	}
}`
            }
        },
        {
            "id": 155,
            "description": "Program to append the string using StringBuffer class",
            "difficulty": "easy",
            "topic": 17,
            "sample_input": null,
            "sample_output": `String Value : Hello
After Appending String : Hello World. Number : 47`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to append a string using the StringBuffer class.",
                "code": `class Main{
	public static void main(String[] args){
		StringBuffer str = new StringBuffer("Hello");
		System.out.println("String Value : " + str);
		str.append(" World. Number : ");
		str.append(47);
		System.out.println("After Appending String : " + str);
	}
}`
            }
        },
        {
            "id": 156,
            "description": "Program to insert the string using StringBuffer class",
            "difficulty": "easy",
            "topic": 17,
            "sample_input": null,
            "sample_output": `Initial String : I am
After Inserting String : Hello I am 20`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to insert a string using the StringBuffer class.",
                "code": `class Main{
	public static void main(String[] args){
		StringBuffer str = new StringBuffer("I am ");
		System.out.println("Initial String : " + str);
		str.insert(0, "Hello ");
		str.insert(11, 20);
		System.out.println("After Inserting String : " + str);
	}
}`
            }
        },
        {
            "id": 157,
            "description": "Program to add characters to a string",
            "difficulty": "easy",
            "topic": 17,
            "sample_input": null,
            "sample_output": `String : hell
Adding o at 4th index : hello
Adding J at 0th index : Jhell
Adding f at 2th index : hefll`,
            "solution": {
                "language": "Java",
                "explanation": "This program shows how to add characters to an existing string.",
                "code": `class Main{
	static String addChar(int index, char ch, String str){
		String newstr = "";
		int i;
		if(index > str.length() || index < 0){	
			System.out.println("Maximum index should be "+str.length()+" and minimum should be 0");
			return null;
		}
		for(i = 0; i < index; i++){
			newstr += str.charAt(i);
		}
		newstr += ch;
		for(i = index; i < str.length(); i++){
			newstr+= str.charAt(i);
		}
		return newstr;
	}
	public static void main(String[] args){
		String str = "hell";
		System.out.println("String : " + str);
		System.out.println("Adding o at 4th index : " + addChar(4, 'o', str));
		System.out.println("Adding J at 0th index : " + addChar(0, 'J', str));
		System.out.println("Adding f at 2th index : " + addChar(2, 'f', str));
	}
}`
            }
        },
        {
            "id": 158,
            "description": "Program to check Anagram",
            "difficulty": "medium",
            "topic": 17,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program checks whether two input strings are anagrams of each other.",
                "code": null
            }
        },
        {
            "id": 159,
            "description": "Program to check whether a string is a Palindrome",
            "difficulty": "easy",
            "topic": 17,
            "sample_input": null,
            "sample_output": `abc11cba is pallindrome
39d is not pallindrome`,
            "solution": {
                "language": "Java",
                "explanation": "This program checks if a given string is a palindrome.",
                "code": `class Main{
	static boolean isPallindrome(String str){
		for(int i = 0, j = (str.length()-1); i < j; i++, j--){
			if(str.charAt(i) != str.charAt(j)){
				return false;
			}
		}
		return true;
	}
	public static void main(String[] args){
		System.out.println((isPallindrome("abc11cba")) ? "abc11cba is pallindrome" : "abc11cba is not pallindrome");
		System.out.println((isPallindrome("39d")) ? "39d is pallindrome" : "39d is not pallindrome");
	}
}`
            }
        },
        {
            "id": 160,
            "description": "Program to convert Enum to String",
            "difficulty": "easy",
            "topic": 17,
            "sample_input": null,
            "sample_output": `Sunday Monday Tuesday Wednesday Thursday Friday Saturday`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to convert an Enum to a String in Java.",
                "code": `class Main{
	enum Days {Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday}

	public static void main(String[] args){
		String str = "";
		for(Days d : Days.values()){
			str += (d+" "); 
		}
		System.out.println(str);
	}
}`
            }
        },
        {
            "id": 161,
            "description": "Program to convert String to String Array",
            "difficulty": "easy",
            "topic": 17,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to convert a String to a String Array.",
                "code": null
            }
        },
        {
            "id": 162,
            "description": "Program to count number of words in a String",
            "difficulty": "easy",
            "topic": 17,
            "sample_input": null,
            "sample_output": `Number of words in string is : 5`,
            "solution": {
                "language": "Java",
                "explanation": "This program counts the number of words present in a given String.",
                "code": `class Main{
	static int wordCount(String str){	
		int count = 0, len = str.length();
		
		for(int i = 0; i < len; i++){
			if(Character.isDigit(str.charAt(i))){
				while(str.charAt(i) != ' ' && (i+1) != len){
					i++;
				}
			}
			else{
				if((str.charAt(i) == ' ' || (i+1) == len) && Character.isLetter(str.charAt(i-1))){
				count++;
			}
			}
			
		}
		return count;
	}

	public static void main(String[] args){
		int count = wordCount("Java is a Programming Language");
		System.out.println("Number of words in string is : " + count);
	}
}`
            }
        },
        {
            "id": 163,
            "description": "Program to count the total number of characters in a string",
            "difficulty": "easy",
            "topic": 17,
            "sample_input": null,
            "sample_output": `Number of Character in Hello World : 11`,
            "solution": {
                "language": "Java",
                "explanation": "This program counts the total number of characters in a String, including spaces.",
                "code": `class Main{
	public static void main(String[] args){
		String str = "Hello World";
		System.out.println("Number of Character in " + str + " : " + str.length());
	}
}`
            }
        },
        {
            "id": 164,
            "description": "Program to count the total number of punctuation characters exists in a String",
            "difficulty": "medium",
            "topic": 17,
            "sample_input": null,
            "sample_output": `Number of Punctuations in string is : 3`,
            "solution": {
                "language": "Java",
                "explanation": "This program counts the total number of punctuation marks present in a given String.",
                "code": `class Main{
	static int countPunctuation(String str){	
		int count = 0, len = str.length();
		
		for(int i = 0; i < len; i++){
			char ch = str.charAt(i);
			if(ch == '!' || ch == ',' || ch == '.' || ch == '?' || ch == '!' || ch == ':' || ch == ';' || ch == '\'' || ch == '"' || ch == '-'){
				count++;
			}			
		}
		return count;
	}

	public static void main(String[] args){
		int count = countPunctuation("Oh ! I love you. Uhh-hh");
		System.out.println("Number of Punctuations in string is : " + count);
	}
}`
            }
        },
        {
            "id": 165,
            "description": "Program to count the total number of vowels and consonants in a string",
            "difficulty": "medium",
            "topic": 17,
            "sample_input": null,
            "sample_output": `Number of Vowels : 3
Number of Consonents : 7`,
            "solution": {
                "language": "Java",
                "explanation": "This program counts the total number of vowels and consonants present in a String.",
                "code": `class Main{
	public static void main(String[] args){
		String str = "Hello World";
		int vowel = 0, cons = 0;
		for(int i = 0; i < str.length(); i++){
			char ch = str.charAt(i);
			if(Character.isLetter(ch)){
				switch(ch){
					case 'a' :
					case 'A' :
					case 'e' :
					case 'E' :
					case 'i' :
					case 'I' :
					case 'o' :
					case 'O' :
					case 'u' :
					case 'U' : vowel++; break;
					default : cons++;
				}
			}
		}
		System.out.println("Number of Vowels : " + vowel);
		System.out.println("Number of Consonents : " + cons);

	}
}`
            }
        },
        {
            "id": 166,
            "description": "Program to determine whether a given string is palindrome",
            "difficulty": "easy",
            "topic": 17,
            "sample_input": null,
            "sample_output": `abc11cba is pallindrome
39d is not pallindrome`,
            "solution": {
                "language": "Java",
                "explanation": "This program checks if the input string is a palindrome by comparing characters from both ends.",
                "code": `class Main{
	static boolean isPallindrome(String str){
		for(int i = 0, j = (str.length()-1); i < j; i++, j--){
			if(str.charAt(i) != str.charAt(j)){
				return false;
			}
		}
		return true;
	}
	public static void main(String[] args){
		System.out.println((isPallindrome("abc11cba")) ? "abc11cba is pallindrome" : "abc11cba is not pallindrome");
		System.out.println((isPallindrome("39d")) ? "39d is pallindrome" : "39d is not pallindrome");
	}
}`
            }
        },
        {
            "id": 167,
            "description": "Program to determine whether one string is a rotation of another",
            "difficulty": "medium",
            "topic": 17,
            "sample_input": null,
            "sample_output": `String is rotated`,
            "solution": {
                "language": "Java",
                "explanation": "This program determines if one string is a rotation of another string.",
                "code": `class Main{
	static boolean isRotation(String s1, String s2){
		int count = 0;
		if(s1.length() != s2.length()){
			return false;
		}
		String temp = s1+s1;
		for(int i = 0; i < (temp.length() - s2.length() + 1); i++){
			count = 0;
			while(count < s2.length() && temp.charAt(i) == s2.charAt(count)){
				count++;
				i++;
			}
			if(count == s2.length()){
				return true;
			}
		}
		return false;
	}
	public static void main(String[] args){
		System.out.println((isRotation("ABCD", "DABC")) ? "String is rotated" : "String is not rotated");
	}
}
`
            }
        },
        {
            "id": 168,
            "description": "Program to divide a string in 'N' equal parts",
            "difficulty": "medium",
            "topic": 17,
            "sample_input": null,
            "sample_output": `Parts of String are :
Part No 1 : HelloW
Part No 2 : orld12`,
            "solution": {
                "language": "Java",
                "explanation": "This program divides a string into N equal parts and prints each part.",
                "code": `class Main{
	static String[] strBreak(String str, int n){
		String st[] = new String[n];
		if(n < 1 || (str.length()%n) != 0){
			System.out.println("Partition Unavailable");
			return null;
		}
		for(int i = 0, k = 0; i < (str.length() - (str.length()/n) +1); k++){
			st[k] = "";
			for(int j = 0; j < (str.length()/n); j++){
				st[k] += str.charAt(i);
				i++;
			}
		}
		return st;
	}
	
	public static void main(String[] args){
		String[] st = strBreak("HelloWorld12", 2);
		if(st != null){
			System.out.println("Parts of String are : ");

			for(int i = 0; i < st.length; i++){
				System.out.println("Part No " + (i+1) + " : " + st[i]);
			}
		}
	}
}`
            }
        },
        {
            "id": 169,
            "description": "Program to find all subsets of a string",
            "difficulty": "medium",
            "topic": 17,
            "sample_input": null,
            "sample_output": `a
b
ab
c
ac
bc
abc
d
ad
bd
abd
cd
acd
bcd
abcd`,
            "solution": {
                "language": "Java",
                "explanation": "This program finds and prints all subsets of a given string.",
                "code": `class Main {
    static void generateSubsets(String str) {
        int n = str.length();
        int subsetCount = (int) Math.pow(2, n);

        for (int i = 0; i < subsetCount; i++) {
            String subset = "";
            for (int j = 0; j < n; j++) {
                if ((i / (int) Math.pow(2, j)) % 2 == 1) {
                    subset += str.charAt(j);
                }
            }
            System.out.println(subset);
        }
    }
    public static void main(String[] args) {
        String inputString = "abcd";
        generateSubsets(inputString);
    }
}
`
            }
        },
        {
            "id": 170,
            "description": "Program to find all the permutations of a string",
            "difficulty": "hard",
            "topic": 17,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program finds and prints all permutations of a given string.",
                "code": null
            }
        },
        {
            "id": 171,
            "description": "Program to find maximum and minimum occurring character in a string",
            "difficulty": "medium",
            "topic": 17,
            "sample_input": null,
            "sample_output": `Maximum Occuring Character : a
Number of timesaOccurs : 6
Minimum Occuring Character : b
Number of timesbOccurs : 1`,
            "solution": {
                "language": "Java",
                "explanation": "This program finds the character that appears the most and the least in a given string.",
                "code": `class Main{
	static Boolean containsChar(String str, char ch){
		for(int i = 0; i < str.length(); i++){
			if(str.charAt(i) == ch)
				return true;
		}
		return false;
	}
	static void maxAndMinChar(String str){
		String uniquechars = "";
		for(int i = 0; i < str.length(); i++){
			if(!containsChar(uniquechars, str.charAt(i))){
				uniquechars += str.charAt(i);
			}
		}

		int freq[] = new int[uniquechars.length()];

		for(int i = 0; i < str.length(); i++){
			freq[uniquechars.indexOf(str.charAt(i))]++;
		}
		int maxInd = 0;
		int minInd = 0;
		for(int i = 1; i < freq.length; i++){
			if(freq[maxInd] < freq[i]){
				maxInd = i;
			}
			if(freq[minInd] > freq[i]){
				minInd = i;
			}
		}
		System.out.println("Maximum Occuring Character : "+uniquechars.charAt(maxInd));
		System.out.println("Number of times" + uniquechars.charAt(maxInd) +  "Occurs : "+freq[maxInd]);
		System.out.println("Minimum Occuring Character : "+uniquechars.charAt(minInd));
System.out.println("Number of times" + uniquechars.charAt(minInd) +  "Occurs : "+freq[minInd]);
	}
	public static void main(String[] args){
		maxAndMinChar("aaabdhiaaiiahhdhh");
	}
}`
            }
        },
        {
            "id": 172,
            "description": "Program to find reverse of the string",
            "difficulty": "easy",
            "topic": 17,
            "sample_input": null,
            "sample_output": `olleH`,
            "solution": {
                "language": "Java",
                "explanation": "This program reverses the input string and prints the result.",
                "code": `class Main{
	static String strReverse(String str){
		String revstr = "";

		for(int i = (str.length()-1); i >= 0; i--){
			revstr += str.charAt(i);
		}
		return revstr;
	}
	public static void main(String[] args){
		System.out.println(strReverse("Hello"));
	}
}`
            }
        },
        {
            "id": 173,
            "description": "Program to find the duplicate characters in a string",
            "difficulty": "medium",
            "topic": 17,
            "sample_input": null,
            "sample_output": `Duplicate Characters
a
b
d
e`,
            "solution": {
                "language": "Java",
                "explanation": "This program identifies and prints all duplicate characters found in a given string.",
                "code": `class Main{
	static char[] duplicates(String str){
		String all = "";
		String duplicates = "";
		for(int i = 0; i < str.length(); i++){
			if(all.indexOf(str.charAt(i)) != -1 && !(duplicates.indexOf(str.charAt(i)) != -1)){
				duplicates += str.charAt(i);
			}
			else if(!(all.indexOf(str.charAt(i)) != -1)){
				all += str.charAt(i);
			}
		}
		return (duplicates.toCharArray());
		
}
	public static void main(String[] args){
		char[] ch = duplicates("aaabeabcdde");
		System.out.println("Duplicate Characters");
		for(int i = 0; i < ch.length; i++){
			System.out.println(ch[i]);
		}
	}
}`
            }
        },
        {
            "id": 174,
            "description": "Program to find the duplicate words in a string",
            "difficulty": "medium",
            "topic": 17,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program identifies and prints all duplicate words found in a given string.",
                "code": null
            }
        },
        {
            "id": 175,
            "description": "Program to find the frequency of characters",
            "difficulty": "easy",
            "topic": 17,
            "sample_input": null,
            "sample_output": `Character : a Frequency : 6
Character : b Frequency : 1
Character : d Frequency : 2
Character : h Frequency : 5
Character : i Frequency : 3`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates and prints the frequency of each character in a string.",
                "code": `class Main{
	static Boolean containsChar(String str, char ch){
		for(int i = 0; i < str.length(); i++){
			if(str.charAt(i) == ch)
				return true;
		}
		return false;
	}
	static void charFrequency(String str){
		String uniquechars = "";
		for(int i = 0; i < str.length(); i++){
			if(!containsChar(uniquechars, str.charAt(i))){
				uniquechars += str.charAt(i);
			}
		}

		int freq[] = new int[uniquechars.length()];

		for(int i = 0; i < str.length(); i++){
			freq[uniquechars.indexOf(str.charAt(i))]++;
		}
		for(int i = 0; i < freq.length; i++){
			System.out.println("Character : " + uniquechars.charAt(i) + " Frequency : " + freq[i]);
		}

	}
	public static void main(String[] args){
		charFrequency("aaabdhiaaiiahhdhh");
	}
}`
            }
        },
        {
            "id": 176,
            "description": "Program to find the largest and smallest word in a string",
            "difficulty": "medium",
            "topic": 17,
            "sample_input": null,
            "sample_output": `Given String : Hello I am a Abhishek Dhawan
Largest Word in String : Abhishek
Smallest Word in String : I`,
            "solution": {
                "language": "Java",
                "explanation": "This program finds and prints the largest and smallest word in a given string.",
                "code": `class Main{
	static void maxAndMinWord(String str){
		String maxword = "";
		String minword = "";
		String curword = "";

		for(int i = 0; i < str.length(); i++){
			curword = "";
			while(i < str.length() && str.charAt(i) != ' '){
				curword += str.charAt(i);
				i++;
			}

			if(minword.length() > curword.length() || minword.length() == 0){
				minword = curword;
			}
			if(curword.length() > maxword.length()){
				maxword = curword;
			}
			
		}
		System.out.println("Given String : " + str);
		System.out.println("Largest Word in String : " + maxword);
		System.out.println("Smallest Word in String : " + minword);

	}
	public static void main(String[] args){
		maxAndMinWord("Hello I am a Abhishek Dhawan");
	}
}`
            }
        },
        {
            "id": 177,
            "description": "Program to find the longest repeating sequence in a string",
            "difficulty": "hard",
            "topic": 17,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program identifies the longest repeating sequence in a string and prints it.",
                "code": null
            }
        },
        {
            "id": 178,
            "description": "Program to find the most repeated word in a text file",
            "difficulty": "hard",
            "topic": 17,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program reads a text file and finds the most repeated word.",
                "code": null
            }
        },
        {
            "id": 179,
            "description": "Program to find the number of the words in the given text file",
            "difficulty": "medium",
            "topic": 17,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program reads a text file and counts the number of words in it.",
                "code": null
            }
        },
        {
            "id": 180,
            "description": "Program to get a character from the given string",
            "difficulty": "easy",
            "topic": 17,
            "sample_input": null,
            "sample_output": `Character at 4th index : o`,
            "solution": {
                "language": "Java",
                "explanation": "This program retrieves and prints a character from a given string at a specific index.",
                "code": `class Main{
	static char getChar(String str, int index){
		return str.charAt(index);
	}
	public static void main(String[] args){
		System.out.println("Character at 4th index : " + getChar("Hello World", 4));
	}
}`
            }
        },
        {
            "id": 181,
            "description": "Program to insert a string into another string",
            "difficulty": "medium",
            "topic": 17,
            "sample_input": null,
            "sample_output": `Hello`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to insert one string into another at a specified position.",
                "code": `class Main{
	static String insertString(String str, String str2, int index){
		String newstr = "";
		if(index < 0 || index > str.length()){
			return null;
		}
		for(int i = 0; i < index; i++){
			newstr += str.charAt(i);
		}
		for(int i = 0; i < str2.length(); i++){
			newstr += str2.charAt(i);
		}
		for(int i = index; i < str.length(); i++){
			newstr += str.charAt(i);
		}
		return newstr;
	}
	public static void main(String[] args){
		System.out.println(insertString("Heo", "ll", 2));
	}
}`
            }
        },
        {
            "id": 182,
            "description": "Program to iterate over characters in a string",
            "difficulty": "easy",
            "topic": 17,
            "sample_input": null,
            "sample_output": `Character At 0th index : H
Character At 1th index : e
Character At 2th index : l
Character At 3th index : l
Character At 4th index : o
Character At 5th index :
Character At 6th index : W
Character At 7th index : o
Character At 8th index : r
Character At 9th index : l
Character At 10th index : d`,
            "solution": {
                "language": "Java",
                "explanation": "This program iterates through each character in a string and prints them.",
                "code": `class Main{
	public static void main(String[] args){
		String str = "Hello World";

		for(int i = 0; i < str.length(); i++){
			System.out.println("Character At " + i +"th index : " + str.charAt(i));
		}
	}
}`
            }
        },
        {
            "id": 183,
            "description": "Program to print a new line in a string",
            "difficulty": "easy",
            "topic": 17,
            "sample_input": null,
            "sample_output": `Hello I am
Line Break`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to include new lines within a string and print it.",
                "code": `class Main{
	public static void main(String[] args){
		String str = "Hello I am \\nLine Break";
		System.out.println(str);
	}
}`
            }
        },
        {
            "id": 184,
            "description": "Program to print even length words",
            "difficulty": "medium",
            "topic": 17,
            "sample_input": null,
            "sample_output": `Entered String : Hello I am a Abhishek Dhawan
Even Length words in string :
am
Abhishek
Dhawan`,
            "solution": {
                "language": "Java",
                "explanation": "This program prints words from a string that have an even length.",
                "code": `class Main{
	static void evenLengthWords(String str){
		System.out.println("Entered String : " + str);
		String curword = "";
		System.out.println("Even Length words in string : ");
		for(int i = 0; i < str.length(); i++){
			curword = "";
			while(i < str.length() && str.charAt(i) != ' '){
				curword += str.charAt(i);
				i++;
			}

			if(curword.length() % 2 == 0){
				System.out.println(curword);
			}
			
		}

	}
	public static void main(String[] args){
		evenLengthWords("Hello I am a Abhishek Dhawan");
	}
}`
            }
        },
        {
            "id": 185,
            "description": "Program to print smallest and biggest possible palindrome word in a given string",
            "difficulty": "hard",
            "topic": 17,
            "sample_input": null,
            "sample_output": `Given String : abba mobile no 123454321
Largest Pallindrome Word in String : 123454321
Smallest Pallindrome Word in String : abba
Given String : Hello world
No Pallindrome word found`,
            "solution": {
                "language": "Java",
                "explanation": "This program finds and prints the smallest and largest palindrome words from a given string.",
                "code": `class Main{
	static boolean isPallindrome(String str){
		for(int i = 0, j = (str.length()-1); i < j; i++, j--){
			if(str.charAt(i) != str.charAt(j)){
				return false;
			}
		}
		return true;
	}

	static void maxAndMinPallindrome(String str){
		String maxword = "";
		String minword = "";
		String curword = "";

		for(int i = 0; i < str.length(); i++){
			curword = "";
			while(i < str.length() && str.charAt(i) != ' '){
				curword += str.charAt(i);
				i++;
			}

			if((minword.length() > curword.length() || minword.length() == 0) && isPallindrome(curword)){
				minword = curword;
			}
			if(curword.length() > maxword.length() && isPallindrome(curword)){
				maxword = curword;
			}
			
		}
		System.out.println("Given String : " + str);
		if(maxword.length() == 0){
			System.out.println("No Pallindrome word found");
			return;
		}
		System.out.println("Largest Pallindrome Word in String : " + maxword);
		System.out.println("Smallest Pallindrome Word in String : " + minword);
	}
	public static void main(String[] args){
		maxAndMinPallindrome("abba mobile no 123454321");
		maxAndMinPallindrome("Hello world");
	}
}`
            }
        },
        {
            "id": 186,
            "description": "Program to remove all the white spaces from a string",
            "difficulty": "easy",
            "topic": 17,
            "sample_input": null,
            "sample_output": `HelloWorldIamAbhishek`,
            "solution": {
                "language": "Java",
                "explanation": "This program removes all whitespace characters from a string and prints the result.",
                "code": `class Main{
	static String trimSpaces(String str){
		String newstr = "";
		for(int i = 0; i < str.length(); i++){
			if(str.charAt(i) != ' '){
				newstr += str.charAt(i);
			}
		}
		return newstr;
	}
	public static void main(String[] args){
		System.out.println(trimSpaces("Hello World I am Abhishek"));
	}
}`
            }
        },
        {
            "id": 187,
            "description": "Program to replace lower-case characters with upper-case and vice-versa",
            "difficulty": "easy",
            "topic": 17,
            "sample_input": null,
            "sample_output": `hELLO i AM aBHISHEK`,
            "solution": {
                "language": "Java",
                "explanation": "This program replaces all lowercase characters in a string with uppercase ones, and vice versa.",
                "code": `class Main{
	static String changeCase(String str){
		String newstr = "";
		for(int i = 0; i < str.length(); i++){
			if(str.charAt(i) >= 'a' && str.charAt(i) <= 'z'){
				newstr += (char)(str.charAt(i)-32);
			}
			else if(str.charAt(i) >= 'A' && str.charAt(i) <= 'Z'){
				newstr += (char)(str.charAt(i)+32);
			}
            else{
                newstr += str.charAt(i);
            }
		}
		return newstr;
	}
	public static void main(String[] args){
		System.out.println(changeCase("Hello I am Abhishek"));
	}
}`
            }
        },
        {
            "id": 188,
            "description": "Program to replace the spaces of a string with a specific character",
            "difficulty": "easy",
            "topic": 17,
            "sample_input": null,
            "sample_output": `Hello*World*I*am*Abhishek**`,
            "solution": {
                "language": "Java",
                "explanation": "This program replaces all spaces in a string with a specified character.",
                "code": `class Main{
	static String replaceSpaces(String str, char ch){
		String newstr = "";
		for(int i = 0; i < str.length(); i++){
			if(str.charAt(i) == ' '){
				newstr += ch;
			}
			else{
				newstr += str.charAt(i);
			}
		}
		return newstr;
	}
	public static void main(String[] args){
		System.out.println(replaceSpaces("Hello World I am Abhishek  ", '*'));
	}
}`
            }
        },
        {
            "id": 189,
            "description": "Program to separate the individual characters from a string",
            "difficulty": "easy",
            "topic": 17,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program separates each character in a string and prints them individually.",
                "code": null
            }
        },
        {
            "id": 190,
            "description": "Program to split a string into a number of sub-strings",
            "difficulty": "easy",
            "topic": 17,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program splits a string into multiple sub-strings based on a delimiter.",
                "code": null
            }
        },
        {
            "id": 191,
            "description": "Program to swap two string variables without using a third or temp variable",
            "difficulty": "medium",
            "topic": 17,
            "sample_input": null,
            "sample_output": `Before Swap
String 1 : Hello String 2 : World
After Swap
String 1 : World String 2 : Hello`,
            "solution": {
                "language": "Java",
                "explanation": "This program swaps two string variables without the use of a temporary variable.",
                "code": `class Main{
	public static void main(String[] args){
		String st1 = "Hello", st2 = "World";
		System.out.println("Before Swap\\nString 1 : " + st1 + " String 2 : " + st2);
		st1 += st2;
		st2 = st1.substring(0, st1.length() - st2.length());
		st1 = st1.substring(st2.length());
		System.out.println("After Swap\\nString 1 : " + st1 + " String 2 : " + st2);

	}
}`
            }
        },
        {
            "id": 192,
            "description": "Program to swap pair of characters",
            "difficulty": "medium",
            "topic": 17,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program swaps two specific characters in a string as provided by the user.",
                "code": null
            }
        },
        {
            "id": 193,
            "description": "Read two string inputs from the user and check if the first contains the second",
            "difficulty": "easy",
            "topic": 17,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program reads two strings and checks if the first string contains the second.",
                "code": null
            }
        },
        {
            "id": 194,
            "description": "Reverse a string without using the reverse() function",
            "difficulty": "medium",
            "topic": 17,
            "sample_input": null,
            "sample_output": `olleH`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to reverse a string manually without using the built-in reverse() method.",
                "code": `class Main{
	static String strReverse(String str){
		String revstr = "";

		for(int i = (str.length()-1); i >= 0; i--){
			revstr += str.charAt(i);
		}
		return revstr;
	}
	public static void main(String[] args){
		System.out.println(strReverse("Hello"));
	}
}`
            }
        },
        {
            "id": 195,
            "description": "Reverse a string word by word",
            "difficulty": "medium",
            "topic": 17,
            "sample_input": null,
            "sample_output": `olleH dlroW`,
            "solution": {
                "language": "Java",
                "explanation": "This program reverses the words in a given string, keeping the words in reverse order but not reversing the characters in each word.",
                "code": `class Main{
	static String strReverse(String str){
		String revstr = "";

		for(int i = (str.length()-1); i >= 0; i--){
			revstr += str.charAt(i);
		}
		return revstr;
	}
	static String strReverseWords(String str){
		String curword  = "", newstr = "";
		for(int i = 0; i < str.length(); i++){
			curword = "";
			while(i < str.length() && str.charAt(i) != ' '){
				curword += str.charAt(i);
				i++;
			}
			newstr += (strReverse(curword));						if(i < str.length()){
				newstr += ' ';
			}
		}
		return newstr;
	}
	public static void main(String[] args){
		System.out.println(strReverseWords("Hello World"));
	}
}`
            }
        },
        {
            "id": 196,
            "description": "Write a program to check if two strings are created with the same characters",
            "difficulty": "medium",
            "topic": 17,
            "sample_input": null,
            "sample_output": `Different Characters`,
            "solution": {
                "language": "Java",
                "explanation": "This program checks whether two strings are made up of exactly the same characters, regardless of their order.",
                "code": `class Main{
	static boolean haveSameCharacters(String s1, String s2){
		int j = 0;
		for(int i = 0; i < s1.length(); i++){
			for(j = 0; j < s2.length(); j++){
				if(s1.charAt(i) == s2.charAt(j))
					break;
			}
			if(j == s2.length()){
				return false;
			}
		}
		return true;
	}
	public static void main(String[] args){
		System.out.println((haveSameCharacters("abbbccdee", "abcd")) ? "Same Characters" : "Different Characters");
	}
}`
            }
        },
        {
            "id": 197,
            "description": "Write a program to find the first non-repeated character from the input string",
            "difficulty": "hard",
            "topic": 17,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program identifies the first non-repeating character in a given string.",
                "code": null
            }
        },
        {
            "id": 198,
            "description": "Create an object of StringBuffer class to reverse the string",
            "difficulty": "easy",
            "topic": 17,
            "sample_input": null,
            "sample_output": `dlroW olleH`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates the usage of StringBuffer's reverse() method to reverse a string.",
                "code": `class Main{
	public static void main(String[] args){
		String str = "Hello World";
		StringBuffer st = new StringBuffer(str);
		st.reverse();
		str = st.toString();
		System.out.println(str);
	}
}`
            }
        },
        {
            "id": 199,
            "description": "Create an object of StringBuffer class to show functionality of insert, append, delete, and replace functions",
            "difficulty": "easy",
            "topic": 17,
            "sample_input": null,
            "sample_output": `Initial String : Hello World
After Insert function : Hello! World
After Append function : Hello! World I am India.
After Delete function : World I am India.
After Replace function : WoMyd I am India.`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates the usage of StringBuffer's methods like insert(), append(), delete(), and replace() on strings.",
                "code": `class Main{
	public static void main(String[] args){
		StringBuffer str = new StringBuffer("Hello World");
		System.out.println("Initial String : " + str);
		str.insert(5, "!");
		System.out.println("After Insert function : " + str);
		str.append(" I am India.");
		System.out.println("After Append function : " + str);
		str.delete(0, 7);
		System.out.println("After Delete function : " + str);
		str.replace(2, 4, "My");
		System.out.println("After Replace function : " + str);

	}
}`
            }
        },
        // Basic Programming Construct
        {
            "id": 200,
            "description": "Write a Java program to print ‘Hello World!’ on screen",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Hello World!`,
            "solution": {
                "language": "Java",
                "explanation": "This program prints a simple 'Hello World!' message on the screen.",
                "code": `class Main{
	public static void main(String[] args){
		System.out.print("Hello World!");
	}
}`
            }
        },
        {
            "id": 201,
            "description": "Write a Java program to print the sum of two numbers",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Sum of 100.0 and 47883.0 is 47983.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program takes two numbers as input and prints their sum.",
                "code": `class Main{
	public static void main(String[] args){
		double num1 = 100, num2 = 47883, sum;
		sum = num1 + num2;
		System.out.print("Sum of " + num1 + " and " + num2 + " is " +sum);
	}
}`
            }
        },
        {
            "id": 202,
            "description": "Write a Java program that takes two numbers and display the product of two numbers",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": `Enter the first number: 5
Enter the second number: 3`,
            "sample_output": `The product is: 15.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program accepts two numbers and displays their product.",
                "code": `import java.util.Scanner;

public class ProductCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        try {
            System.out.print("Enter the first number: ");
            double num1 = Double.parseDouble(scanner.nextLine());

            System.out.print("Enter the second number: ");
            double num2 = Double.parseDouble(scanner.nextLine());

            double product = num1 * num2;
            System.out.println("The product is: " + product);
        } 
        catch (NumberFormatException e) {
            System.out.println("Invalid input. Please enter valid numbers.");
        }
    }
}
`
            }
        },
        {
            "id": 203,
            "description": "Write a Java program to print the sum, multiply, subtract, divide and remainder of two numbers",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `5 + 12 = 17
5 X 12 = 60
5 - 12 = -7
5 / 12 = 0
5 % 12 = 5`,
            "solution": {
                "language": "Java",
                "explanation": "This program performs various arithmetic operations (addition, multiplication, subtraction, division, and modulus) on two numbers.",
                "code": `class Main{
	public static void main(String[] args){
		int num1 = 5, num2 = 12, sum, prod, sub, div, remainder;
		sum = num1 + num2;
		prod = num1 * num2;
		sub = num1 - num2;
		div = num1 / num2;
		remainder = num1 % num2;
		System.out.println(num1 + " + " + num2 +" = " + sum);
		System.out.println(num1 + " X " + num2 +" = " + prod);
		System.out.println(num1 + " - " + num2 +" = " + sub);
		System.out.println(num1 + " / " + num2 +" = " + div);
		System.out.println(num1 + " % " + num2 +" = " + remainder);
	}
}
`
            }
        },
        {
            "id": 204,
            "description": "Write a Java program that takes five numbers as input to calculate and print the average of the numbers",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": `Enter number 1: 4
Enter number 2: 5
Enter number 3: 6
Enter number 4: 7
Enter number 5: 8`,
            "sample_output": `The average is: 6.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program takes five numbers as input, calculates their sum, and prints the average.",
                "code": `import java.util.Scanner;

class AverageCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double sum = 0;
        int count = 0;

        try {
            for (int i = 1; i <= 5; i++) {
                System.out.print("Enter number " + i + ": ");
                sum += Double.parseDouble(scanner.nextLine());
                count++;
            }

            double average = sum / count;
            System.out.println("The average is: " + average);
        } 
        catch (NumberFormatException e) {
            System.out.println("Invalid input. Please enter valid numbers.");
        } 
    }
}
`
            }
        },
        {
            "id": 205,
            "description": "Write a Java program to swap two variables",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Before Swapping :
num1 = 84
num2 = 128
After Swapping :
num1 = 128
num2 = 84`,
            "solution": {
                "language": "Java",
                "explanation": "This program swaps the values of two variables.",
                "code": `class Main{
	public static void main(String[] args){
		int num1 = 84, num2 = 128;
		System.out.println("Before Swapping : ");
		System.out.println("num1 = " + num1 + "\\\nnum2 = " + num2);
		num1 += num2;
		num2 = num1 - num2;
		num1 = num1 - num2; 
		System.out.println("After Swapping : ");
		System.out.println("num1 = " + num1 + "\\\nnum2 = " + num2);
	}
}`
            }
        },
        {
            "id": 206,
            "description": "Write a Java program to convert a decimal number to binary numbers",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `0000001001`,
            "solution": {
                "language": "Java",
                "explanation": "This program converts a decimal number to its binary representation.",
                "code": `class Main{
	public static void main(String[] args){
		int num = 9, j = 0;
		short arr[] = new short[10];
		while(num > 0){
			arr[j] = (short)(num % 2);
			num /= 2;
			j++;
		}
		for(int i = arr.length-1; i >= 0; i--){
			System.out.print(arr[i]);
		}		 
	}
}`
            }
        },
        {
            "id": 207,
            "description": "Write a Java program to convert a binary number to decimal number",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `The decimal of 1011 is: 11
`,
            "solution": {
                "language": "Java",
                "explanation": "This program converts a binary number to its decimal equivalent.",
                "code": `class BinaryToDecimal {
    public static void main(String[] args) {
        String binaryString = "1011"; 
        int decimal = 0;
        int base = 1;
        boolean isValid = true;

        for (int i = binaryString.length() - 1; i >= 0; i--) {
            char bit = binaryString.charAt(i);
            if (bit == '1') {
                decimal += base;
            } else if (bit == '0') {
                
            } else {
                System.out.println("Invalid binary number.");
                isValid = false;
                break;
            }
            base *= 2; 
        }

        if (isValid) {
            System.out.println("The decimal of " + binaryString + " is: " + decimal);
        }
    }
}
`
            }
        },
        {
            "id": 208,
            "description": "Write a Java program to check whether Java is installed on your computer or not",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program checks if Java is installed by printing the Java version installed on the system.",
                "code": null
            }
        },
        {
            "id": 209,
            "description": "Write a Java program and compute the sum of the digits of an integer",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `The sum of the digits of 12345 is: 15
`,
            "solution": {
                "language": "Java",
                "explanation": "This program computes the sum of digits of a given integer.",
                "code": `class SumOfDigits {
    public static void main(String[] args) {
        int number = 12345; 
        int sum = 0;

        int temp = number; 

        while (temp > 0) {
            sum += temp % 10; 
            temp /= 10; 
        }

        System.out.println("The sum of the digits of " + number + " is: " + sum);
    }
}
`
            }
        },
        {
            "id": 210,
            "description": "Write a Java program to compare two numbers",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `49 is greater than 18
92 is greater than 47
84 is equal to 84`,
            "solution": {
                "language": "Java",
                "explanation": "This program compares two numbers and prints which one is greater, or if they are equal.",
                "code": `class Main{
	static void compare(int a, int b){
		if(a > b){
			System.out.println(a + " is greater than " + b);
		}
		else if(b > a){
			System.out.println(b + " is greater than " + a);
		}
		else{
			System.out.println(a + " is equal to " + b);
		}
	}
	public static void main(String[] args){
		compare(18, 49);
		compare(92, 47);
		compare(84, 84);
	}
}`
            }
        },
        {
            "id": 211,
            "description": "Write a Java program to count the letters, spaces, numbers and other characters of an input string",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": `Enter String value :
Hello! I am 18`,
            "sample_output": `Entered String : Hello! I am 18

Number of Letters : 8
Number of Spaces : 3
Number of Numbers : 2
Number of Other Characters : 1`,
            "solution": {
                "language": "Java",
                "explanation": "This program counts the occurrences of letters, spaces, numbers, and other characters in an input string.",
                "code": `class Main{
	public static void main(String args[]){
		int letters = 0, spaces = 0, numbers = 0, others = 0;
		String str = "";
		java.io.BufferedReader br = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
		System.out.println("Enter String value : ");
		try{
			str = br.readLine();
		}
		catch(Throwable ex){
			System.out.println("Something Went Wrong : " + ex.getMessage());
		}
		for(int i = 0; i < str.length(); i++){
			if(Character.isLetter(str.charAt(i))){
				letters++;
			}
			else if(str.charAt(i) == ' '){
				spaces++;
			}
			else if(Character.isDigit(str.charAt(i))){
				numbers++;
			}
			else{
				others++;
			}
		}
		System.out.println("Entered String : " + str);
		System.out.println("\\nNumber of Letters : " + letters);
		System.out.println("Number of Spaces : " + spaces);
		System.out.println("Number of Numbers : " + numbers);
		System.out.println("Number of Other Characters : " + others);

	}
}`
            }
        },
        {
            "id": 212,
            "description": "Write a Java program to print the ascii value of a given character",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": `Enter Character : f`,
            "sample_output": `Ascii Value : 102`,
            "solution": {
                "language": "Java",
                "explanation": "This program prints the ASCII value of a given character.",
                "code": `class Main{
	public static void main(String[] args){
		java.io.InputStreamReader isr = new java.io.InputStreamReader(System.in);
		System.out.print("Enter Character : ");
		try{
			System.out.println("Ascii Value : " + isr.read());
		}
		catch(Throwable th){
			System.out.println("Hardware Error Occured : " + th.getMessage());
		}
	}
}`
            }
        },
        {
            "id": 213,
            "description": "Write a Java program that accepts an integer (n) and computes the value of n+nn+nnn",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": `Enter n value : 5`,
            "sample_output": `Value of n+nn+nn for n = 5 is 155`,
            "solution": {
                "language": "Java",
                "explanation": "This program computes the value of n+nn+nnn for a given integer n.",
                "code": `class Main{
	public static void main(String[] args){
		java.io.BufferedReader br = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
		System.out.print("Enter n value : ");
		int val = 0;
		try{
			val = Integer.parseInt(br.readLine());
			System.out.println("Value of n+nn+nn for n = " + val + " is " + (val+(val*val)+(val*val*val)));
		}
		catch(NumberFormatException nfe){
			System.out.println("Entered Character Value : " + nfe.getMessage());
		}
		catch(Throwable ex){
			System.out.println("Something Went Wrong : " + ex.getClass());
		}
	}
}`
            }
        },
        {
            "id": 214,
            "description": "Write a Java program to display the system time",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `System Time : 18:29:17`,
            "solution": {
                "language": "Java",
                "explanation": "This program displays the current system time.",
                "code": `class Main{
	public static void main(String[] args){
		java.util.Date time = new java.util.Date();
		System.out.println("System Time : " + time.getHours() +":" +time.getMinutes() + ":" + time.getSeconds());
	}
}`
            }
        },
        {
            "id": 215,
            "description": "Write a Java program to print the odd numbers from 1 to 20",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `1 is odd number
3 is odd number
5 is odd number
7 is odd number
9 is odd number
11 is odd number
13 is odd number
15 is odd number
17 is odd number
19 is odd number`,
            "solution": {
                "language": "Java",
                "explanation": "This program prints all odd numbers between 1 and 20.",
                "code": `class Main{
	static Boolean isOdd(int num){
		return (num%2 == 0) ? false : true;
	}
	public static void main(String[] args){
		for(int i = 1; i <= 20; i++){
			if(isOdd(i)){
				System.out.println(i + " is odd number");
			}
		}
	}
}`
            }
        },
        {
            "id": 216,
            "description": "Write a Java program to print the even numbers from 1 to 20",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `2 is Even number
4 is Even number
6 is Even number
8 is Even number
10 is Even number
12 is Even number
14 is Even number
16 is Even number
18 is Even number
20 is Even number`,
            "solution": {
                "language": "Java",
                "explanation": "This program prints all even numbers between 1 and 20.",
                "code": `class Main{
	static Boolean isEven(int num){
		return (num%2 == 0) ? true : false;
	}
	public static void main(String[] args){
		for(int i = 1; i <= 20; i++){
			if(isEven(i)){
				System.out.println(i + " is Even number");
			}
		}
	}
}`
            }
        },
        {
            "id": 217,
            "description": "Write a Java program to convert a string to an integer",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Integer value : 73388`,
            "solution": {
                "language": "Java",
                "explanation": "This program converts a given string to its corresponding integer value.",
                "code": `class Main{
	public static void main(String[] args){
		int val = 0;
		String str = "73388";
		try{
			val = Integer.parseInt(str);
			System.out.println("Integer value : " + val);
		}
		catch(Throwable exc){
			System.out.println(exc.getMessage());
		}		
	}
}`
            }
        },
        {
            "id": 218,
            "description": "Write a Java program to convert seconds to hour, minute and seconds",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Total Seconds : 3661
1 Hour 1 Minutes 1 Seconds`,
            "solution": {
                "language": "Java",
                "explanation": "This program converts a given number of seconds into hours, minutes, and seconds.",
                "code": `class Main{
	public static void main(String[] args){
		int t_seconds = 3661;
		int hour = t_seconds/3600;
		int minutes = (t_seconds%3600)/60;
		int seconds = (t_seconds%3600)%60;
		System.out.println("Total Seconds : " + t_seconds);
		System.out.println(hour + " Hour " + minutes  + " Minutes " + seconds + " Seconds");
	}
}`
            }
        },
        {
            "id": 219,
            "description": "Write a Java program to compute the sum of the first 100 prime numbers",
            "difficulty": "hard",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Sum of first 100 Prime Numbers : 24133`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the sum of the first 100 prime numbers.",
                "code": `class Main{
	static Boolean isPrime(int num){
		int i = 0;
		if(num == 2)
			return true;
		for(i = 2; i < num; i++){
			if(num%i == 0){
				return false;
			}
		}
		if(i == num)
			return true;
		else
			return false;
	}
	public static void main(String[] args){
		int sum = 0;
		int count = 0;
		for(int i = 2; count < 100; i++){
			if(isPrime(i)){
				sum += i;
				count++;
			}
		}
		System.out.println("Sum of first 100 Prime Numbers : " + sum);
	}
}`
            }
        },
        {
            "id": 220,
            "description": "Write a Java program to swap the first and last elements of an array and create a new array",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Original Array : [52, 74, 10, 53, 58]
New Created Array : [58, 74, 10, 53, 52]`,
            "solution": {
                "language": "Java",
                "explanation": "This program swaps the first and last elements of an array and creates a new array with the swapped elements.",
                "code": `class Main{
	static int[] swapAndCreate(int arr[]){
		int[] newarr = new int[arr.length];
		newarr[0] = arr[arr.length-1];
		newarr[arr.length-1] = arr[0];
		for(int i = 1; i < arr.length-1; i++){
			newarr[i] = arr[i];
		}
		return newarr;
	}
	public static void main(String[] args){
		int arr[] = {52, 74, 10, 53, 58};
		int newarr[] = new int[arr.length];
		newarr = swapAndCreate(arr);
		System.out.println("Original Array : " + java.util.Arrays.toString(arr));
		System.out.println("New Created Array : " + java.util.Arrays.toString(newarr));
	}
}`
            }
        },
        {
            "id": 221,
            "description": "Write a Java program to count the number of even and odd elements in a given array",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Array : [52, 86, 71, 52, 20, 93]
Number of Even Elements : 4
Number of Odd Elements : 2`,
            "solution": {
                "language": "Java",
                "explanation": "This program counts and prints the number of even and odd elements in a given array.",
                "code": `class Main{
	public static void main(String[] args){
		int arr[] = {52, 86, 71, 52, 20, 93};
		int odd = 0, even = 0;
		for(int i = 0; i < arr.length; i++){
			if(arr[i] % 2 == 0){
				even++;
			}
			else{
				odd++;
			}
		}
		System.out.println("Array : " + java.util.Arrays.toString(arr));
		System.out.println("Number of Even Elements : " + even);
		System.out.println("Number of Odd Elements : " + odd);
	}
}`
            }
        },
        {
            "id": 222,
            "description": "Write a Java program to compute the square root of a given integer",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Square Root of 169 is 13.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program computes the square root of a given integer using Java's Math library.",
                "code": `class Main{
	public static void main(String[] args){
		int num = 169;
		System.out.println("Square Root of " + num + " is " + Math.sqrt(num));
	}
}`
            }
        },
        {
            "id": 223,
            "description": "Write a Java program to check if a positive number is a palindrome or not",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `12221 is Pallindrome`,
            "solution": {
                "language": "Java",
                "explanation": "This program checks whether a given positive number is a palindrome (reads the same forward and backward).",
                "code": `class Main{
	static boolean isPallindrome(int num){
		int rev = 0, n = num;
		while(num > 0){
			rev = (num%10) + (rev*10);
			num /= 10;
		}
		return (rev == n) ? true : false;
	}
	public static void main(String args[]){
		int num = 12221;
		if(isPallindrome(num)){
			System.out.println(num + " is Pallindrome");
		}
		else{
			System.out.println(num + " is not Pallindrome");
		}
	}
}`
            }
        },
        {
            "id": 224,
            "description": "Write a Java program to add two numbers without using any arithmetic operators",
            "difficulty": "hard",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program adds two numbers without using any arithmetic operators by employing bitwise operations.",
                "code": null
            }
        },
        {
            "id": 225,
            "description": "Write a Java program to add all the digits of a given positive integer",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Sum of digits of 12221 is 8`,
            "solution": {
                "language": "Java",
                "explanation": "This program adds together all the digits of a given positive integer.",
                "code": `class Main{
	static int sumOfDigits(int num){
		int sum = 0;
		while(num > 0){
			sum += (num%10);
			num /= 10;
		}
		return sum;
	}
	public static void main(String args[]){
		int num = 12221;
		System.out.println("Sum of digits of " + num + " is " + sumOfDigits(num));
	}
}`
            }
        },
        {
            "id": 226,
            "description": "Write a Java program to find the area of a circle",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Area of circle with radius 5.0 is 78.53981633974483`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the area of a circle using the formula: area = π * radius².",
                "code": `class Main{
	static double circleArea(double radius){
		return (Math.PI * radius * radius);
	}
	public static void main(String args[]){
		double radius = 5;
		System.out.println("Area of circle with radius " + radius + " is " + circleArea(radius));
	}
}`
            }
        },
        {
            "id": 227,
            "description": "Write a Java program to find the area of a rectangle",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Area of rectangle with length 5.0 and breadth 4.0 is 20.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the area of a rectangle using the formula: area = length * width.",
                "code": `class Main{
	static double rectangleArea(double length, double breadth){
		return (length * breadth);
	}
	public static void main(String args[]){
		double l = 5, b = 4;
		System.out.println("Area of rectangle with length " + l + " and breadth " + b + " is " + rectangleArea(l, b));
	}
}`
            }
        },
        {
            "id": 228,
            "description": "Write a Java program to find the area of a triangle",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Area of triangle with height 5.0 and base 4.0 is 10.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the area of a triangle using the formula: area = 0.5 * base * height.",
                "code": `class Main{
	static double triangleArea(double height, double base){
		return ((1.0/2.0)*base*height);
	}
	public static void main(String args[]){
		double h = 5, b = 4;
		System.out.println("Area of triangle with height " + h + " and base " + b + " is " + triangleArea(h, b));
	}
}`
            }
        },
        {
            "id": 229,
            "description": "Write a Java program to find the area of an equilateral triangle",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Area of Equilateral Triangle with side 5.0 is 10.825317547305481`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the area of an equilateral triangle using the formula: area = (√3 / 4) * side².",
                "code": `class Main{
	static double equilateralTriangleArea(double side){
		return (Math.sqrt(3)/4 * side * side);
	}
	public static void main(String args[]){
		double a = 5;
		System.out.println("Area of Equilateral Triangle with side " + a + " is " + equilateralTriangleArea(a));
	}
}`
            }
        },
        {
            "id": 230,
            "description": "Write a Java program to find the area of a rhombus",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Area of Rhombus with base 5.0 and height 9.0 is 45.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the area of a rhombus using the formula: area = (diagonal1 * diagonal2) / 2.",
                "code": `class Main{
	static double rhombusArea(double base, double height){
		return (base * height);
	}
	public static void main(String args[]){
		double b = 5, h = 9;
		System.out.println("Area of Rhombus with base " + b + " and height " + h + " is " + rhombusArea(b, h));
	}
}`
            }
        },
        {
            "id": 231,
            "description": "Write a Java program to find the area of a parallelogram",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Area of Parallelogram with base 5.0 and height 9.0 is 45.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the area of a parallelogram using the formula: area = base * height.",
                "code": `class Main{
	static double parallelogramArea(double base, double height){
		return (base * height);
	}
	public static void main(String args[]){
		double b = 5, h = 9;
		System.out.println("Area of Parallelogram with base " + b + " and height " + h + " is " + parallelogramArea(b, h));
	}
}`
            }
        },
        {
            "id": 232,
            "description": "Write a Java program to find the area of a prism",
            "difficulty": "hard",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Area of Triangular Prism is 63.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the surface area of a prism using the relevant geometric formulas based on the type of prism.",
                "code": `class Main{
	static double prismArea(double trianglebase, double triangleheight, double prismheight, double side){
		return (trianglebase * triangleheight) + ((3*side) * prismheight);
	}
	public static void main(String args[]){
		double tb = 5, th = 9, a = 2, ph = 3;
		System.out.println("Area of Triangular Prism is " + prismArea(tb, th, ph, a));
	}
}`
            }
        },
        {
            "id": 233,
            "description": "Write a Java program to find the volume of a sphere",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Volume of Sphere with radius 5 : 523.5987755982989`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the volume of a sphere using the formula: volume = (4/3) * π * radius³.",
                "code": `class Main{
	static double sphereVolume(double radius){
		return ((4.0/3.0) * Math.PI * radius * radius * radius);
	}
	public static void main(String[] args){
		System.out.println("Volume of Sphere with radius 5 : " + sphereVolume(5));
	}
}`
            }
        },
        {
            "id": 234,
            "description": "Write a Java program to find the volume of a cylinder",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Volume of Cyllinder with radius 5 and height 10 : 785.3981633974483`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the volume of a cylinder using the formula: volume = π * radius² * height.",
                "code": `class Main{
	static double cyllinderVolume(double radius, double height){
		return (Math.PI * radius * radius * height);
	}
	public static void main(String[] args){
		System.out.println("Volume of Cyllinder with radius 5 and height 10 : " + cyllinderVolume(5, 10));
	}
}`
            }
        },
        {
            "id": 235,
            "description": "Write a Java program to find the volume of a cuboid",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Volume of Cuboid with length 5, breadth 7 and height 10 : 350.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the volume of a cuboid using the formula: volume = length * width * height.",
                "code": `class Main{
	static double cuboidVolume(double length, double breadth, double height){
		return (length * breadth * height);
	}
	public static void main(String[] args){
		System.out.println("Volume of Cuboid with length 5, breadth 7 and height 10 : " + cuboidVolume(5, 7, 10));
	}
}`
            }
        },
        {
            "id": 236,
            "description": "Write a Java program to find the volume of a cone",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Volume of Cone with radius 7 and height 10 : 513.1268000863329`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the volume of a cone using the formula: volume = (1/3) * π * radius² * height.",
                "code": `class Main{
	static double coneVolume(double radius, double height){
		return ((1.0/3.0) * Math.PI * radius * radius * height);
	}
	public static void main(String[] args){
		System.out.println("Volume of Cone with radius 7 and height 10 : " + coneVolume(7, 10));
	}
}`
            }
        },
        {
            "id": 237,
            "description": "Write a Java program to find the surface area of a cuboid",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Surface area of cuboid with length 3, width 6 and height 10 is 216.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the surface area of a cuboid using the formula: surface area = 2 * (length * width + width * height + height * length).",
                "code": `class Main{
	static double cuboidSA(double length, double width, double height){
		return 2 * ((length * width) + (width * height) + (length * height));
	}
	public static void main(String[] args){
		System.out.println("Surface area of cuboid with length 3, width 6 and height 10 is " + cuboidSA(3, 6, 10));
	}
}`
            }
        },
        {
            "id": 238,
            "description": "Write a Java program to find the surface area of a cylinder",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Surface area of Cyllinder with radius 6 and height 10 is 603.1857894892403`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the surface area of a cylinder using the formula: surface area = 2 * π * radius * (radius + height).",
                "code": `class Main{
	static double cylinderSA(double radius, double height){
		return 2 * Math.PI * radius * (height + radius);
	}
	public static void main(String[] args){
		System.out.println("Surface area of Cyllinder with radius 6 and height 10 is " + cylinderSA(6, 10));
	}
}`
            }
        },
        {
            "id": 239,
            "description": "Write a Java program to find the surface area of a cube",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Surface area of Cube with side 10 is 600.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the surface area of a cube using the formula: surface area = 6 * side².",
                "code": `class Main{
	static double cubeSA(double side){
		return 6 * side * side;
	}
	public static void main(String[] args){
		System.out.println("Surface area of Cube with side 10 is " + cubeSA(10));
	}
}`
            }
        },
        {
            "id": 240,
            "description": "Write a Java program to calculate average marks",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Average Marks of student is 46.8`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the average of marks input by the user.",
                "code": `class Main{
	static double averageCalc(double marks[]){
		double sum = 0;
		for(double val : marks){
			sum += val;
		}
		return (sum/marks.length);
	}
	public static void main(String args[]){
		double marks[] = {52, 78, 20, 74, 10};
		
		System.out.println("Average Marks of student is " + averageCalc(marks));
	}
}`
            }
        },
        {
            "id": 241,
            "description": "Write a Java program to check if a character is a vowel or consonant",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `I is a Vowel`,
            "solution": {
                "language": "Java",
                "explanation": "This program checks whether the input character is a vowel or a consonant.",
                "code": `class Main{
	static byte isVowelOrConsonent(char ch){
		if(Character.isLetter(ch)){
			switch(ch){
				case 'a': ;
				case 'e': ; 
				case 'i': ;
				case 'o': ;
				case 'u': ;
				case 'A': ;
				case 'E': ; 
				case 'I': ;
				case 'O': ;
				case 'U': return 1;
				default : return 0;
			}
		}
		return -1;
	}
	public static void main(String[] args){
		char ch = 'I';
		byte val = isVowelOrConsonent(ch);
		if(val == -1){
			System.out.println(ch + " is not a Letter");
		}
		else if(val == 0){
			System.out.println(ch + " is a Consonent");
		}
		else{
			System.out.println(ch + " is a Vowel");
		}
	}
}`
            }
        },
        {
            "id": 242,
            "description": "Write a Java program to sum of N numbers",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Sum of first 100 Numbers : 5050`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the sum of N numbers input by the user.",
                "code": `class Main{
	static int sumOfN(int n, int start){
		int sum = 0;
		for(int i = 0; i < n; i++)
			sum += (start + i);
		return sum;
	}
	public static void main(String args[]){
		System.out.println("Sum of first 100 Numbers : " + sumOfN(100, 1));
	}
}`
            }
        },
        {
            "id": 243,
            "description": "Write a Java program to find the factorial of any number",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Factorial of 5 : 120`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the factorial of a given number using a loop or recursion.",
                "code": `class Main{
	static int factorial(int num){
		if(num == 1 || num == 0)
			return 1;
		return num * factorial(num - 1);
	}
	public static void main(String args[]){
		System.out.println("Factorial of 5 : " + factorial(5));
	}
}`
            }
        },
        {
            "id": 244,
            "description": "Write a Java Program to calculate electricity bill",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Electricity Bill Of Consumed Units 4000 : 40000.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the electricity bill based on units consumed and rate per unit.",
                "code": `class Main{
	static double calculateBill(double units){
		final double PRICE_PER_UNIT = 10;
		
		return units * PRICE_PER_UNIT;
	}
	public static void main(String args[]){
		System.out.println("Electricity Bill Of Consumed Units 4000 : " + calculateBill(4000));
	}
}`
            }
        },
        {
            "id": 245,
            "description": "Write a Java Program To Calculate CGPA Percentage",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `CGPA Percentage of Marks : [90.0, 80.0, 70.0, 80.0, 90.0] is 77.89999999999999`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the CGPA percentage based on the CGPA input by the user.",
                "code": `class Main{
	public static void main(String[] args){
		double marks[] = {90, 80, 70, 80, 90};
		double sumofgrades = 0;
		for(int i = 0; i < marks.length; i++){
			sumofgrades += (marks[i]/10);
		}
		double cgpa = sumofgrades/marks.length;
		double cgpapercent = cgpa * 9.5;
		System.out.println("CGPA Percentage of Marks : " + java.util.Arrays.toString(marks) + " is " + cgpapercent);
	}
}
`
            }
        },
        {
            "id": 246,
            "description": "Write a Java Program to calculate compound interest",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Compound Interest for Principle 10000 for 5 years at 5% : 12762.815625000003`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the compound interest using the formula: A = P(1 + r/n)^(nt), where P is the principal, r is the rate, t is the time, and n is the number of times the interest is compounded per year.",
                "code": `class Main{
	static double compoundInterest(double principle, double roi, int n, int time){
		return (principle * Math.pow((1 + (roi/(n*100))), (n*time)));
	}
	public static void main(String[] args){
		System.out.println("Compound Interest for Principle 10000 for 5 years at 5% : " + compoundInterest(10000, 5, 1, 5));
	}
}
`
            }
        },
        {
            "id": 247,
            "description": "Write a Java Program To Calculate Batting Average",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Virat Kohli scores 13906 runs and dismissed 239 times, His Average : 58.18410041841004`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the batting average based on the total runs and total outs.",
                "code": `class Main{
	static double battingAvg(int totalRuns, int outfrequency){
		return ((double)totalRuns/(double)outfrequency);
	}
	public static void main(String[] args){
		System.out.println("Virat Kohli scores 13906 runs and dismissed 239 times, His Average : " + battingAvg(13906, 239));
	}
}
`
            }
        },
        {
            "id": 248,
            "description": "Write a Java Program to Calculate Commission Percentage",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Commission of 40000Rs sales is 3279.9999999999995`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the commission percentage based on sales and commission rate.",
                "code": `class Main{
	static double commissionCalc(double sales, double commissionRate){
		return ((commissionRate/100) * sales);
	}
	public static void main(String[] args){
		System.out.println("Commission of 40000Rs sales is " + commissionCalc(40000, 8.2));
	}
}`
            }
        },
        {
            "id": 249,
            "description": "Write a Java Program To Find Distance Between Two Points",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `The distance between the points (3.0, 4.0) and (7.0, 1.0) is: 5.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the distance between two points using the distance formula: distance = √[(x2 - x1)² + (y2 - y1)²].",
                "code": `class Main {
    public static void main(String[] args) {
        double x1 = 3.0, y1 = 4.0; 
        double x2 = 7.0, y2 = 1.0; 

        double distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

        System.out.println("The distance between the points (" + x1 + ", " + y1 + ") and (" + x2 + ", " + y2 + ") is: " + distance);
    }
}
`
            }
        },
        {
            "id": 250,
            "description": "Write a Java Program To Calculate Power Of Number",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `5 raised to the power of 3 is: 125`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the power of a number using the Math.pow() function.",
                "code": `class Main {
    public static void main(String[] args) {
        int base = 5;  
        int exponent = 3;  
        int result = 1;

        for (int i = 1; i <= exponent; i++) {
            result *= base; // Multiply the base 'exponent' times
        }

        System.out.println(base + " raised to the power of " + exponent + " is: " + result);
    }
}
`
            }
        },
        {
            "id": 251,
            "description": "Write a Java program to take three numbers from the user and print the greatest number",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": `Enter the first number: 29
Enter the second number: 58
Enter the third number: -85`,
            "sample_output": `The greatest number is: 58`,
            "solution": {
                "language": "Java",
                "explanation": "This program takes three numbers as input and prints the largest number using conditional statements.",
                "code": `class Main {
    public static void main(String[] args) {
	int num1 = 0, num2 = 0, num3 = 0;
        java.io.BufferedReader br = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
        System.out.print("Enter the first number: ");
	try{
        	num1 = Integer.parseInt(br.readLine());

        	System.out.print("Enter the second number: ");
       		num2 = Integer.parseInt(br.readLine());

        	System.out.print("Enter the third number: ");
        	num3 = Integer.parseInt(br.readLine());
	}
	catch(NumberFormatException ex){
		System.out.println("Entered Non integer Value");
	}
	catch(Throwable ex){
		System.out.println("Unexpected Error : " + ex.getMessage());
	}
        int greatest;

        if (num1 >= num2 && num1 >= num3) {
            greatest = num1;
        } else if (num2 >= num1 && num2 >= num3) {
            greatest = num2;
        } else {
            greatest = num3;
        }

        System.out.println("The greatest number is: " + greatest);
    }
}
`
            }
        },
        {
            "id": 252,
            "description": "Write a Java program to find the number of days in a month",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `The number of days in month 2 of year 2020 is: 29`,
            "solution": {
                "language": "Java",
                "explanation": "This program finds the number of days in a month based on the month number input and handles leap year conditions for February.",
                "code": `class Main {
    public static void main(String[] args) {
	int month = 2, year = 2020;
        int daysInMonth = 0;

        switch (month) {
            case 1:  
            case 3:  
            case 5:  
            case 7:  
            case 8:  
            case 10: 
            case 12: 
                daysInMonth = 31;
                break;
            case 4:  
            case 6:  
            case 9:  
            case 11: 
                daysInMonth = 30;
                break;
            case 2:  
                if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
                    daysInMonth = 29;
                } else {
                    daysInMonth = 28;
                }
                break;
            default:
                System.out.println("Invalid month! Please enter a valid month between 1 and 12.");
                return;
        }

        System.out.println("The number of days in month " + month + " of year " + year + " is: " + daysInMonth);
    }
}
`
            }
        },
        {
            "id": 253,
            "description": "Write a Java program to test a number is positive or negative",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `-5 is negative.`,
            "solution": {
                "language": "Java",
                "explanation": "This program checks whether a number is positive, negative, or zero based on user input.",
                "code": `class Main {
    public static void main(String[] args) {
        int number = -5;

        if (number > 0) {
            System.out.println(number + " is positive.");
        } else if (number < 0) {
            System.out.println(number + " is negative.");
        } else {
            System.out.println("The number is zero.");
        }
    }
}
`
            }
        },
        {
            "id": 254,
            "description": "Write a Java Program to accept number of week’s day (1-7) and print name of the day",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": `Enter the number of the day (1-7): 5`,
            "sample_output": `Thursday`,
            "solution": {
                "language": "Java",
                "explanation": "This program accepts a number between 1 and 7 from the user and prints the corresponding weekday name.",
                "code": `class Main {
    public static void main(String[] args) {
	int dayNumber = 4;
        java.io.BufferedReader reader = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));

        try {
            System.out.print("Enter the number of the day (1-7): ");
            dayNumber = Integer.parseInt(reader.readLine());
        } 
	    catch (java.io.IOException e) {
            System.out.println("An error occurred during input.");
	        return;
        } 
	    catch (NumberFormatException e) {
            System.out.println("Invalid input! Please enter a valid number.");
	        return;
        }
	    catch(Throwable e){
	        System.out.println("Something Went Wrong!");
	        return;
	    }
	    switch (dayNumber) {
                case 1:
                    System.out.println("Sunday");
                    break;
                case 2:
                    System.out.println("Monday");
                    break;
                case 3:
                    System.out.println("Tuesday");
                    break;
                case 4:
                    System.out.println("Wednesday");
                    break;
                case 5:
                    System.out.println("Thursday");
                    break;
                case 6:
                    System.out.println("Friday");
                    break;
                case 7:
                    System.out.println("Saturday");
                    break;
                default:
                    System.out.println("Invalid input! Please enter a number between 1 and 7.");
	    }
    }
}
`
            }
        },
        {
            "id": 255,
            "description": "Write a Java program that takes a year from user and print whether that year is a leap year or not",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": `Enter the year: 2020`,
            "sample_output": `2020 is a leap Year`,
            "solution": {
                "language": "Java",
                "explanation": "This program checks whether the input year is a leap year or not based on leap year rules.",
                "code": `class Main {
    static boolean isLeapYear(int year){
 	if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
                return true;
        } 
	else {
                return false;
        }
	
    }
    public static void main(String[] args) {
        java.io.BufferedReader reader = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
	int year = 2004;
	try {
            System.out.print("Enter the year: ");
            year = Integer.parseInt(reader.readLine());
        } 
	catch (java.io.IOException e) {
            System.out.println("An error occurred during input.");
 	    return;
        } 
	catch (NumberFormatException e) {
            System.out.println("Invalid input! Please enter a valid year.");
 	    return;
        }
	catch(Throwable e){
 	    System.out.println("Unexpected Error : " + e.getMessage());
	    return;
	}
	System.out.println((isLeapYear(year) ? year + " is a leap Year" : year + " is not a leap year"));
    }
}
`
            }
        },
        {
            "id": 256,
            "description": "Write a Java program to input 5 numbers from keyboard and find their sum and average",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": `Enter number 1: 56
Enter number 2: 85
Enter number 3: 12
Enter number 4: 0
Enter number 5: 6`,
            "sample_output": `Sum: 159.0
Average: 31.8`,
            "solution": {
                "language": "Java",
                "explanation": "This program takes 5 numbers from the user, calculates their sum, and finds the average.",
                "code": `class Main {
    public static void main(String[] args) {
        java.util.Scanner input = new java.util.Scanner(System.in);

        double sum = 0;
        int count = 5;
	try{
        	for (int i = 0; i < count; i++) {
            		System.out.print("Enter number " + (i + 1) + ": ");
            		sum += input.nextDouble();
        	}
	}
	catch(Throwable th){
		System.out.println("Error Occured : " + th.getMessage());
		return;
	}

        double average = sum / count;

        System.out.println("Sum: " + sum);
        System.out.println("Average: " + average);
    }
}
`
            }
        },
        {
            "id": 257,
            "description": "Write a program in Java to display the first 5 natural numbers",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `1
2
3
4
5`,
            "solution": {
                "language": "Java",
                "explanation": "This program displays the first five natural numbers using a loop.",
                "code": `class Main {
    public static void main(String[] args) {
        int count = 5;

        for (int i = 1; i <= count; i++) {
            System.out.println(i);
        }
    }
}
`
            }
        },
        {
            "id": 258,
            "description": "Write a Java program to check vowel or consonant",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `I is a Vowel`,
            "solution": {
                "language": "Java",
                "explanation": "This program checks if a given character is a vowel or consonant.",
                "code": `class Main{
	static byte isVowelOrConsonent(char ch){
		if(Character.isLetter(ch)){
			switch(ch){
				case 'a': ;
				case 'e': ; 
				case 'i': ;
				case 'o': ;
				case 'u': ;
				case 'A': ;
				case 'E': ; 
				case 'I': ;
				case 'O': ;
				case 'U': return 1;
				default : return 0;
			}
		}
		return -1;
	}
	public static void main(String[] args){
		char ch = 'I';
		byte val = isVowelOrConsonent(ch);
		if(val == -1){
			System.out.println(ch + " is not a Letter");
		}
		else if(val == 0){
			System.out.println(ch + " is a Consonent");
		}
		else{
			System.out.println(ch + " is a Vowel");
		}
	}
}`
            }
        },
        {
            "id": 259,
            "description": "Write a Java program to display the cube of the number up to a given integer",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": `Enter the integer: 5`,
            "sample_output": `Cube of 1 is: 1
Cube of 2 is: 8
Cube of 3 is: 27
Cube of 4 is: 64
Cube of 5 is: 125`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates and displays the cube of numbers up to a specified integer.",
                "code": `class Main {
    public static void main(String[] args) {
	    int n = 0;
        java.util.Scanner input = new java.util.Scanner(System.in);

        System.out.print("Enter the integer: ");
        try{
            n = input.nextInt();
        }
        catch(Throwable th){
            System.out.println("Error Occured : " + th.getMessage());
        }
        for (int i = 1; i <= n; i++) {
            int cube = i * i * i;
            System.out.println("Cube of " + i + " is: " + cube);
        }
    }
}
`
            }
        },
        {
            "id": 260,
            "description": "Write a Java program to display the n terms of odd natural numbers and their sum",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `The first 5 odd natural numbers are:
1
3
5
7
9
Sum of these odd natural numbers is: 25`,
            "solution": {
                "language": "Java",
                "explanation": "This program displays the first n odd natural numbers and calculates their sum.",
                "code": `class Main {
    public static void main(String[] args) {
        int n = 5;

        int sum = 0;
        System.out.println("The first " + n + " odd natural numbers are:");
        
        for (int i = 1; i <= n; i++) {
            int oddNumber = 2 * i - 1;
            System.out.println(oddNumber);
            sum += oddNumber;
        }

        System.out.println("Sum of these odd natural numbers is: " + sum);
    }
}
`
            }
        },
        {
            "id": 261,
            "description": "Write a Java program to display the multiplication table of a given integer",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Printing table of 5
5 X 1 = 5
5 X 2 = 10
5 X 3 = 15
5 X 4 = 20
5 X 5 = 25
5 X 6 = 30
5 X 7 = 35
5 X 8 = 40
5 X 9 = 45
5 X 10 = 50`,
            "solution": {
                "language": "Java",
                "explanation": "This program generates and displays the multiplication table for a user-specified integer.",
                "code": `class Main{
	static void printTable(int num){
		System.out.println("Printing table of " + num);
		for(int i = 1; i <= 10; i++){
			System.out.println(num + " X " + i + " = " + num*i);
		}
	}
	public static void main(String[] args){
		printTable(5);
	}
}`
            }
        },
        {
            "id": 262,
            "description": "Write a Java program that reads an integer and check whether it is negative, zero, or positive",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": `Enter an integer: 0`,
            "sample_output": `0 is zero.`,
            "solution": {
                "language": "Java",
                "explanation": "This program checks whether the input integer is negative, zero, or positive.",
                "code": `class Main {
    public static void main(String[] args) {
        java.util.Scanner input = new java.util.Scanner(System.in);
	int num = 0;
        System.out.print("Enter an integer: ");
	try{
		num = input.nextInt();
	}
	catch(Throwable th){
		System.out.println("Error Occured : " + th.getMessage());
		return;
	}
        if (num > 0) {
            System.out.println(num + " is positive.");
        } else if (num < 0) {
            System.out.println(num + " is negative.");
        } else {
            System.out.println(num + " is zero.");
        }
    }
}
`
            }
        },
        {
            "id": 263,
            "description": "Write a Java program that reads a positive integer and counts the number of digits",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": `Enter a positive integer: 945884`,
            "sample_output": `The num of digits is: 6`,
            "solution": {
                "language": "Java",
                "explanation": "This program counts the number of digits in a given positive integer.",
                "code": `class Main {
    public static void main(String[] args) {
        java.util.Scanner input = new java.util.Scanner(System.in);
	int num = 0;
        System.out.print("Enter a positive integer: ");
	try{
		num = input.nextInt();
	}
	catch(Throwable th){
		System.out.println("Error Occured : " + th.getMessage());
		return;
	}

        if (num <= 0) {
            System.out.println("The num must be positive.");
            return;
        }

        int count = 0;
        while (num > 0) {
            num /= 10;
            count++;
        }

        System.out.println("The num of digits is: " + count);
    }
}
`
            }
        },
        {
            "id": 264,
            "description": "Write a Java program that accepts three numbers and check if all numbers are equal or not",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": `Enter a integer: 52
Enter a integer: 63
Enter a integer: 25`,
            "sample_output": `The Numbers 52, 63, 25 are not equal`,
            "solution": {
                "language": "Java",
                "explanation": "This program checks if three input numbers are equal.",
                "code": `class Main {
    public static void main(String[] args) {
        java.util.Scanner input = new java.util.Scanner(System.in);
	int num1 = 0, num2 = 0, num3 = 0;
        System.out.print("Enter a integer: ");
	try{
		num1 = input.nextInt();
		System.out.print("Enter a integer: ");
		num2 = input.nextInt();
		System.out.print("Enter a integer: ");
		num3 = input.nextInt();
	}
	catch(Throwable th){
		System.out.println("Error Occured : " + th.getMessage());
		return;
	}

        if(num1 == num2 && num2 == num3)
        	System.out.println("The Numbers " + num1 + ", " + num2 + ", " + num3 + " are equal");
	else
		System.out.println("The Numbers " + num1 + ", " + num2 + ", " + num3 + " are not equal");
    }
}
`
            }
        },
        {
            "id": 265,
            "description": "Write a Java program that accepts three numbers from the user and check if numbers are in 'increasing' or 'decreasing' order.",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": `Enter a integer: -1
Enter a integer: 0
Enter a integer: 2`,
            "sample_output": `Numbers are in increasing order`,
            "solution": {
                "language": "Java",
                "explanation": "This program checks if three numbers are arranged in increasing or decreasing order.",
                "code": `class Main {
    public static void main(String[] args) {
        java.util.Scanner input = new java.util.Scanner(System.in);
	    int num1 = 0, num2 = 0, num3 = 0;
        System.out.print("Enter a integer: ");
        try{
            num1 = input.nextInt();
            System.out.print("Enter a integer: ");
            num2 = input.nextInt();
            System.out.print("Enter a integer: ");
            num3 = input.nextInt();
        }
        catch(Throwable th){
            System.out.println("Error Occured : " + th.getMessage());
            return;
        }

            if(num1 > num2 && num2 >= num3){
            System.out.println("Numbers are in decreasing order");
        }
        else if(num1 < num2 && num2 <= num3){
            System.out.println("Numbers are in increasing order");
        }	
        else{
            System.out.println("Numbers are neither increasing nor decreasing");
        }
    }
}
`
            }
        },
        {
            "id": 266,
            "description": "Write a Java program that determines a student’s grade",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Grade D`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates a student's grade based on their marks.",
                "code": `class Main{
	public static void main(String[] args){
		double marks = 200.6;
	
		if(marks < 0 && marks > 400){
			System.out.println("Invalid Marks");
		}
		else if(marks > 390){
			System.out.println("Grade A+");
		}
		else if(marks > 350){
			System.out.println("Grade A");
		}
		else if(marks > 300){
			System.out.println("Grade B");
		}
		else if(marks > 250){
			System.out.println("Grade C");
		}
		else if(marks > 150){
			System.out.println("Grade D");
		}
		else if(marks > 50){
			System.out.println("Grade E");
		}	
		else {
			System.out.println("You are Failed! Grade F");
		}
	}
	
}`
            }
        },
        {
            "id": 267,
            "description": "Write a Java program to create a simple calculator",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": `Enter the first number: 58
Enter the second number: 2
Select an operation:
1. Addition
2. Subtraction
3. Multiplication
4. Division
2`,
            "sample_output": `The result of subtraction is: 56.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program implements a simple calculator that performs basic arithmetic operations.",
                "code": `class Main {
    public static void main(String[] args) {
        java.util.Scanner input = new java.util.Scanner(System.in);
        int choice = 1;
        double num1 = 0, num2 = 0;
        try {
            System.out.print("Enter the first number: ");
            num1 = input.nextDouble();

            System.out.print("Enter the second number: ");
            num2 = input.nextDouble();

            System.out.println("Select an operation:");
            System.out.println("1. Addition");
            System.out.println("2. Subtraction");
            System.out.println("3. Multiplication");
            System.out.println("4. Division");

            choice = input.nextInt();
        } catch (Throwable th) {
            System.out.println("Error Occured : " + th.getMessage());
            return;
        }
        double result;

        switch (choice) {
            case 1:
                result = num1 + num2;
                System.out.println("The result of addition is: " + result);
                break;
            case 2:
                result = num1 - num2;
                System.out.println("The result of subtraction is: " + result);
                break;
            case 3:
                result = num1 * num2;
                System.out.println("The result of multiplication is: " + result);
                break;
            case 4:
                if (num2 != 0) {
                    result = num1 / num2;
                    System.out.println("The result of division is: " + result);
                } else {
                    System.out.println("Error: Division by zero is not allowed.");
                }
                break;
            default:
                System.out.println("Invalid choice! Please select a valid operation.");
                break;
        }
    }
}
`
            }
        },
        {
            "id": 268,
            "description": "Write a Java program to concatenate two strings",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Concatenated String : Hello World`,
            "solution": {
                "language": "Java",
                "explanation": "This program concatenates two input strings and displays the result.",
                "code": `class Main{
	static String concatStrings(String str1, String str2){
		return str1 + str2;
	}
	public static void main(String[] args){
		String s1 = "Hello ", s2 = "World";
		System.out.println("Concatenated String : " + concatStrings(s1, s2));
	}
}`
            }
        },
        {
            "id": 269,
            "description": "Write a Java program to convert all characters in a string to lowercase",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `hello world`,
            "solution": {
                "language": "Java",
                "explanation": "This program converts all characters of a given string to lowercase.",
                "code": `class Main{
	static String strLowerCase(String str){
		String st = "";
		for(int i = 0; i < str.length(); i++){
			char ch = str.charAt(i);
			if((int)ch >= 65 && (int)ch <= 90){
				st += (char)(ch+32);
			}
			else{
				st += ch;
			}
		}
		return st;
	}
	public static void main(String[] args){
		String str = "HELLO WORLD";
		System.out.println(strLowerCase(str));
	}
}`
            }
        },
        {
            "id": 270,
            "description": "Write a Java program to convert all characters in a string to uppercase",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `HELLO WORLD`,
            "solution": {
                "language": "Java",
                "explanation": "This program converts all characters of a given string to uppercase.",
                "code": `class Main{
	static String strUpperCase(String str){
		String st = "";
		for(int i = 0; i < str.length(); i++){
			char ch = str.charAt(i);
			if((int)ch >= 97 && (int)ch <= 122){
				st += (char)(ch-32);
			}
			else{
				st += ch;
			}
		}
		return st;
	}
	public static void main(String[] args){
		String str = "hello world";
		System.out.println(strUpperCase(str));
	}
}`
            }
        },
        {
            "id": 271,
            "description": "Write a Java program to trim a string (remove whitespaces)",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `helloworld`,
            "solution": {
                "language": "Java",
                "explanation": "This program removes leading and trailing whitespace from a given string.",
                "code": `class Main{
	static String strTrim(String str){
		String st = "";
		for(int i = 0; i < str.length(); i++){
			char ch = str.charAt(i);
			if(ch != ' '){
				st += ch;
			}
		}
		return st;
	}
	public static void main(String[] args){
		String str = "hello world";
		System.out.println(strTrim(str));
	}
}`
            }
        },
        {
            "id": 272,
            "description": "Write a Java program to get a substring of a given string between two specified positions",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `worl`,
            "solution": {
                "language": "Java",
                "explanation": "This program extracts a substring from a given string based on specified indices.",
                "code": `class Main{
	static String strSubstring(String str, int startInx, int endInx){
		String st = "";
		if(startInx >= str.length() || startInx < 0){
			System.out.println("Invalid Starting Index");
			return st;
		}
		else if(endInx >= str.length() || endInx < 0){
			System.out.println("Invalid Ending Index");
			return st;
		}
		for(int i = startInx; i < endInx; i++){
			st += str.charAt(i);
		}
		return st;
	}
	public static void main(String[] args){
		String str = "hello world";		System.out.println(strSubstring(str, 6, 10));
	}
}`
            }
        },
        {
            "id": 273,
            "description": "Write a Java program to replace all the ‘d’ characters with ‘f’ characters",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `hello worlf`,
            "solution": {
                "language": "Java",
                "explanation": "This program replaces all occurrences of 'd' in a string with 'f'.",
                "code": `class Main{
	static String replaceChar(String str, char find, char replace){
		String st = "";
		for(int i = 0; i < str.length(); i++){
			if(str.charAt(i) == find){
				st += replace;
			}
			else{
				st += str.charAt(i);
			}
		}
		return st;
	}
	public static void main(String[] args){
		String str = "hello world";							
        System.out.println(replaceChar(str, 'd', 'f'));
	}
}`
            }
        },
        {
            "id": 274,
            "description": "Write a Java program to get the length of a given string",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Length of hello : 5 characters`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates and displays the length of a given string.",
                "code": `class Main{
	public static void main(String args[]){
		String str = "hello";
		System.out.println("Length of " + str + " : " + str.length() + " characters");
	}
}`
            }
        },
        {
            "id": 275,
            "description": "Write a Java program to print current date and time in the specified format",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Current date and time: Date : 22-10-2024 Time : 19:14:36`,
            "solution": {
                "language": "Java",
                "explanation": "This program displays the current date and time in a specified format.",
                "code": `class Main{
	public static void main(String[] args){

        	java.time.LocalDateTime now = java.time.LocalDateTime.now();
       		java.time.format.DateTimeFormatter formatter = 	java.time.format.DateTimeFormatter.ofPattern("'Date : 'dd-MM-yyyy 'Time : 'HH:mm:ss");

        	String formattedDateTime = now.format(formatter);
        	System.out.println("Current date and time: " + formattedDateTime);

	}
}`
            }
        },
        {
            "id": 276,
            "description": "Write a Java program to get the character at the given index within the String",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `String : Hello World
Character at index 4 : o`,
            "solution": {
                "language": "Java",
                "explanation": "This program retrieves and displays the character at a specified index of a given string.",
                "code": `class Main{
	public static void main(String[] args){
		String str = "Hello World";
		System.out.println("String : " + str);

		System.out.println("Character at index 4 : " + str.charAt(4));
	}
}`
            }
        },
        {
            "id": 277,
            "description": "Write a Java program to remove a particular character from a string",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `String : Hello
String After Removing character l : Heo`,
            "solution": {
                "language": "Java",
                "explanation": "This program removes all occurrences of a specified character from a given string.",
                "code": `class Main{
	static String removeChar(String str, char ch){
		String st = "";
		for(int i = 0; i < str.length(); i++){
			if(str.charAt(i) != ch){
				st += str.charAt(i);
			}
		}
		return st;
	}
	public static void main(String[] args){
		String st = "Hello";
		System.out.println("String : " + st);
		System.out.println("String After Removing character l : " + removeChar(st, 'l'));
	}
}`
            }
        },
        {
            "id": 278,
            "description": "Write a Java program to reverse a String",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `String : Hello
Reverse of String : olleH`,
            "solution": {
                "language": "Java",
                "explanation": "This program reverses the characters in a given string.",
                "code": `class Main{
	static String reverseString(String str){
		String st = "";
		for(int i = str.length()-1; i >= 0; i--){
			st += str.charAt(i);
		}
		return st;
	}
	public static void main(String[] args){
		String str = "Hello";
		System.out.println("String : " + str);
		System.out.println("Reverse of String : " + reverseString(str));
	}
}`
            }
        },
        {
            "id": 279,
            "description": "Write a Java program to remove HTML tags from a string",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Html Code : <b>hello world</b>
Html Code without Tag: hello world`,
            "solution": {
                "language": "Java",
                "explanation": "This program removes all HTML tags from a given string.",
                "code": `class Main{
	static String removeHtmlTags(String str){
		String st = "";
		for(int i = 0; i < str.length(); i++){
			if(str.charAt(i) == '<'){
				while(i < str.length() && str.charAt(i) != '>'){
					i++;
				}
			}
			else{
				st += str.charAt(i);
			}
		}
		return st;
	}

	public static void main(String[] args){
		String str = "<b>hello world</b>";
		System.out.println("Html Code : " + str);
		System.out.println("Html Code without Tag: " + removeHtmlTags(str));

	}
}`
            }
        },
        {
            "id": 280,
            "description": "Write a Java program to count the total number of lines from a string",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `The total number of lines is: 3`,
            "solution": {
                "language": "Java",
                "explanation": "This program counts and displays the total number of lines in a given string.",
                "code": `class LineCounter {
    public static void main(String[] args) {
        String text = "This is line one.\\nThis is line two.\\nThis is line three."; 
        int lineCount = countLines(text);

        System.out.println("The total number of lines is: " + lineCount);
    }

    static int countLines(String text) {
        int count = 0;
        boolean isPreviousCharNewLine = true; 

        for (int i = 0; i < text.length(); i++) {
            char currentChar = text.charAt(i);
            if (currentChar == '\n') {
                isPreviousCharNewLine = true; 
            } else {
                if (isPreviousCharNewLine) {
                    count++; 
                }
                isPreviousCharNewLine = false; 
            }
        }

        if (text.length() > 0 && text.charAt(text.length() - 1) != '\n') {
            count++;
        }

        return count;
    }
}
`
            }
        },
        {
            "id": 281,
            "description": "Write a Java program to sum values of an array",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `The sum of the array values is: 15`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates and displays the sum of all elements in an array.",
                "code": `class ArraySum {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5}; 
        int sum = sumArray(numbers);

        System.out.println("The sum of the array values is: " + sum);
    }

    static int sumArray(int[] array) {
        int sum = 0;

        for (int i = 0; i < array.length; i++) {
            sum += array[i]; 
        }

        return sum;
    }
}
`
            }
        },
        {
            "id": 282,
            "description": "Write a Java program to find the index of an array element",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Element 30 found at index: 2`,
            "solution": {
                "language": "Java",
                "explanation": "This program finds and displays the index of a specified element in an array.",
                "code": `class ElementIndexFinder {
    public static void main(String[] args) {
        int[] array = {10, 20, 30, 40, 50};
        int target = 30;
        int index = findIndex(array, target);
        
        if (index != -1) {
            System.out.println("Element " + target + " found at index: " + index);
        } 
        else {
            System.out.println("Element " + target + " not found in the array.");
        }
    }

    static int findIndex(int[] array, int target) {
        for (int i = 0; i < array.length; i++) {
            if (array[i] == target) {
                return i;
            }
        }
        return -1;
    }
}
`
            }
        },
        {
            "id": 283,
            "description": "Write a Java program to calculate the average value of array elements",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `The average value of the array elements is: 30.0`,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates and displays the average of elements in an array.",
                "code": `class AverageCalculator {
    public static void main(String[] args) {
        int[] array = {10, 20, 30, 40, 50};
        double average = calculateAverage(array);
        System.out.println("The average value of the array elements is: " + average);
    }

    static double calculateAverage(int[] array) {
        int sum = 0;
        for (int number : array) {
            sum += number;
        }
        return (double) sum / array.length;
    }
}
`
            }
        },
        {
            "id": 284,
            "description": "Write a Java program to test if an array contains a specific value",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": `The array contains the value: 15`,
            "solution": {
                "language": "Java",
                "explanation": "This program checks if a specified value is present in an array.",
                "code": `class ArrayContains {
    public static void main(String[] args) {
        int[] array = {5, 10, 15, 20, 25};
        int target = 15;
        boolean contains = containsValue(array, target);
        if (contains) {
            System.out.println("The array contains the value: " + target);
        } else {
            System.out.println("The array does not contain the value: " + target);
        }
    }

    static boolean containsValue(int[] array, int target) {
        for (int value : array) {
            if (value == target) {
                return true;
            }
        }
        return false;
    }
}
`
            }
        },
        {
            "id": 285,
            "description": "Write a Java program to find the maximum and minimum value of an array",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": `Value at 1 position : 83
Value at 2 position : 49
Value at 3 position : 289
Value at 4 position : 27
Value at 5 position : 23
Value at 6 position : 592

Maximum value of array :592

Minimum value of array :23`,
            "solution": {
                "language": "Java",
                "explanation": "This program finds and displays the maximum and minimum values in an array.",
                "code": `class Main{
	static void printArray(int arr[]){
		for(int i = 0; i < arr.length; i++){
			System.out.println("Value at " + (i+1) + " position : " + arr[i]);
		}
	}
	static int arrayMax(int arr[]){
		int max = 0;
		for(int i = 1; i < arr.length; i++){
			if(arr[max] < arr[i])
				max = i;
		}
		return arr[max];
	}
    static int arrayMin(int arr[]){
		int min = 0;
		for(int i = 1; i < arr.length; i++){
			if(arr[min] > arr[i])
				min = i;
		}
		return arr[min];
	}
	public static void main(String[] args){
		int arr[] = {83, 49, 289, 27, 23, 592};
		printArray(arr);
		System.out.println("\\nMaximum value of array :" + arrayMax(arr));
        System.out.println("\\nMinimum value of array :" + arrayMin(arr));

	}
}`
            }
        },
        {
            "id": 286,
            "description": "Write a Java program to insert an element (specific position) into an array",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program inserts a specified element into a specified position in an array.",
                "code": null
            }
        },
        {
            "id": 287,
            "description": "Write a Java program to reverse an array of integer values",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program reverses the order of elements in an integer array.",
                "code": null
            }
        },
        {
            "id": 288,
            "description": "Write a Java program to find the common elements between two arrays",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program identifies and displays common elements between two arrays.",
                "code": null
            }
        },
        {
            "id": 289,
            "description": "Write a Java program to find the duplicate values of an array of integer values",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program finds and displays duplicate values in an integer array.",
                "code": null
            }
        },
        {
            "id": 290,
            "description": "Write a Java program to convert an array to ArrayList",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program converts an array into an ArrayList and displays the result.",
                "code": null
            }
        },
        {
            "id": 291,
            "description": "Write a Java program to add two matrices of the same size",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program adds two matrices of the same size and displays the resulting matrix.",
                "code": null
            }
        },
        {
            "id": 292,
            "description": "Write a Java program to find the second largest number from the array",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program finds and displays the second largest number in an array.",
                "code": null
            }
        },
        {
            "id": 293,
            "description": "Write a Java program to find the second lowest number from the array",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program finds and displays the second lowest number in an array.",
                "code": null
            }
        },
        {
            "id": 294,
            "description": "Write a Java program to find the number of even and odd integers in a given array of integers",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program counts and displays the number of even and odd integers in an array.",
                "code": null
            }
        },
        {
            "id": 295,
            "description": "Write a Java program to get the difference between the largest and smallest values in an array of integers",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates and displays the difference between the maximum and minimum values in an array.",
                "code": null
            }
        },
        {
            "id": 296,
            "description": "Write a Java program to segregate all 0s on the left side and all 1s on the right side of a given array of 0s and 1s",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program rearranges an array of 0s and 1s so that all 0s appear before 1s.",
                "code": null
            }
        },
        {
            "id": 297,
            "description": "Write a Java program to cyclically rotate a given array clockwise by one",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program rotates the elements of an array clockwise by one position.",
                "code": null
            }
        },
        {
            "id": 298,
            "description": "Write a Java program to print all unique elements in an array",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program identifies and prints all unique elements present in an array.",
                "code": null
            }
        },
        {
            "id": 299,
            "description": "Write a Java program to sort the array in ascending order",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program sorts the elements of an array in ascending order.",
                "code": null
            }
        },
        {
            "id": 300,
            "description": "Write a Java program to sort the array in descending order",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program sorts the elements of an array in descending order.",
                "code": null
            }
        },
        {
            "id": 301,
            "description": "Write a Java program to sort names in alphabetical order",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program sorts a list of names in alphabetical order.",
                "code": null
            }
        },
        {
            "id": 302,
            "description": "Write a Java program to display transpose of a matrix",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates and displays the transpose of a given matrix.",
                "code": null
            }
        },
        {
            "id": 303,
            "description": "Write a Java program to search key elements in an array",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program searches for specified key elements in an array and returns their positions.",
                "code": null
            }
        },
        {
            "id": 304,
            "description": "Write a Java program to accept the marks of a student and find total marks and percentage",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the total marks and percentage based on student input.",
                "code": null
            }
        },
        {
            "id": 305,
            "description": "Write a Java program to print numbers from 1 to 10 using loop",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program uses a loop to print numbers from 1 to 10.",
                "code": null
            }
        },
        {
            "id": 306,
            "description": "Write a Java program to calculate the sum of the first 10 natural numbers using loop",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates and prints the sum of the first 10 natural numbers using a loop.",
                "code": null
            }
        },
        {
            "id": 307,
            "description": "Write a Java program to print multiplication table of given number",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program prints the multiplication table for a specified number.",
                "code": null
            }
        },
        {
            "id": 308,
            "description": "Write a Java program to find the factorial value of any number entered through the keyboard",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates and displays the factorial of a user-entered number.",
                "code": null
            }
        },
        {
            "id": 309,
            "description": "Write a Java program that prompts the user to input an integer and then outputs the number with the digits reversed order",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program reverses the digits of a user-input integer and displays the result.",
                "code": null
            }
        },
        {
            "id": 310,
            "description": "Write a Java program that reads a set of integers, and then prints the sum of the even and odd integers using loop",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates and displays the sum of even and odd integers from user input.",
                "code": null
            }
        },
        {
            "id": 311,
            "description": "Write a Java program to check whether the number is a prime number or not",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program checks if a user-entered number is prime and displays the result.",
                "code": null
            }
        },
        {
            "id": 312,
            "description": "Write a Java program to calculate HCF of two given numbers using loop",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates and displays the highest common factor (HCF) of two numbers.",
                "code": null
            }
        },
        {
            "id": 313,
            "description": "Write a Java program to enter the numbers till the user wants and at the end it should display the count of positive, negative and zeros",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program collects numbers from the user and counts how many are positive, negative, and zero.",
                "code": null
            }
        },
        {
            "id": 314,
            "description": "Write a Java program to enter the numbers till the user wants and at the end the program should display the largest and smallest numbers entered",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program keeps track of the largest and smallest numbers entered by the user.",
                "code": null
            }
        },
        {
            "id": 315,
            "description": "Write a Java program to print out all Armstrong numbers between 1 to 600 using loop",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program finds and prints all Armstrong numbers within the range of 1 to 600.",
                "code": null
            }
        },
        {
            "id": 316,
            "description": "Write a Java program to count total number of notes in entered amount using loop",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program counts and displays the number of currency notes needed for a given amount.",
                "code": null
            }
        },
        {
            "id": 317,
            "description": "Write a Java program to print Fibonacci series of n terms where n is input by user using loop",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program generates and prints the Fibonacci series for a specified number of terms.",
                "code": null
            }
        },
        {
            "id": 318,
            "description": "Write a Java program to calculate the sum of the following series where n is input by user",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program computes the sum of a specified mathematical series based on user input.",
                "code": null
            }
        },
        {
            "id": 319,
            "description": "Write a Java method to compute the average of three numbers",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method calculates and returns the average of three given numbers.",
                "code": null
            }
        },
        {
            "id": 320,
            "description": "Write a Java method to find the smallest number among three numbers",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method determines and returns the smallest of three provided numbers.",
                "code": null
            }
        },
        {
            "id": 321,
            "description": "Write a Java method to count all words in a string",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method counts and returns the total number of words in a given string.",
                "code": null
            }
        },
        {
            "id": 322,
            "description": "Write a Java method to count all vowels in a string",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method counts and returns the total number of vowels present in a string.",
                "code": null
            }
        },
        {
            "id": 323,
            "description": "Write a Java method to compute the sum of the digits in an integer",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method calculates and returns the sum of all digits in a given integer.",
                "code": null
            }
        },
        {
            "id": 324,
            "description": "Write a Java method to check whether a year entered by the user is a leap year or not",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method checks if a given year is a leap year and returns the result.",
                "code": null
            }
        },
        {
            "id": 325,
            "description": "Write a Java method to calculate the area of a triangle",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method computes and returns the area of a triangle based on given dimensions.",
                "code": null
            }
        },
        {
            "id": 326,
            "description": "Write a Java method to find the area of a pentagon",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method calculates and returns the area of a pentagon using provided measurements.",
                "code": null
            }
        },
        {
            "id": 327,
            "description": "Write a Java method to find if a number is even or not",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method checks if a given number is even and returns the result.",
                "code": null
            }
        },
        {
            "id": 328,
            "description": "Write a Java method to check if a number is a palindrome or not",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method determines whether a given number is a palindrome.",
                "code": null
            }
        },
        {
            "id": 329,
            "description": "Write a Java method to display prime numbers between 1 to 20",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method finds and prints all prime numbers in the range from 1 to 20.",
                "code": null
            }
        },
        {
            "id": 330,
            "description": "Write a Java method to find GCD and LCM of two numbers",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method computes and returns both the greatest common divisor (GCD) and least common multiple (LCM) of two numbers.",
                "code": null
            }
        },
        {
            "id": 331,
            "description": "Write a Java method to find factorial using recursion in Java",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method calculates the factorial of a number using recursion.",
                "code": null
            }
        },
        {
            "id": 332,
            "description": "Write a Java program to reverse an integer number",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program takes an integer as input and reverses its digits.",
                "code": null
            }
        },
        {
            "id": 333,
            "description": "Write a Java program to round a float number to specified decimals",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program rounds a given float number to a specified number of decimal places.",
                "code": null
            }
        },
        {
            "id": 334,
            "description": "Write a Java program to test if a double number is an integer",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program checks if a given double value is an integer.",
                "code": null
            }
        },
        {
            "id": 335,
            "description": "Write a Java program to round up the result of integer division",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program performs integer division and rounds the result up.",
                "code": null
            }
        },
        {
            "id": 336,
            "description": "Write a Java program to convert a Roman number to an integer number",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program converts a Roman numeral input into its equivalent integer value.",
                "code": null
            }
        },
        {
            "id": 337,
            "description": "Write a Java program to convert a float value to absolute value",
            "difficulty": "easy",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program converts a given float number to its absolute value.",
                "code": null
            }
        },
        {
            "id": 338,
            "description": "Write a Java program to accept a float value of number and return a rounded float value",
            "difficulty": "medium",
            "topic": 2,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program accepts a float number and returns it rounded to the nearest whole number.",
                "code": null
            }
        },
        {
            "id": 339,
            "description": "Create the connection with MySQL Database and manage the driver.",
            "difficulty": "easy",
            "topic": 12,
            "sample_input": null,
            "sample_output": `Connection to MySQL database established successfully.
Unexpected Error :  Unknown database 'abjjsj'
Unexpected Error :  Access denied for user 'root'@'localhost' (using password: YES)`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to set up a connection to a MySQL database using Java and manage the JDBC driver.",
                "code": `class Main{
    static java.sql.Connection connectDB(String dbname, String username, String password){
        java.sql.Connection connection = null;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = java.sql.DriverManager.getConnection("jdbc:mysql://localhost:3306/" + dbname, username, password);
            System.out.println("Connection to MySQL database established successfully.");
        }
        catch(ClassNotFoundException e){
            System.out.println("MySQL JDBC Driver not found.");
        }
        catch(Exception e){
            connection = null;
            System.out.println("Unexpected Error :  " + e.getMessage());
        }
        return connection;
    }
    public static void main(String[] args) {
        java.sql.Connection con = connectDB("school", "root", "mypass");
        java.sql.Connection con1 = connectDB("abjjsj", "root", "mypass");
        java.sql.Connection con2 = connectDB("school", "root", "ab");
    }
}`
            }
        },
        {
            "id": 340,
            "description": "Create the table in the database from Java API.",
            "difficulty": "easy",
            "topic": 12,
            "sample_input": null,
            "sample_output": `Connection to MySQL database established successfully.
Table created Successfully`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to create a table in a MySQL database using Java API.",
                "code": `class Main{
    static java.sql.Connection connectDB(String dbname, String username, String password){
        java.sql.Connection connection = null;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = java.sql.DriverManager.getConnection("jdbc:mysql://localhost:3306/" + dbname, username, password);
            System.out.println("Connection to MySQL database established successfully.");
        }
        catch(ClassNotFoundException e){
            System.out.println("MySQL JDBC Driver not found.");
        }
        catch(Exception e){
            connection = null;
            System.out.println("Unexpected Error :  " + e.getMessage());
        }
        return connection;
    }
    static void createTable(java.sql.Connection con, String query){
        java.sql.Statement st = null;
        try {
            st = con.createStatement();
            if(st.executeUpdate(query) == 0){
                System.out.println("Table created Successfully");
            }
        } 
        catch (Exception e) {
            System.out.println("Unexpected Error :  " + e.getMessage());
        }
    }
    public static void main(String[] args) {
        java.sql.Connection con = connectDB("school", "root", "mypass");
        createTable(con, "CREATE TABLE MYTB(ID INT, Name VARCHAR(20), Updated DATE)");
    }
}`
            }
        },
        {
            "id": 341,
            "description": "Insert the row in the table in the database from Java API.",
            "difficulty": "easy",
            "topic": 12,
            "sample_input": null,
            "sample_output": `Connection to MySQL database established successfully.
Row Inserted Successfully
Row Inserted Successfully`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to insert a row into a table in a MySQL database using Java API.",
                "code": `class Main{
    static java.sql.Connection connectDB(String dbname, String username, String password){
        java.sql.Connection connection = null;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = java.sql.DriverManager.getConnection("jdbc:mysql://localhost:3306/" + dbname, username, password);
            System.out.println("Connection to MySQL database established successfully.");
        }
        catch(ClassNotFoundException e){
            System.out.println("MySQL JDBC Driver not found.");
        }
        catch(Exception e){
            connection = null;
            System.out.println("Unexpected Error :  " + e.getMessage());
        }
        return connection;
    }
    static boolean insertDB(java.sql.Connection con, String tbName, String vals[]){
        java.sql.Statement st = null;
        String query = "insert into " + tbName + " values(";
        for (int i = 0; i < vals.length; i++) {
            query += (i < (vals.length-1)) ? vals[i] + "," : vals[i] + ");";
        }
        try {
            st = con.createStatement();
            if(st.executeUpdate(query) != 0){
                return true;
            }
        } 
        catch (Exception e) {
            System.out.println("Unexpected Error :  " + e.getMessage());
        }
        return false;
    }
    public static void main(String[] args) {
        String[] arr = {"1", "'Abhishek'", "'2004-02-12'"};
	String[] arr2 = {"2", "'Asha'", "'2004-05-21'"};
        java.sql.Connection con = connectDB("school", "root", "mypass");
        if(insertDB(con, "mytb", arr)){
            System.out.println("Row Inserted Successfully");
        }
        else{
            System.out.println("Failed to Insert Row");
        }
	if(insertDB(con, "mytb", arr2)){
            System.out.println("Row Inserted Successfully");
        }
        else{
            System.out.println("Failed to Insert Row");
        }

    }
}`
            }
        },
        {
            "id": 342,
            "description": "Update the row in the table in the database from Java API.",
            "difficulty": "easy",
            "topic": 12,
            "sample_input": null,
            "sample_output": `Connection to MySQL database established successfully.
1 Number of  rows Updated
Row Updated Successfully
0 Number of  rows Updated
Failed to Update Row`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to update an existing row in a MySQL database table using Java API.",
                "code": `
class Main{
    static java.sql.Connection connectDB(String dbname, String username, String password){
        java.sql.Connection connection = null;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = java.sql.DriverManager.getConnection("jdbc:mysql://localhost:3306/" + dbname, username, password);
            System.out.println("Connection to MySQL database established successfully.");
        }
        catch(ClassNotFoundException e){
            System.out.println("MySQL JDBC Driver not found.");
        }
        catch(Exception e){
            connection = null;
            System.out.println("Unexpected Error :  " + e.getMessage());
        }
        return connection;
    }
    static boolean updateDB(java.sql.Connection con, String tbName, String column, String value, String condition){
        java.sql.Statement st = null;
        String query = "update " + tbName + " set " + column + " = " + value;
        if(condition != null){
            query += " where " + condition;
        }
        try {
            st = con.createStatement();
            int rows = st.executeUpdate(query);
            System.out.println(rows + " Number of  rows Updated");
            if(rows != 0){
                return true;
            }
        } 
        catch (Exception e) {
            System.out.println("Unexpected Error :  " + e.getMessage());
        }
        return false;
    }
    public static void main(String[] args) {
        java.sql.Connection con = connectDB("school", "root", "mypass");
        if(updateDB(con, "mytb", "Name" , "'Abhishek Dhawan'", "Id = 1")){
            System.out.println("Row Updated Successfully");
        }
        else{
            System.out.println("Failed to Update Row");
        }
	    if(updateDB(con, "mytb", "Name" , "'Ashssa'", "Id = 4")){
            System.out.println("Row Updated Successfully");
        }
        else{
            System.out.println("Failed to Update Row");
        }
    }
}`
            }
        },
        {
            "id": 343,
            "description": "Delete the row in the table in the database from Java API.",
            "difficulty": "easy",
            "topic": 12,
            "sample_input": null,
            "sample_output": `Connection to MySQL database established successfully.
1 Number of  rows Deleted
Row Deleted Successfully`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to delete a row from a MySQL database table using Java API.",
                "code": `class Main{
    static java.sql.Connection connectDB(String dbname, String username, String password){
        java.sql.Connection connection = null;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = java.sql.DriverManager.getConnection("jdbc:mysql://localhost:3306/" + dbname, username, password);
            System.out.println("Connection to MySQL database established successfully.");
        }
        catch(ClassNotFoundException e){
            System.out.println("MySQL JDBC Driver not found.");
        }
        catch(Exception e){
            connection = null;
            System.out.println("Unexpected Error :  " + e.getMessage());
        }
        return connection;
    }
    static boolean deleteRow(java.sql.Connection con, String tbName, String condition){
        java.sql.Statement st = null;
        String query = "delete from " + tbName;
        if(condition != null){
            query += " where " + condition;
        }
        try {
            st = con.createStatement();
            int rows = st.executeUpdate(query);
            System.out.println(rows + " Number of  rows Deleted");
            if(rows != 0){
                return true;
            }
        } 
        catch (Exception e) {
            System.out.println("Unexpected Error :  " + e.getMessage());
        }
        return false;
    }
    public static void main(String[] args) {
        java.sql.Connection con = connectDB("school", "root", "mypass");
        if(deleteRow(con, "mytb", "id = 2")){
            System.out.println("Row Deleted Successfully");
        }
        else{
            System.out.println("Failed to Delete Row");
        }
    }
}`
            }
        },
        {
            "id": 344,
            "description": "Select multiple rows from the database table in Java API and show the result on the screen.",
            "difficulty": "medium",
            "topic": 12,
            "sample_input": null,
            "sample_output": `Connection to MySQL database established successfully.
Row Number 1
Id : 1
Name : Abhishek Dhawan
Last Updated : 2004-02-12`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to select multiple rows from a MySQL database table and display the result on the screen using Java API.",
                "code": `class Main{
    static java.sql.Connection connectDB(String dbname, String username, String password){
        java.sql.Connection connection = null;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = java.sql.DriverManager.getConnection("jdbc:mysql://localhost:3306/" + dbname, username, password);
            System.out.println("Connection to MySQL database established successfully.");
        }
        catch(ClassNotFoundException e){
            System.out.println("MySQL JDBC Driver not found.");
        }
        catch(Exception e){
            connection = null;
            System.out.println("Unexpected Error :  " + e.getMessage());
        }
        return connection;
    }
    static void selectRows(java.sql.Connection con, String tbName, String condition){
        java.sql.Statement st = null;
        String query = "select * from " + tbName;
        if(condition != null){
            query += " where " + condition + ";";
        }
        try {
            st = con.createStatement();
            java.sql.ResultSet rs = st.executeQuery(query);
            for (int i = 1; rs.next(); i++) {
                System.out.println("Row Number " + i);
                System.out.println("Id : " + rs.getInt(1) + "\nName : " + rs.getString(2) + "\nLast Updated : " + rs.getDate(3));
            }
        } 
        catch (Exception e) {
            System.out.println("Unexpected Error :  " + e.getMessage());
        }
    }
    public static void main(String[] args) {
        java.sql.Connection con = connectDB("school", "root", "mypass");
        selectRows(con, "mytb", null);
         
    }
}`
            }
        },
        {
            "id": 345,
            "description": "Create a Scrollable Readonly Resultset and ask the row number from the user and display that row on the screen.",
            "difficulty": "medium",
            "topic": 12,
            "sample_input": `Enter Row Number
1`,
            "sample_output": `Connection to MySQL database established successfully.
Printing Row Values :
Id : 1
Name : Abhishek Dhawan
Last Updated : 2004-02-12`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to create a scrollable, read-only ResultSet and display a specific row based on user input.",
                "code": `class Main{
    static java.sql.Connection connectDB(String dbname, String username, String password){
        java.sql.Connection connection = null;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = java.sql.DriverManager.getConnection("jdbc:mysql://localhost:3306/" + dbname, username, password);
            System.out.println("Connection to MySQL database established successfully.");
        }
        catch(ClassNotFoundException e){
            System.out.println("MySQL JDBC Driver not found.");
        }
        catch(Exception e){
            connection = null;
            System.out.println("Unexpected Error :  " + e.getMessage());
        }
        return connection;
    }
    static void selectRows(java.sql.Connection con, String tbName, int row){
        java.sql.Statement st = null;
        String query = "select * from " + tbName;
        try {
            st = con.createStatement(java.sql.ResultSet.TYPE_SCROLL_SENSITIVE, java.sql.ResultSet.CONCUR_READ_ONLY);
            java.sql.ResultSet rs = st.executeQuery(query);
            if(rs.absolute(row)){
                System.out.println("Printing Row Values : ");
                System.out.println("Id : " + rs.getInt(1) + "\nName : " + rs.getString(2) + "\nLast Updated : " + rs.getDate(3));
            }
            else{
                System.out.println("Row Number " + row + " Not Available");
            }
        } 
        catch (Exception e) {
            System.out.println("Unexpected Error :  " + e.getMessage());
        }
    }
    public static void main(String[] args) {
        java.sql.Connection con = connectDB("school", "root", "mypass");
        java.io.BufferedReader br = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
        int r;
        System.out.println("Enter Row Number");
        try {
            r = Integer.parseInt(br.readLine());  
            selectRows(con, "mytb", r);
        }
        catch(NumberFormatException e){
            System.out.println("Invalid Row Number");
        } 
        catch (Exception e) {
            System.out.println("error occured : " + e.getMessage());
        }
    }
}`
            }
        },
        {
            "id": 346,
            "description": "Create a Scrollable Updateable Resultset and insert a new row, update an existing row and delete the row from Resultset and also the changes should be made to the database also. The values should be inserted, updated and deleted by the user only.",
            "difficulty": "medium",
            "topic": 12,
            "sample_input": `Press 1 : For Insert
Press 2 : For Update
Press 3 : For Delete
Press any other key : Exit
1
Id Value : 3
Name Value : Manjit
Press 1 : For Insert
Press 2 : For Update
Press 3 : For Delete
Press any other key : Exit
2
Row Number :
3
Id Value :
5
Name Value :
Manjit Kumar
Press 1 : For Insert
Press 2 : For Update
Press 3 : For Delete
Press any other key : Exit
3
Row Number :
5
Press 1 : For Insert
Press 2 : For Update
Press 3 : For Delete
Press any other key : Exit
3
Row Number :
3
Press 1 : For Insert
Press 2 : For Update
Press 3 : For Delete
Press any other key : Exit
y
`,
            "sample_output": `Connection to MySQL database established successfully.
Inserted Successfully
Updated Successfully
Row number 5 Not Available
Row Deletion Failed
Row Deleted Successfully
Quiting.....`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to create a scrollable, updatable ResultSet, and make changes to the database (insert, update, delete) based on user input.",
                "code": `
class Main{
    static java.sql.Connection connectDB(String dbname, String username, String password){
        java.sql.Connection connection = null;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = java.sql.DriverManager.getConnection("jdbc:mysql://localhost:3306/" + dbname, username, password);
            System.out.println("Connection to MySQL database established successfully.");
        }
        catch(ClassNotFoundException e){
            System.out.println("MySQL JDBC Driver not found.");
        }
        catch(Exception e){
            connection = null;
            System.out.println("Unexpected Error :  " + e.getMessage());
        }
        return connection;
    }
    static java.sql.ResultSet selectRows(java.sql.Connection con, String tbName){
        java.sql.Statement st = null;
        String query = "select * from " + tbName;
        try {
            st = con.createStatement(java.sql.ResultSet.TYPE_SCROLL_SENSITIVE, java.sql.ResultSet.CONCUR_UPDATABLE);
            java.sql.ResultSet rs = st.executeQuery(query);
            return rs;
        } 
        catch (Exception e) {
            System.out.println("Unexpected Error :  " + e.getMessage());
        }
        return null;
    }
    static boolean insertRS(java.sql.ResultSet rs, int val1, String val2, java.sql.Date val3){
        try {
            rs.moveToInsertRow();
            rs.updateInt(1, val1);
            rs.updateString(2, val2);
            rs.updateDate(3, val3);
            rs.insertRow();
            return true;
        } 
        catch (Exception e) {
            System.out.println("error occured : " + e.getMessage());
        }
        return false;
    }
    static boolean updateRS(java.sql.ResultSet rs, int row, int val1, String val2, java.sql.Date val3){
        try {
            if(rs.absolute(row)){
                rs.updateInt(1, val1);
                rs.updateString(2, val2);
                rs.updateDate(3, val3);
                rs.updateRow();
                return true;
            }
            else{
                System.out.println("Row number " + row + " Not Available");
            }
        } 
        catch (Exception e) {
            System.out.println("error occured : " + e.getMessage());
        }
        return false;
    }
    static boolean deleteRS(java.sql.ResultSet rs, int row){
        try {
            if(rs.absolute(row)){
                rs.deleteRow();
                return true;
            }
            else{
                System.out.println("Row number " + row + " Not Available");
            }
        } 
        catch (Exception e) {
            System.out.println("error occured : " + e.getMessage());
        }
        return false;
    }
    public static void main(String[] args) {
        java.sql.Connection con = connectDB("school", "root", "mypass");
        java.io.BufferedReader br = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
        java.sql.ResultSet rs = selectRows(con, "mytb");
        char choice = '1';
        while (choice != '0') {
            int val1 = 0, row = -1;
            String val2 = "";
            System.out.println("Press 1 : For Insert");
            System.out.println("Press 2 : For Update");
            System.out.println("Press 3 : For Delete");
	    System.out.println("Press any other key : Exit");
            try {
                choice = (char)new java.io.InputStreamReader(System.in).read();
            } 
            catch (Exception e) {
                System.out.println(e.getMessage());
            }
            switch (choice) {
                case '1':
                    try{
                        System.out.print("Id Value : ");
                        val1 = Integer.parseInt(br.readLine());
                        System.out.print("Name Value : ");
                        val2 = br.readLine();
                        if(insertRS(rs, val1, val2, new java.sql.Date(new java.util.Date().getTime()))){
                            System.out.println("Inserted Successfully");
                        }
                        else{
                            System.out.println("Insertion Failed");
                        }
                    }
                    catch(Exception e){
                        System.out.println("Error Occured : " + e.getMessage());
                    }
                    break;
                case '2' :
                    try{
                        System.out.println("Row Number : ");
                        row = Integer.parseInt(br.readLine());
                        System.out.println("Id Value : ");
                        val1 = Integer.parseInt(br.readLine());
                        System.out.println("Name Value : ");
                        val2 = br.readLine();
                        if(updateRS(rs, row, val1, val2, new java.sql.Date(new java.util.Date().getTime()))){
                            System.out.println("Updated Successfully");
                        }
                        else{
                            System.out.println("Updation Failed");
                        }
                    }
                    catch(Exception e){
                        System.out.println("Error Occured : " + e.getMessage());
                    }
                    break;
                case '3' :
                    try{
                        System.out.println("Row Number : ");
                        row = Integer.parseInt(br.readLine());
                        if(deleteRS(rs, row)){
                            System.out.println("Row Deleted Successfully");
                        }
                        else{
                            System.out.println("Row Deletion Failed");
                        }
                    }
                    catch(Exception e){
                        System.out.println("Error Occured : " + e.getMessage());
                    }
                    break;
                default:
		    choice = '0';
                    System.out.println("Quiting....");
                    break;
            }
        }
    }
}`
            }
        },
        {
            "id": 347,
            "description": "Create a Java Program to show, insert, update, delete of the table in Java API through PreparedStatement.",
            "difficulty": "medium",
            "topic": 12,
            "sample_input": null,
            "sample_output": `Row : 0
ID : 1  Name : Abhishek Dhawan  Last Updated : 2004-02-12
Row : 1
ID : 2  Name : Asha     Last Updated : 2024-11-03
Inserting Row
Row : 0
ID : 1  Name : Abhishek Dhawan  Last Updated : 2004-02-12
Row : 1
ID : 2  Name : Asha     Last Updated : 2024-11-03
Row : 2
ID : 38 Name : Manu     Last Updated : 2024-12-08
Updating Value
Row : 0
ID : 1  Name : Abhishek Dhawan  Last Updated : 2004-02-12
Row : 1
ID : 2  Name : Asha     Last Updated : 2024-11-03
Row : 2
ID : 38 Name : NewName  Last Updated : 2024-12-08
Deleting Row
Row : 0
ID : 1  Name : Abhishek Dhawan  Last Updated : 2004-02-12
Row : 1
ID : 2  Name : Asha     Last Updated : 2024-11-03`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to perform CRUD operations on a MySQL database table using PreparedStatement in Java API.",
                "code": `class Main{
    static java.sql.Connection connectDB(String dbname){
        java.sql.Connection connection = null;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = java.sql.DriverManager.getConnection("jdbc:mysql://localhost:3306/" + dbname, "root", "mypass");
        }
        catch(ClassNotFoundException e){
            System.out.println("MySQL JDBC Driver not found.");
        }
        catch(Exception e){
            connection = null;
            System.out.println("Unexpected Error :  " + e.getMessage());
        }
        return connection;
    }
    static void selectRows(String query){
        java.sql.PreparedStatement st = null;
        try {
            st = connectDB("school").prepareStatement(query);
            java.sql.ResultSet rs = st.executeQuery();
            for (int i = 0; rs.next(); i++) {
                System.out.println("Row : " + i);
                System.out.println("ID : " + rs.getInt(1) + "\tName : " + rs.getString(2) + "\tLast Updated : " + rs.getDate(3));
            }
        } 
        catch (Exception e) {
            System.out.println("Unexpected Error :  " + e.getMessage());
        }
    }
    static boolean executePS(String query){
        try {
            java.sql.PreparedStatement ps = connectDB("school").prepareStatement(query);
            return ps.execute();
        } 
        catch (Exception e) {
            System.out.println("Unexpected Error : " + e.getMessage());
        }
        return false;
    }
    public static void main(String[] args) {
        selectRows("Select * from mytb;");
        System.out.println("Inserting Row");
        executePS("insert into mytb values(38, 'Manu', '2024-12-08')");
        selectRows("Select * from mytb;");
        System.out.println("Updating Value");
        executePS("update mytb set name = 'NewName' where id = 38");
        selectRows("Select * from mytb;");
        System.out.println("Deleting Row");
        executePS("delete from mytb where id = 38");
        selectRows("Select * from mytb;");
    }
}`
            }
        },
        {
            "id": 348,
            "description": "Create a simple AWT application that displays a button with FlowLayout manager.",
            "difficulty": "easy",
            "topic": 7,
            "sample_input": null,
            "sample_output": `<img src = "awt/1.png" heigth = "200px">`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to create an AWT application that uses FlowLayout to display a button.",
                "code": `class Main{
    public static void main(String[] args) {
        java.awt.Frame frame = new java.awt.Frame("Simple AWT Application");

        java.awt.Button button = new java.awt.Button("Click Me");

        frame.setLayout(new java.awt.FlowLayout());
        frame.add(button);

        frame.setSize(300, 200);
        frame.setVisible(true);
    }
}`
            }
        },
        {
            "id": 349,
            "description": "Create a simple AWT application that displays a button with Custom Layout.",
            "difficulty": "medium",
            "topic": 7,
            "sample_input": null,
            "sample_output": `<img src = "awt/2.png" heigth = "200px">`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to create an AWT application that uses a custom layout to display a button.",
                "code": null
            }
        },
        {
            "id": 350,
            "description": "Create a simple AWT application that displays multiple buttons with BorderLayout manager (North, East, West, South, Center).",
            "difficulty": "easy",
            "topic": 7,
            "sample_input": null,
            "sample_output": `<img src = "awt/3.png" heigth = "200px">`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to create an AWT application that uses BorderLayout to position multiple buttons in different regions.",
                "code": `class Main{
    public static void main(String[] args) {
        java.awt.Frame frame = new java.awt.Frame("AWT with BorderLayout");

        java.awt.Button northButton = new java.awt.Button("North");
        java.awt.Button southButton = new java.awt.Button("South");
        java.awt.Button eastButton = new java.awt.Button("East");
        java.awt.Button westButton = new java.awt.Button("West");
        java.awt.Button centerButton = new java.awt.Button("Center");

        frame.setLayout(new java.awt.BorderLayout());

        frame.add(northButton, java.awt.BorderLayout.NORTH);
        frame.add(southButton, java.awt.BorderLayout.SOUTH);
        frame.add(eastButton, java.awt.BorderLayout.EAST);
        frame.add(westButton, java.awt.BorderLayout.WEST);
        frame.add(centerButton, java.awt.BorderLayout.CENTER);

        frame.setSize(400, 300);
        frame.setVisible(true);
    }
}`
            }
        },
        {
            "id": 351,
            "description": "Create a simple AWT application that displays a TextField with FlowLayout manager.",
            "difficulty": "easy",
            "topic": 7,
            "sample_input": null,
            "sample_output": `<img src = "awt/4.png" heigth = "200px">`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to create an AWT application that uses FlowLayout to display a TextField.",
                "code": `class Main{
    public static void main(String[] args) {
        java.awt.Frame frame = new java.awt.Frame("AWT with FlowLayout");

        java.awt.TextField textField = new java.awt.TextField(20);

        frame.setLayout(new java.awt.FlowLayout());
        frame.add(textField);

        frame.setSize(300, 200);
        frame.setVisible(true);
    }
}`
            }
        },
        {
            "id": 352,
            "description": "Create a simple AWT application that displays a TextField with Custom Layout.",
            "difficulty": "medium",
            "topic": 7,
            "sample_input": null,
            "sample_output": `<img src = "awt/5.png" heigth = "200px">`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to create an AWT application that uses a custom layout to display a TextField.",
                "code": null
            }
        },
        {
            "id": 353,
            "description": "Create a simple AWT application that displays a Checkbox with FlowLayout manager.",
            "difficulty": "easy",
            "topic": 7,
            "sample_input": null,
            "sample_output": `<img src = "awt/6.png" heigth = "200px">`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to create an AWT application that uses FlowLayout to display a Checkbox.",
                "code": `class Main{
    public static void main(String[] args) {
        java.awt.Frame frame = new java.awt.Frame("AWT with FlowLayout");

        java.awt.Checkbox checkbox = new java.awt.Checkbox("Accept Terms and Conditions");

        frame.setLayout(new java.awt.FlowLayout());
        frame.add(checkbox);

        frame.setSize(300, 200);
        frame.setVisible(true);
    }
}`
            }
        },
        {
            "id": 354,
            "description": "Create a simple AWT application that displays a Checkbox with Custom Layout.",
            "difficulty": "medium",
            "topic": 7,
            "sample_input": null,
            "sample_output": `<img src = "awt/7.png" heigth = "200px">`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to create an AWT application that uses a custom layout to display a Checkbox.",
                "code": null
            }
        },
        {
            "id": 355,
            "description": "Create a simple AWT application that displays a Label with FlowLayout manager.",
            "difficulty": "easy",
            "topic": 7,
            "sample_input": null,
            "sample_output": `<img src = "awt/8.png" heigth = "200px">`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to create an AWT application that uses FlowLayout to display a Label.",
                "code": `class Main{
    public static void main(String[] args) {
        java.awt.Frame frame = new java.awt.Frame("AWT with FlowLayout");

        java.awt.Label label = new java.awt.Label("Welcome to AWT Application!");

        frame.setLayout(new java.awt.FlowLayout());
        frame.add(label);

        frame.setSize(300, 200);
        frame.setVisible(true);
    }
}`
            }
        },
        {
            "id": 356,
            "description": "Create a simple AWT application that displays a Label with Custom Layout.",
            "difficulty": "medium",
            "topic": 7,
            "sample_input": null,
            "sample_output": `<img src = "awt/9.png" heigth = "200px">`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to create an AWT application that uses a custom layout to display a Label.",
                "code": null
            }
        },
        {
            "id": 357,
            "description": "Create a simple AWT application that displays a Choice with FlowLayout manager.",
            "difficulty": "easy",
            "topic": 7,
            "sample_input": null,
            "sample_output": `<img src = "awt/10.png" heigth = "200px">`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to create an AWT application that uses FlowLayout to display a Choice component.",
                "code": `class Main{
    public static void main(String[] args) {
        java.awt.Frame frame = new java.awt.Frame("AWT with FlowLayout");

        java.awt.Choice choice = new java.awt.Choice();
        choice.add("Option 1");
        choice.add("Option 2");
        choice.add("Option 3");

        frame.setLayout(new java.awt.FlowLayout());
        frame.add(choice);

        frame.setSize(300, 200);
        frame.setVisible(true);
    }
}`
            }
        },
        {
            "id": 358,
            "description": "Create a simple AWT application that displays a Choice with Custom Layout.",
            "difficulty": "medium",
            "topic": 7,
            "sample_input": null,
            "sample_output": `<img src = "awt/11.png" heigth = "200px">`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to create an AWT application that uses a custom layout to display a Choice component.",
                "code": null
            }
        },
        {
            "id": 359,
            "description": "Create a simple AWT application that displays a CheckboxGroup with FlowLayout manager.",
            "difficulty": "easy",
            "topic": 7,
            "sample_input": null,
            "sample_output": `<img src = "awt/12.png" heigth = "200px">`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to create an AWT application that uses FlowLayout to display a CheckboxGroup.",
                "code": `class Main{
    public static void main(String[] args) {
        java.awt.Frame frame = new java.awt.Frame("AWT with FlowLayout");

        java.awt.CheckboxGroup checkboxGroup = new java.awt.CheckboxGroup();

        java.awt.Checkbox option1 = new java.awt.Checkbox("Option 1", checkboxGroup, false);
        java.awt.Checkbox option2 = new java.awt.Checkbox("Option 2", checkboxGroup, false);
        java.awt.Checkbox option3 = new java.awt.Checkbox("Option 3", checkboxGroup, true); 

        frame.setLayout(new java.awt.FlowLayout());
        frame.add(option1);
        frame.add(option2);
        frame.add(option3);

        frame.setSize(300, 200);
        frame.setVisible(true);
    }
}`
            }
        },
        {
            "id": 360,
            "description": "Create a simple AWT application that displays a CheckboxGroup with Custom Layout.",
            "difficulty": "medium",
            "topic": 7,
            "sample_input": null,
            "sample_output": `<img src = "awt/13.png" heigth = "200px">`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to create an AWT application that uses a custom layout to display a CheckboxGroup.",
                "code": null
            }
        },
        {
            "id": 361,
            "description": "Create a simple AWT application that displays a List with FlowLayout manager.",
            "difficulty": "easy",
            "topic": 7,
            "sample_input": null,
            "sample_output": `<img src = "awt/14.png" heigth = "200px">`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to create an AWT application that uses FlowLayout to display a List component.",
                "code": `class Main{
    public static void main(String[] args) {
        java.awt.Frame frame = new java.awt.Frame("AWT with FlowLayout");

        java.awt.List list = new java.awt.List(); 
        list.add("Item 1");
        list.add("Item 2");
        list.add("Item 3");
        list.add("Item 4");
        list.add("Item 5");

        frame.setLayout(new java.awt.FlowLayout());
        frame.add(list);

        frame.setSize(300, 200);
        frame.setVisible(true);
    }
}`
            }
        },
        {
            "id": 362,
            "description": "Create a simple AWT application that displays a List with Custom Layout.",
            "difficulty": "medium",
            "topic": 7,
            "sample_input": null,
            "sample_output": `<img src = "awt/15.png" heigth = "200px">`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to create an AWT application that uses a custom layout to display a List component.",
                "code": null
            }
        },
        {
            "id": 363,
            "description": "Create a simple AWT application that displays a TextArea with FlowLayout manager.",
            "difficulty": "easy",
            "topic": 7,
            "sample_input": null,
            "sample_output": `<img src = "awt/16.png" heigth = "200px">`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to create an AWT application that uses FlowLayout to display a TextArea.",
                "code": `class Main{
    public static void main(String[] args) {
        java.awt.Frame frame = new java.awt.Frame("AWT with FlowLayout");

        java.awt.TextArea textArea = new java.awt.TextArea(); 

        frame.setLayout(new java.awt.FlowLayout());
        frame.add(textArea);

        frame.setSize(400, 300);
        frame.setVisible(true);
    }
}`
            }
        },
        {
            "id": 364,
            "description": "Create a simple AWT application that displays a TextArea with Custom Layout.",
            "difficulty": "medium",
            "topic": 7,
            "sample_input": null,
            "sample_output": `<img src = "awt/17.png" heigth = "200px">`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to create an AWT application that uses a custom layout to display a TextArea.",
                "code": null
            }
        },
        {
            "id": 365,
            "description": "Create a simple AWT application design a calculator that displays buttons, TextField with GridLayout manager.",
            "difficulty": "hard",
            "topic": 7,
            "sample_input": null,
            "sample_output": `<img src = "awt/18.png" heigth = "200px">`,
            "solution": {
                "language": "Java",
                "explanation": "This tutorial explains how to design a simple calculator using AWT components and GridLayout to manage buttons and a TextField.",
                "code": `class Calculator extends  java.awt.Frame{
    Calculator(){
        super("Basic Calculator");
        setLayout(new java.awt.GridLayout(5,4));
        java.awt.Button btns[] = new java.awt.Button[16];
        java.awt.TextField tf = new java.awt.TextField(100);
        tf.setEditable(false);
        add(tf);
        add(new java.awt.Label());
        add(new java.awt.Label());
        add(new java.awt.Label());
        for (int i = 0; i < btns.length; i++) {
            btns[i] = new java.awt.Button();
            btns[i].setBackground(java.awt.Color.BLUE);
            add(btns[i]);
        }
        btns[0].setLabel("7");
        btns[1].setLabel("8");
        btns[2].setLabel("9");
        btns[3].setLabel("C");
        btns[4].setLabel("4");
        btns[5].setLabel("5");
        btns[6].setLabel("6");
        btns[7].setLabel("/");
        btns[8].setLabel("1");
        btns[9].setLabel("2");
        btns[10].setLabel("3");
        btns[11].setLabel("X");
        btns[12].setLabel("+");
        btns[13].setLabel("0");
        btns[14].setLabel("-");
        btns[15].setLabel("=");
        btns[3].setBackground(java.awt.Color.RED);
        setVisible(true);
        setSize(300, 500);
    }
}
class Main{
    public static void main(String[] args) {
        new Calculator();
    }
}`
            }
        },
        {
            "id": 366,
            "description": "Write a Java program to create a basic Java thread that prints 'Hello, World!' when executed.",
            "difficulty": "easy",
            "topic": 13,
            "sample_input": null,
            "sample_output": `Running Thread : Thread T2
Hello World!
Running Thread : Thread T1
Hello World!
Running Thread : Thread T3
Hello World!`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates the creation of a simple thread that prints 'Hello, World!' using the Thread class.",
                "code": `class Main extends Thread{

    public void run() {
        System.out.println("Running Thread : " + this.getName() +"\nHello World!");
    }
    
    public static void main(String[] args) {
        Main t1 = new Main();
        Main t2 = new Main();
        Main t3 = new Main();
        t1.setName("Thread T1");
        t2.setName("Thread T2");
        t3.setName("Thread T3");
        t1.start();
        t2.start();
        t3.start();
    }
}`
            }
        },
        {
            "id": 367,
            "description": "Write a Java program that creates two threads to find and print even and odd numbers from 1 to 20.",
            "difficulty": "medium",
            "topic": 13,
            "sample_input": null,
            "sample_output": `Thread T2 : 1 is odd
Thread T2 : 2 is even
Thread T2 : 3 is odd
Thread T1 : 1 is odd
Thread T1 : 2 is even
Thread T2 : 4 is even
Thread T2 : 5 is odd
Thread T1 : 3 is odd
Thread T2 : 6 is even
Thread T2 : 7 is odd
Thread T1 : 4 is even
Thread T2 : 8 is even
Thread T1 : 5 is odd
Thread T1 : 6 is even
Thread T2 : 9 is odd
Thread T1 : 7 is odd
Thread T1 : 8 is even
Thread T2 : 10 is even
Thread T1 : 9 is odd
Thread T2 : 11 is odd
Thread T1 : 10 is even
Thread T2 : 12 is even
Thread T1 : 11 is odd
Thread T2 : 13 is odd
Thread T1 : 12 is even
Thread T1 : 13 is odd
Thread T2 : 14 is even
Thread T1 : 14 is even
Thread T2 : 15 is odd
Thread T1 : 15 is odd
Thread T2 : 16 is even
Thread T1 : 16 is even
Thread T1 : 17 is odd
Thread T2 : 17 is odd
Thread T2 : 18 is even
Thread T1 : 18 is even
Thread T2 : 19 is odd
Thread T1 : 19 is odd
Thread T1 : 20 is even
Thread T2 : 20 is even`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to use threads to print even and odd numbers concurrently.",
                "code": `class Main extends Thread{

    public void run() {
        for(int i = 1; i < 21; i++){
            if(i % 2 == 0){
                System.out.println(this.getName() + " : " + i +" is even");
            }
            else{
                System.out.println(this.getName() + " : " + i +" is odd");
            }
        }
    }
    
    public static void main(String[] args) {
        Main t1 = new Main();
        Main t2 = new Main();
        t1.setName("Thread T1");
        t2.setName("Thread T2");
        t1.start();
        t2.start();
    }
}`
            }
        },
        {
            "id": 368,
            "description": "Write a Java program that sorts an array of integers using multiple threads.",
            "difficulty": "hard",
            "topic": 13,
            "sample_input": null,
            "sample_output": `Before Sorting : [15, 20, 10, 8, 5]
Before Sorting : [15, 20, 10, 8, 5]
Swapping Performed in Thread Thread 2
Swapping Performed in Thread Thread 1
Array : [10, 15, 20, 8, 5]
Swapping Performed in Thread Thread 2
Array : [10, 15, 20, 8, 5]
Swapping Performed in Thread Thread 1
Array : [10, 15, 8, 20, 5]
Swapping Performed in Thread Thread 2
Array : [10, 15, 8, 5, 20]
Swapping Performed in Thread Thread 1
Array : [10, 8, 15, 5, 20]
Swapping Performed in Thread Thread 2
Array : [8, 10, 15, 5, 20]
Swapping Performed in Thread Thread 1
Array : [8, 10, 5, 15, 20]
Swapping Performed in Thread Thread 2
Array : [5, 8, 10, 15, 20]
Array : [8, 5, 10, 15, 20]
After Sorting : [5, 8, 10, 15, 20]
After Sorting : [5, 8, 10, 15, 20]`,
            "solution": {
                "language": "Java",
                "explanation": "This program uses multiple threads to sort an array using a divide-and-conquer approach.",
                "code": `class Main extends Thread{
    private static int arr[] = {15, 20, 10, 8, 5};
    void sortArray(){
		for(int i = 0; i < arr.length; i++){
			for(int j = 0; j < (arr.length-i-1); j++){
				if(arr[j] > arr[j+1]){
					int temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp;
                    System.out.println("Swapping Performed in Thread " + this.getName());
                    System.out.println("Array : " + java.util.Arrays.toString(arr));
				}
			}
		}
	}
    public void run() {
        System.out.println("Before Sorting : " + java.util.Arrays.toString(arr));
        sortArray();
        System.out.println("After Sorting : " + java.util.Arrays.toString(arr));    
    }
    public static void main(String[] args) {
        Main t1 = new Main();
        Main t2 = new Main();
        
        t1.setName("Thread 1");
        t2.setName("Thread 2");
        t1.start();
        t2.start();
    }
}
`
            }
        },
        {
            "id": 369,
            "description": "Write a Java program that performs matrix multiplication using multiple threads.",
            "difficulty": "hard",
            "topic": 13,
            "sample_input": null,
            "sample_output": `Running Thread : Thread 2
Running Thread : Thread 1
Running Thread : Thread 2
Running Thread : Thread 2
Running Thread : Thread 2
Running Thread : Thread 2
Running Thread : Thread 2
Running Thread : Thread 2
Running Thread : Thread 2
Running Thread : Thread 2
Running Thread : Thread 1
Running Thread : Thread 1
Running Thread : Thread 2
Running Thread : Thread 2
Running Thread : Thread 1
Running Thread : Thread 1
Running Thread : Thread 1
Running Thread : Thread 1
Running Thread : Thread 1
Running Thread : Thread 1
Running Thread : Thread 2
Running Thread : Thread 2
Running Thread : Thread 1
Running Thread : Thread 1
Running Thread : Thread 2
Running Thread : Thread 2
Running Thread : Thread 2
Running Thread : Thread 2
Running Thread : Thread 2
Running Thread : Thread 1
Running Thread : Thread 1
Running Thread : Thread 1
Running Thread : Thread 1
Running Thread : Thread 1
Running Thread : Thread 1
Running Thread : Thread 1
Thread Thread 1 Multiplication Completed
Thread Thread 2 Multiplication Completed
258 89 17 
31 17 26
258 89 17
31 17 26`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to perform matrix multiplication using threads to parallelize row-column computations.",
                "code": `

class Main extends Thread{
    
	private final static int arr1[][] = {{2, 8, 7}, {5, 2, 1}};
    private final static int arr2[][] = {{1, 0, 5}, {9, 5, 0}, {8, 7, 1}};
    private static int mat[][] = new int[arr1.length][arr2[0].length];
    void matrixMultiply(){
        for (int i = 0; i < arr1.length; i++) {
            for (int j = 0; j < arr1[i].length; j++) {
                mat[i][j] = 0;
                for (int k = 0; k < arr2[i].length; k++) {
                    mat[i][j] += arr1[i][k] * arr2[k][j];
                    System.out.println("Running Thread : " + this.getName());
                }
            }
        }
	}
    void printResultMatrix(int arr[][]) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
    }
    public void run() {
        matrixMultiply();
        System.out.println("Thread " + this.getName() + " Multiplication Completed");
        printResultMatrix(mat);    
    }
    public static void main(String[] args) {
        Main t1 = new Main();
        Main t2 = new Main();
        
        t1.setName("Thread 1");
        t2.setName("Thread 2");
        t1.start();
        t2.start();
    }
}
`
            }
        },
        {
            "id": 370,
            "description": "Write a Java program that calculates the sum of all prime numbers up to a given limit using multiple threads.",
            "difficulty": "medium",
            "topic": 13,
            "sample_input": null,
            "sample_output": `Thread 2 Sum of Prime Number Upto 100 is 1060
Thread 1 Sum of Prime Number Upto 100 is 1060`,
            "solution": {
                "language": "Java",
                "explanation": "This program uses multiple threads to find and sum prime numbers up to a specified limit.",
                "code": `class Main extends Thread{
	static Boolean isPrime(int num){
		int i = 0;
		if(num == 2)
			return true;
		for(i = 2; i < num; i++){
			if(num%i == 0){
				return false;
			}
		}
		if(i == num)
			return true;
		else
			return false;
	}
    void sumOfNPrime(int n){
        int sum = 0;
        for(int i = 2; i < n; i++){
			if(isPrime(i)){
				sum += i;
			}
		}
        System.out.println(this.getName() +" Sum of Prime Number Upto " + n + " is " + sum);
    }

    public void run() {
        sumOfNPrime(100);
    }
    
	public static void main(String[] args){
		Main t1 = new Main();
        Main t2 = new Main();
        
        t1.setName("Thread 1");
        t2.setName("Thread 2");
        t1.start();
        t2.start();
	}
}`
            }
        },
        {
            "id": 371,
            "description": "Write a Java program to implement a concurrent web crawler that crawls multiple websites simultaneously using threads.",
            "difficulty": "hard",
            "topic": 13,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates concurrent web crawling using threads to fetch content from multiple websites simultaneously.",
                "code": null
            }
        },
        {
            "id": 372,
            "description": "Write a Java program that creates a bank account with concurrent deposits and withdrawals using threads.",
            "difficulty": "medium",
            "topic": 13,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program simulates a bank account where multiple threads perform deposits and withdrawals concurrently, demonstrating synchronization.",
                "code": null
            }
        },
        {
            "id": 373,
            "description": "Create a program to create multiple threads using the Runnable interface.",
            "difficulty": "easy",
            "topic": 13,
            "sample_input": null,
            "sample_output": `Task 2 - Count: 1
Task 2 - Count: 2
Task 3 - Count: 1
Task 3 - Count: 2
Task 1 - Count: 1
Task 3 - Count: 3
Task 2 - Count: 3
Task 3 - Count: 4
Task 1 - Count: 2
Task 3 - Count: 5
Task 2 - Count: 4
Task 1 - Count: 3
Task 2 - Count: 5
Task 1 - Count: 4
Task 1 - Count: 5`,
            "solution": {
                "language": "Java",
                "explanation": "This program shows how to implement threads using the Runnable interface.",
                "code": `class SimpleTask implements Runnable {
    private String taskName;

    public SimpleTask(String taskName) {
        this.taskName = taskName;
    }

    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(taskName + " - Count: " + i);
        }
    }
}

class Main {
    public static void main(String[] args) {
        Thread thread1 = new Thread(new SimpleTask("Task 1"));
        Thread thread2 = new Thread(new SimpleTask("Task 2"));
        Thread thread3 = new Thread(new SimpleTask("Task 3"));

        thread1.start();
        thread2.start();
        thread3.start();

    }
}
`
            }
        },
        {
            "id": 374,
            "description": "Create a program to create multiple threads using the Thread class.",
            "difficulty": "easy",
            "topic": 13,
            "sample_input": null,
            "sample_output": `Thread 1 - Count: 1
Thread 1 - Count: 2
Thread 3 - Count: 1
Thread 3 - Count: 2
Thread 2 - Count: 1
Thread 2 - Count: 2
Thread 2 - Count: 3
Thread 3 - Count: 3
Thread 1 - Count: 3
Thread 1 - Count: 4
Thread 3 - Count: 4
Thread 2 - Count: 4
Thread 3 - Count: 5
Thread 1 - Count: 5
Thread 2 - Count: 5`,
            "solution": {
                "language": "Java",
                "explanation": "This program shows how to implement threads by extending the Thread class.",
                "code": `class SimpleTask extends Thread{
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(this.getName() + " - Count: " + i);
        }
    }
}

class Main {
    public static void main(String[] args) {
        SimpleTask t1 = new SimpleTask();
        SimpleTask t2 = new SimpleTask();
        SimpleTask t3= new SimpleTask();
        t1.setName("Thread 1");
        t2.setName("Thread 2");
        t3.setName("Thread 3");
        t1.start();
        t2.start();
        t3.start();

    }
}
`
            }
        },
        {
            "id": 375,
            "description": "Create a program to create multiple threads, set their names, and their priorities.",
            "difficulty": "medium",
            "topic": 13,
            "sample_input": null,
            "sample_output": `Thread 1 - Count: 1
Thread 1 - Count: 2
Thread 3 - Count: 1
Thread 3 - Count: 2
Thread 2 - Count: 1
Thread 3 - Count: 3
Thread 1 - Count: 3
Thread 3 - Count: 4
Thread 2 - Count: 2
Thread 3 - Count: 5
Thread 1 - Count: 4
Thread 2 - Count: 3
Thread 1 - Count: 5
Thread 2 - Count: 4
Thread 2 - Count: 5`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to set names and priorities for multiple threads.",
                "code": `class SimpleTask extends Thread{
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(this.getName() + " - Count: " + i);
        }
    }
}

class Main {
    public static void main(String[] args) {
        SimpleTask t1 = new SimpleTask();
        SimpleTask t2 = new SimpleTask();
        SimpleTask t3= new SimpleTask();
        t1.setName("Thread 1");
        t2.setName("Thread 2");
        t3.setName("Thread 3");
        t1.setPriority(Thread.MAX_PRIORITY);
        t2.setPriority(Thread.MIN_PRIORITY);
        t1.start();
        t2.start();
        t3.start();

    }
}
`
            }
        },
        {
            "id": 376,
            "description": "Create a program to create multiple threads and show an example of the synchronized keyword.",
            "difficulty": "medium",
            "topic": 13,
            "sample_input": null,
            "sample_output": `Running : Thread 2
Hello World
Running : Thread 1
Hello World`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates the use of the synchronized keyword to avoid race conditions.",
                "code": `class SyncExample extends Thread{
    public synchronized void show(){
        System.out.println("Running : " + this.getName());
        System.out.println("Hello World");
    }
    public void run() {
        show();
    }
}
class Main{
    public static void main(String[] args) {
        SyncExample t1 = new SyncExample();
        SyncExample t2 = new SyncExample();
        t1.setName("Thread 1");
        t2.setName("Thread 2");
        t1.start();
        t2.start();
    }
}`
            }
        },
        {
            "id": 377,
            "description": "Create a program to create multiple threads and demonstrate notify, notifyAll, wait, resume, and sleep methods.",
            "difficulty": "hard",
            "topic": 13,
            "sample_input": null,
            "sample_output": `Thread 1 : i = 1
Thread 1 : i = 2
Thread 2 : i = 1
Thread 1 : i = 3
Thread 1 : i = 4
Notifying all
Thread 1 : i = 5
Thread 2 is waiting to resume
Thread 2 : i = 2
Thread 2 : i = 3
Thread 2 : i = 4
Thread 2 : i = 5`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates the use of inter-thread communication methods like notify, wait, and sleep.",
                "code": `class ThreadEx extends Thread{
    public void waitThread(){
        try {
            System.out.println(this.getName() + " is waiting to resume");
            this.wait();
        } 
        catch (Exception e) {
        }
    }
    public void resumeThread(){
        System.out.println("Resuming " + this.getName());
        this.resume();
    }
    public synchronized void notiAll(){
        System.out.println("Notifying all");
        notifyAll();
    }
    public void run() {
        for(int i = 1; i <= 5; i++){
            if(this.getName().equals("Thread 2") && i == 2){
                waitThread();
            }
            if(this.getName().equals("Thread 1") && i==5){
                notiAll();
            }
            System.out.println(this.getName() + " : i = " + i);
        }
    }
}
class Main{
    public static void main(String[] args) {
        ThreadEx t1 = new ThreadEx();
        ThreadEx t2 = new ThreadEx();
        t1.setName("Thread 1");
        t2.setName("Thread 2");
        t1.start();
        t2.start();
        
    }
}`
            }
        },
        {
            "id": 378,
            "description": "Create a program to create multiple threads and demonstrate join and yield methods.",
            "difficulty": "medium",
            "topic": 13,
            "sample_input": null,
            "sample_output": `Thread-3 - Count: 1
Thread-1 - Count: 1
Thread-1 - Count: 2
Thread-2 - Count: 1
Thread-2 - Count: 2
Thread-2 - Count: 3
Thread-3 - Count: 2
Thread-3 - Count: 3
Thread-3 - Count: 4
Thread-2 - Count: 4
Thread-1 - Count: 3
Thread-2 - Count: 5
Thread-3 - Count: 5
Thread-1 - Count: 4
Thread-1 - Count: 5
Thread-3 has completed.
Thread-2 has completed.
Thread-1 has completed.
Thread-1 has finished, now waiting for Thread-2 to complete.
Thread-2 has finished, now waiting for Thread-3 to complete.
Thread-3 has finished.
All threads have completed, main thread resumes.`,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates the use of join and yield methods for thread management.",
                "code": `class MyTask extends Thread {
    private String taskName;

    public MyTask(String taskName) {
        this.taskName = taskName;
    }

    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(taskName + " - Count: " + i);
            Thread.yield(); 
        }
        System.out.println(taskName + " has completed.");
    }
}

class Main {
    public static void main(String[] args) {
        MyTask thread1 = new MyTask("Thread-1");
        MyTask thread2 = new MyTask("Thread-2");
        MyTask thread3 = new MyTask("Thread-3");

        thread1.start();
        thread2.start();
        thread3.start();

        try {
            thread1.join();
            System.out.println("Thread-1 has finished, now waiting for Thread-2 to complete.");

            thread2.join();
            System.out.println("Thread-2 has finished, now waiting for Thread-3 to complete.");

            thread3.join();
            System.out.println("Thread-3 has finished.");
        } 
        catch (Exception e) {
            System.out.println(e.getMessage());
        }

        System.out.println("All threads have completed, main thread resumes.");
    }
}
`
            }
        },
        {
            "id": 379,
            "description": "Java Program to Display Some Text in the Frame using Labels.",
            "difficulty": "easy",
            "topic": 4,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to display text using Labels in an AWT Frame.",
                "code": `class Main extends java.awt.Frame{
    Main(){
        setSize(400, 600);
        setVisible(true);
        setLayout(null);
        java.awt.Label l1 = new java.awt.Label("Hello I am Label 1");
        java.awt.Label l2 = new java.awt.Label("Hello I am Label 2");
        java.awt.Label l3 = new java.awt.Label("Hello I am Label 3");
        l1.setBounds(100, 70, 300, 100);
        l2.setBounds(100, 150, 300, 100);
        l3.setBounds(100, 240, 300, 100);
        add(l1);
        add(l2);
        add(l3);
    }
    public static void main(String[] args) {
        new Main();
    }
}`
            }
        },
        {
            "id": 380,
            "description": "Java Program to Create Text Area and Password Field.",
            "difficulty": "medium",
            "topic": 4,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to use TextArea and PasswordField components in an AWT Frame.",
                "code": `class Main extends java.awt.Frame{
    Main(){
        setSize(400, 600);
        setVisible(true);
        setLayout(null);
        java.awt.TextArea ta = new java.awt.TextArea();
        ta.setBounds(50, 50, 300, 200);
        java.awt.TextField tf = new java.awt.TextField();
        tf.setBounds(50, 270, 300, 50);
        tf.setEchoChar('*');
        add(ta);
        add(tf);
    }
    public static void main(String[] args) {
        new Main();
    }
}`
            }
        },
        {
            "id": 381,
            "description": "Java Program to Create a Button and Display Image in the Frame when Clicked.",
            "difficulty": "medium",
            "topic": 4,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program shows how to use a Button to trigger an action that displays an image in an AWT Frame.",
                "code": `class Main extends java.awt.Frame{
    java.awt.Image img;
    Main(){
        setSize(400, 600);
        setVisible(true);
        setLayout(null);
        java.awt.Button btn = new java.awt.Button("Click to Show");
        btn.setBounds(50, 50, 300, 50);
        add(btn);
        btn.addActionListener(new java.awt.event.ActionListener() {
            @Override
            public void actionPerformed(java.awt.event.ActionEvent e) {
                img = java.awt.Toolkit.getDefaultToolkit().getImage("awt.png");
                repaint();
                throw new UnsupportedOperationException("Not supported yet.");
            }
            
        });
    }
    public void paint(java.awt.Graphics g){
        g.drawImage(img, 50, 200, this);
    }
    public static void main(String[] args) {
        new Main();
    }
}`
            }
        },
        {
            "id": 382,
            "description": "Java Program to Create 2 Radio Buttons and Display Selected Button Label.",
            "difficulty": "medium",
            "topic": 4,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to create Radio Buttons and display the label of the selected button.",
                "code": `
import java.awt.CheckboxGroup;
import java.awt.event.FocusEvent;
import java.awt.event.FocusListener;

class Main extends java.awt.Frame{
    Main(){
        setSize(400, 600);
        setVisible(true);
        setLayout(null);
        CheckboxGroup checkboxGroup = new CheckboxGroup();
        java.awt.Checkbox ch = new java.awt.Checkbox("Radio 1", checkboxGroup, true);
        java.awt.Checkbox ch2 = new java.awt.Checkbox("", checkboxGroup, false);
        ch.setBounds(50, 50, 100, 50);
        ch2.setBounds(160, 50, 100, 50);
        add(ch);
        add(ch2);
        ch.addFocusListener(new FocusListener() {
            @Override
            public void focusGained(FocusEvent e) {
                    ch2.setLabel("");
                    ch.setLabel("Radio 1");
                throw new UnsupportedOperationException("Not supported yet.");
            }

            @Override
            public void focusLost(FocusEvent e) {
                ch.setLabel("");
                ch2.setLabel("Radio 2");
                throw new UnsupportedOperationException("Not supported yet.");
            }
            
        });
    }
    public static void main(String[] args) {
        new Main();
    }
}`
            }
        },
        {
            "id": 383,
            "description": "Java Program to Handle Keyboard Events.",
            "difficulty": "medium",
            "topic": 4,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program handles keyboard events to capture key presses in an AWT Frame.",
                "code": `import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

class Main extends java.awt.Frame{
    java.awt.Label l2;
    Main(){
        setSize(400, 600);
        setVisible(true);
        setLayout(null);
        java.awt.Label l1 = new java.awt.Label("Enter Text : ");
        java.awt.TextField tf = new java.awt.TextField();
        l2 = new java.awt.Label();
        l1.setBounds(20, 70, 100, 40);
        tf.setBounds(130, 70, 200, 50);
        l2.setBounds(130, 140, 100, 10);
        add(l1);
        add(tf);
        add(l2);
        tf.addKeyListener(new KeyListener() {
            @Override
            public void keyReleased(KeyEvent e) {
                l2.setText("Key Released : " + e.getKeyChar());
                throw new UnsupportedOperationException("Not supported yet.");
            }

            @Override
            public void keyPressed(KeyEvent e) {
                l2.setText("Key Pressed : " + e.getKeyChar());
                throw new UnsupportedOperationException("Not supported yet.");
            }

            @Override
            public void keyTyped(KeyEvent e) {
                tf.setText(tf.getText()+e.getKeyChar());
                throw new UnsupportedOperationException("Not supported yet.");
            }
            
        });
    }
    public static void main(String[] args) {
        new Main();
    }
}`
            }
        },
        {
            "id": 384,
            "description": "Java Program to Handle Mouse Events.",
            "difficulty": "medium",
            "topic": 4,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates handling mouse events such as clicks, movements, and drags in an AWT Frame.",
                "code": `import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;

class Main extends java.awt.Frame{
    Main(){
        setSize(400, 600);
        setVisible(true);
        setLayout(null);
        java.awt.Label l1 = new java.awt.Label("Mouse Event : ");
        l1.setBounds(20, 70, 300, 40);
        add(l1);
        l1.addMouseListener(new MouseListener() {
            @Override
            public void mouseClicked(MouseEvent e) {
                l1.setText("Mouse Event : Clicked");
                throw new UnsupportedOperationException("Not supported yet.");
            }

            @Override
            public void mouseEntered(MouseEvent e) {
                l1.setText("Mouse Event : Entered");
                throw new UnsupportedOperationException("Not supported yet.");
            }

            @Override
            public void mouseExited(MouseEvent e) {
                l1.setText("Mouse Event : Exited");
                throw new UnsupportedOperationException("Not supported yet.");
            }

            @Override
            public void mousePressed(MouseEvent e) {
                l1.setText("Mouse Event : Pressed");
                throw new UnsupportedOperationException("Not supported yet.");
            }

            @Override
            public void mouseReleased(MouseEvent e) {
                l1.setText("Mouse Event : Released");
                throw new UnsupportedOperationException("Not supported yet.");
            }
        });
    }
    public static void main(String[] args) {
        new Main();
    }
}`
            }
        },
        {
            "id": 385,
            "description": "Java Program to Get and Set State and Get Label of a Check Box.",
            "difficulty": "easy",
            "topic": 4,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to manipulate checkboxes, including setting their state and getting their labels.",
                "code": `
import java.awt.Checkbox;
import java.awt.Label;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;

class Main extends java.awt.Frame{
    Label lb, lb2;
    Checkbox cb;
    Main(){
        setSize(400, 600);
        setVisible(true);
        setLayout(null);
        cb = new Checkbox("Checked", true);
        lb = new Label("Status of Checkbox : " + cb.getState());
        lb2 = new Label("Label of Checkbox : " + cb.getLabel());
        cb.setBounds(10, 50, 200, 20);
        lb.setBounds(10, 80, 200, 20);
        lb2.setBounds(10, 110, 200, 20);

        add(cb);
        add(lb);
        add(lb2);
        cb.addItemListener(new ItemListener() {
            @Override
            public void itemStateChanged(ItemEvent e) {
                if(e.getStateChange() == e.SELECTED){
                    cb.setLabel("Checked");
                }
                else{
                    cb.setLabel("UnChecked");
                }
                lb.setText("Status of Checkbox : " + cb.getState());
                lb2.setText("Label of Checkbox : " + cb.getLabel());
                throw new UnsupportedOperationException("Not supported yet.");
            }
            
        });
    }
    public static void main(String[] args) {
        new Main();
    }
}`
            }
        }



    ]

}

