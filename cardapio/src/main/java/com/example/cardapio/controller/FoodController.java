package com.example.cardapio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import com.example.cardapio.food.Food;
import com.example.cardapio.food.FoodRepository;
import com.example.cardapio.food.FoodRequestDTO;
import com.example.cardapio.food.FoodResponseDTO;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/food")
public class FoodController {
  
  @Autowired
  private FoodRepository repository;

  @CrossOrigin(origins = "*", allowedHeaders = "*")
  @GetMapping
  public List<FoodResponseDTO> getAllFood() {
    List<Food> foodList = repository.findAll();
    List<FoodResponseDTO> responseList = foodList.stream()
        .map(food -> new FoodResponseDTO(food.getId(), food.getTitle(), food.getImage(), food.getPrice()))
        .collect(Collectors.toList());
    return responseList;
  }

  @CrossOrigin(origins = "*", allowedHeaders = "*")
  @GetMapping("/{id}")
  public FoodResponseDTO getFoodById(@PathVariable Long id) {
    Optional<Food> optionalFood = repository.findById(id);
    if (optionalFood.isPresent()) {
      Food food = optionalFood.get();
      return new FoodResponseDTO(food.getId(), food.getTitle(), food.getImage(), food.getPrice());
    } else {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Food not found");
    }
  }

  @CrossOrigin(origins = "*", allowedHeaders = "*")
  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public void saveFood(@RequestBody FoodRequestDTO foodRequestDTO) {
    Food food = new Food(foodRequestDTO);
    repository.save(food);
  }

  @CrossOrigin(origins = "*", allowedHeaders = "*")
  @PutMapping("/{id}")
  public void updateFood(@PathVariable Long id, @RequestBody FoodRequestDTO foodRequestDTO) {
    Optional<Food> optionalFood = repository.findById(id);
    if (optionalFood.isPresent()) {
      Food food = optionalFood.get();
      food.setTitle(foodRequestDTO.getTitle());
      food.setImage(foodRequestDTO.getImage());
      food.setPrice(foodRequestDTO.getPrice());
      repository.save(food);
    } else {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Food not found");
    }
  }

  @CrossOrigin(origins = "*", allowedHeaders = "*")
  @DeleteMapping("/{id}")
  public void deleteFood(@PathVariable Long id) {
    Optional<Food> optionalFood = repository.findById(id);
    if (optionalFood.isPresent()) {
      repository.delete(optionalFood.get());
    } else {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Food not found");
    }
  }
}
