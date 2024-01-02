import java.util.Scanner;

class Test
{
    public static void main(String[] args)
    {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.println("Enter a number: ");
            int n = sc.nextInt();
            System.out.println("You entered " + n);
        }
    }
}