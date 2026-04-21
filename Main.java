import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Tab t = new Tab(25);

        System.out.println("wszystkie elementy:");
        t.showAll();

        Scanner sc = new Scanner(System.in);
        System.out.print("podaj liczbe do wyszukania: ");
        int x = sc.nextInt();

        int index = t.find(x);

        if (index != -1) {
            System.out.println("znaleziono na indeksie: " + index);
        }

        System.out.println("liczby nieparzyste:");
        int ile = t.showOdd();
        System.out.println("ilosc nieparzystych: " + ile);

        double avg = t.average();
        System.out.println("srednia: " + avg);
    }
}