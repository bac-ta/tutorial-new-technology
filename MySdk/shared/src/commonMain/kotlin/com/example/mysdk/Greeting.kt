package com.example.mysdk

class Greeting {
    fun greeting(): String {
        return "Hello, ${Platform().platform}!"
    }
}