import java.util.Random;

public class Tab {
    private int[] tab;
    private int size;

    public Tab(int size) {
        this.size = size;
        tab = new int[size];
        Random r = new Random();

        for (int i = 0; i < size; i++) {
            tab[i] = r.nextInt(1000) + 1;
        }
    }

    public void showAll() {
        for (int i = 0; i < size; i++) {
            System.out.println(i + ": " + tab[i]);
        }
    }

    /**********************************************
     nazwa metody: find
     opis metody: szuka pierwszego wystapienia liczby
     parametry: value - liczba do znalezienia
     zwracany typ i opis: int - indeks albo -1
     autor: mateusz
     ***********************************************/
    public int find(int value) {
        for (int i = 0; i < size; i++) {
            if (tab[i] == value) {
                return i;
            }
        }
        return -1;
    }

    public int showOdd() {
        int count = 0;

        for (int i = 0; i < size; i++) {
            if (tab[i] % 2 != 0) {
                System.out.print(tab[i] + " ");
                count++;
            }
        }
        System.out.println();
        return count;
    }

    public double average() {
        int sum = 0;

        for (int i = 0; i < size; i++) {
            sum += tab[i];
        }

        return (double) sum / size;
    }
}