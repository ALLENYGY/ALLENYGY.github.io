package Java.Generics;

import java.util.ArrayList;
import java.util.Random;

public class Generics<T> {

    Random random = new Random();
    private T product;
    public ArrayList<T> products = new ArrayList<>();

    public Generics() {

    }

    public void addproduct(T product) {
        products.add(product);
    }

    public T getproduct() {
        product = products.get(random.nextInt(products.size()));
        return product;
    }

    public static void main(String[] args) {
        Generics<String> sGenerics = new Generics<>();
        String[] sProducts = { "Iphone", "Iwatch", "Mac", "airpods" };
        for (int i = 0; i < sProducts.length; i++) {
            sGenerics.addproduct(sProducts[i]);
        }
        System.out.println("You get " + sGenerics.getproduct());
    }
}

