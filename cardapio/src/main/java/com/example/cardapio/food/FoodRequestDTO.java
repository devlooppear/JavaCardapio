package com.example.cardapio.food;

public record FoodRequestDTO(String title, String image, Integer price) {
    public FoodRequestDTO {
        if (title == null || title.isEmpty()) {
            throw new IllegalArgumentException("Title cannot be null or empty");
        }
        if (price == null || price <= 0) {
            throw new IllegalArgumentException("Price must be a positive integer");
        }
    }
    
    public String getTitle() {
        return title;
    }
    
    public String getImage() {
        return image;
    }
    
    public Integer getPrice() {
        return price;
    }
}
