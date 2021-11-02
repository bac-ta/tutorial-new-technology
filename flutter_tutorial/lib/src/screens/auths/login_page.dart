import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:http/http.dart' as http;

class LoginPage extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    throw UnimplementedError();
  }
}

class _LoginPageState extends State<LoginPage> {
  bool _isLoading = false;
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    throw UnimplementedError();
  }

  signIn(String email, String password) async {
    SharedPreferences shared = await SharedPreferences.getInstance();
    Map loginData = {'email': email, 'password': password};
    Map<String, String> headers = {"Content-Type": "application/json"};

    final requestBody = jsonEncode({"email": email, "password": password});


  }
}
