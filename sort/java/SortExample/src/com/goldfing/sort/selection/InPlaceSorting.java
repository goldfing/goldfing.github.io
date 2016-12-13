package com.goldfing.sort.selection;

// In-place Sorting
public class InPlaceSorting {

    public static void main(String[] args) {
	    int[] src = {1, 5, 6, 9, 2, 4, 3};

        int tmp;
        int pos;

        for ( int i = 0 ; i < src.length-1 ; i++) {
            pos = i;
            for ( int j = i+1 ; j < src.length ; j++) {
                if (j != pos && src[j] < src[pos]) {
                    tmp = src[i];
                    src[i] = src[j];
                    src[j] = tmp;
                }
            }
        }

        printArray(src);
    }

    public static void printArray(int[] arr) {
        for (int i : arr) {
            System.out.println(i);
        }
    }
}
