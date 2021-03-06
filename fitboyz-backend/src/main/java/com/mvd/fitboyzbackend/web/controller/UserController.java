package com.mvd.fitboyzbackend.web.controller;

import com.mvd.fitboyzbackend.web.dto.*;
import com.mvd.fitboyzbackend.web.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable("id") Long id) {

        UserDto userDto = userService.getUserDtoById(id);

        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<UserDto> getUser(@RequestParam String username, @RequestParam String password) {

        UserDto userDto = userService.getUserDto(username, password);

        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<UserDto> postUser(@RequestBody UserDto postUser) {
        UserDto createdUser = userService.createUser(postUser);

        return new ResponseEntity<>(createdUser, HttpStatus.OK);
    }
}
